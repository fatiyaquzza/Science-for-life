import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Science For Life
          </Link>

          {/* Right Menu */}
          <div className="flex items-center gap-6">
            {!user ? (
              <>
                <a
                  href="#tentang-kami"
                  className="hover:text-secondary transition-colors"
                >
                  Tentang Kami
                </a>

                <a
                  href="#program-unggulan"
                  className="hover:text-secondary transition-colors"
                >
                  Program Unggulan
                </a>

                <a
                  href="#faq"
                  className="hover:text-secondary transition-colors"
                >
                  FAQ
                </a>

                <Link
                  to="/login"
                  className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded transition-colors"
                >
                  Mulai Belajar
                </Link>
              </>
            ) : (
              <>
                <span className="text-light font-medium">Hi, {user.name}</span>

                <button
                  onClick={handleLogout}
                  className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
