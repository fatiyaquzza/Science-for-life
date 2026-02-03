import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import api from '../utils/api';
import ChatAI from '../components/ChatAI';

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [subModule, setSubModule] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  const score = location.state?.score;
  const correctCount = location.state?.correctCount;
  const totalQuestions = location.state?.totalQuestions;

  useEffect(() => {
    Promise.all([
      api.get(`/submodules/${id}`),
      api.get(`/progress/submodule/${id}`)
    ])
      .then(([subModuleRes, progressRes]) => {
        setSubModule(subModuleRes.data.subModule);
        setProgress(progressRes.data.progress);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat hasil...</p>
      </div>
    );
  }

  const isPassed = progress?.is_passed || (score >= (subModule?.passing_grade || 70));

  return (
    <div className="min-h-screen bg-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-primary mb-8">Hasil Postest</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {isPassed ? (
            <>
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Selamat! Anda Lulus
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Anda telah menyelesaikan materi dengan baik
              </p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Belum Lulus
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Jangan menyerah! Coba lagi untuk meningkatkan pemahaman Anda
              </p>
            </>
          )}

          <div className="bg-light rounded-lg p-6 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">{score || 0}%</p>
                <p className="text-sm text-gray-600">Nilai</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">
                  {correctCount || 0}/{totalQuestions || 0}
                </p>
                <p className="text-sm text-gray-600">Benar</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">
                  {subModule?.passing_grade || 70}%
                </p>
                <p className="text-sm text-gray-600">Passing Grade</p>
              </div>
            </div>
          </div>

          {isPassed ? (
            <div className="space-y-4">
              <ChatAI subModuleId={parseInt(id)} subModuleName={subModule?.name} />
            </div>
          ) : (
            <button
              onClick={() => navigate(`/postest/${id}`)}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Ulangi Postest
            </button>
          )}

          <div className="mt-6">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-secondary hover:underline"
            >
              Kembali ke Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
