import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Leaf } from "lucide-react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const logoLink = !user ? "/" : isAdmin ? "/admin/dashboard" : "/dashboard";

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50  border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={logoLink}
            className="flex items-center gap-2 text-gray-900 hover:text-green-600 transition-colors"
          >
            <Leaf className="w-6 h-6 text-green-600" strokeWidth={2} />
            <span className="text-xl font-bold">Science For Life</span>
          </Link>

          {/* Right Menu */}
          <div className="flex items-center gap-8">
            {!user ? (
              <>
                <a
                  href="/#"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Beranda
                </a>
                <a
                  href="/#tentang-kami"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Tentang Kami
                </a>
                <a
                  href="/#program-unggulan"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Modul
                </a>
                <a
                  href="/#kontak"
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  Kontak
                </a>

                <Link
                  to="/login"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Mulai Belajar
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                {isAdmin ? (
                  <></>
                ) : (
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                )}

                <span className="text-gray-600 font-medium">
                  Hi, {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="
    flex items-center gap-2
    bg-red-500 text-white
    px-5 py-2.5
    rounded-lg
    font-semibold
    shadow-sm
    hover:bg-red-600 hover:shadow-md
    active:scale-95
    transition-all duration-200
  "
                >
                  <LogOut className="w-4 h-4" />
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
