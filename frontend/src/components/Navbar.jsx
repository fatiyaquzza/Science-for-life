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
    <nav className="fixed z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={logoLink}
            className="flex items-center gap-2 text-gray-900 transition-colors hover:text-green-600"
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
                  className="font-medium text-gray-700 transition-colors hover:text-green-600"
                >
                  Beranda
                </a>
                <a
                  href="/#tentang-kami"
                  className="font-medium text-gray-700 transition-colors hover:text-green-600"
                >
                  Tentang Kami
                </a>
                <a
                  href="/#program-unggulan"
                  className="font-medium text-gray-700 transition-colors hover:text-green-600"
                >
                  Modul
                </a>
                <a
                  href="/#kontak"
                  className="font-medium text-gray-700 transition-colors hover:text-green-600"
                >
                  Kontak
                </a>

                <Link
                  to="/login"
                  className="bg-primary hover:bg-[#0C452A] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
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
                    className="font-medium text-gray-700 transition-colors hover:text-green-600"
                  >
                    Dashboard
                  </Link>
                )}

                <span className="font-medium text-gray-600">
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
