import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <Link
  to={
    user
      ? isAdmin
        ? "/admin/dashboard"
        : "/dashboard"
      : "/"
  }
  className="text-2xl font-bold"
>
  Science For Life
</Link>

          <div className="flex items-center gap-6">
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="hover:text-secondary transition-colors"
                  >
                    Admin Panel
                  </Link>
                )}

                <span className="text-light">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-secondary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary hover:bg-opacity-80 px-4 py-2 rounded transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
