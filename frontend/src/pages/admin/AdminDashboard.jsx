import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const menuItems = [
    { title: 'Manajemen Modul', path: '/admin/modules', icon: '📚' },
    { title: 'Manajemen Sub Modul', path: '/admin/submodules', icon: '📖' },
    { title: 'Manajemen Materi', path: '/admin/materials', icon: '📄' },
    { title: 'Manajemen Soal', path: '/admin/questions', icon: '❓' },
    { title: 'Manajemen User', path: '/admin/users', icon: '👥' }
  ];

  return (
    <div className="min-h-screen bg-light py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
