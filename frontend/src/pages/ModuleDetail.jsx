import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

const ModuleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [module, setModule] = useState(null);
  const [subModules, setSubModules] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get(`/modules/${id}`),
      api.get(`/submodules/module/${id}`),
    ])
      .then(([moduleRes, subModulesRes]) => {
        setModule(moduleRes.data.module);
        setSubModules(subModulesRes.data.subModules);

        // Fetch progress for all sub modules
        if (user) {
          const progressPromises = subModulesRes.data.subModules.map((sm) =>
            api
              .get(`/progress/submodule/${sm.id}`)
              .then((res) => ({ id: sm.id, progress: res.data.progress }))
              .catch(() => ({ id: sm.id, progress: null }))
          );

          Promise.all(progressPromises).then((results) => {
            const map = {};
            results.forEach(({ id, progress }) => {
              map[id] = progress;
            });
            setProgressMap(map);
          });
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, user]);

  const getStatusBadge = (subModule) => {
    const progress = progressMap[subModule.id];

    if (!progress || !progress.pretest_done) {
      return { text: "Belum Dimulai", color: "bg-gray-200 text-gray-700" };
    }

    if (progress.is_passed) {
      return { text: "Lulus", color: "bg-secondary text-white" };
    }

    if (progress.pretest_done && !progress.postest_done) {
      return {
        text: "Pretest Selesai",
        color: "bg-yellow-200 text-yellow-700",
      };
    }

    return { text: "Belum Lulus", color: "bg-orange-200 text-orange-700" };
  };

  const handleSubModuleClick = async (subModuleId) => {
    try {
      const res = await api.get(`/progress/submodule/${subModuleId}`);
      const progress = res.data.progress;

      if (!progress.pretest_done) {
        navigate(`/pretest/${subModuleId}`);
      } else {
        navigate(`/material/${subModuleId}`);
      }
    } catch (error) {
      // If no progress exists, go to pretest
      navigate(`/pretest/${subModuleId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat...</p>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Modul tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-8 pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-secondary hover:underline mb-4"
          >
            ← Kembali ke Dashboard
          </button>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {module.name}
          </h1>
          {module.description && (
            <p className="text-gray-600">{module.description}</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Sub Modul</h2>

          {subModules.length === 0 ? (
            <p className="text-gray-500">Belum ada sub modul tersedia</p>
          ) : (
            <div className="space-y-4">
              {subModules.map((subModule) => (
                <div
                  key={subModule.id}
                  onClick={() => handleSubModuleClick(subModule.id)}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-light cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {subModule.name}
                      </h3>
                      {subModule.description && (
                        <p className="text-gray-600 text-sm mb-2">
                          {subModule.description}
                        </p>
                      )}
                      <p className="text-xs text-gray-500">
                        Passing Grade: {subModule.passing_grade}%
                      </p>
                    </div>
                    {(() => {
                      const badge = getStatusBadge(subModule);
                      return (
                        <span
                          className={`${badge.color} px-3 py-1 rounded-full text-sm`}
                        >
                          {badge.text}
                        </span>
                      );
                    })()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
