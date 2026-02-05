import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

const Dashboard = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/modules")
      .then((res) => {
        setModules(res.data.modules);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-light py-8 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Memuat modul...</p>
          </div>
        ) : modules.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada modul tersedia</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {module.image_url && (
                  <img
                    src={`http://localhost:5000${module.image_url}`}
                    alt={module.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {module.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {module.description || "Tidak ada deskripsi"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {module.sub_module_count || 0} Sub Modul
                    </span>
                    <span className="text-secondary font-semibold">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
