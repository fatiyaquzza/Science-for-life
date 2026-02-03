import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const { user } = useAuth();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/modules')
      .then((res) => {
        setModules(res.data.modules.slice(0, 3)); // Show only 3 featured modules
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Science For Life</h1>
          <p className="text-2xl mb-8">Pendidikan untuk Semua</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Platform edukasi interaktif yang membawa ilmu pengetahuan ke
            kehidupan sehari-hari. Belajar dengan cara yang menyenangkan dan
            mudah dipahami.
          </p>
          {user ? (
            <Link
              to="/dashboard"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Masuk ke Dashboard
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
      </section>

      {/* Featured Modules */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Modul Unggulan
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Memuat modul...</p>
            </div>
          ) : modules.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Belum ada modul tersedia</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {modules.map((module) => (
                <div
                  key={module.id}
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
                      {module.description || 'Tidak ada deskripsi'}
                    </p>
                    {user ? (
                      <Link
                        to={`/module/${module.id}`}
                        className="text-secondary font-semibold hover:underline"
                      >
                        Lihat Detail →
                      </Link>
                    ) : (
                      <Link
                        to="/register"
                        className="text-secondary font-semibold hover:underline"
                      >
                        Daftar untuk Akses →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Materi Lengkap
              </h3>
              <p className="text-gray-600">
                Akses berbagai modul pembelajaran yang disusun secara sistematis
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                AI Assistant
              </h3>
              <p className="text-gray-600">
                Dapatkan bantuan belajar dari AI yang siap membantu 24/7
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Pantau perkembangan belajar Anda dengan sistem tracking yang akurat
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
