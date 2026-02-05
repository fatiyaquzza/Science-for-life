import { BookOpen, Users, HelpCircle } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-light pb-8 pt-28 px-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Kelola seluruh modul, materi, soal, dan pengguna dari satu tempat.
          </p>
        </div>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Total Modul */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium mb-1">Total Modul</p>
                <h3 className="text-3xl font-bold text-gray-900">12</h3>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Total User */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium mb-1">Total User</p>
                <h3 className="text-3xl font-bold text-gray-900">245</h3>
              </div>
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Total Soal */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium mb-1">Total Soal</p>
                <h3 className="text-3xl font-bold text-gray-900">480</h3>
              </div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                <HelpCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Optional section (future ready) */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Ringkasan Sistem
          </h2>
          <p className="text-gray-600 text-sm">
            Dashboard ini digunakan untuk memantau dan mengelola seluruh konten
            pembelajaran, pengguna, serta evaluasi sistem Science For Life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
