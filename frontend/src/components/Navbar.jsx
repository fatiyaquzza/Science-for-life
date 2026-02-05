import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Leaf } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-900 hover:text-green-600 transition-colors"
          >
            <Leaf className="w-6 h-6 text-green-600" strokeWidth={2} />
            <span className="text-xl font-bold">Science For Life</span>
          </Link>

          {/* Right Menu */}
          <div className="flex items-center gap-8">
            <a
              href="/#"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Beranda
            </a>
            <a
              href="/#program-unggulan"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Modul
            </a>
            <a
              href="/#tentang-kami"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Tentang kami
            </a>
            <a
              href="/#kontak"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Kontak
            </a>

            {!user ? (
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Coba Sekarang!
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Hi, {user.name}</span>
                <Link
                  to="/dashboard"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
