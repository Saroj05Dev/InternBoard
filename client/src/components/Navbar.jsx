import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RocketIcon,
  LogInIcon,
  LogOutIcon,
  UserPlusIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-indigo-200"
            onClick={() => setIsOpen(false)}
          >
            <RocketIcon size={22} />
            <span className="text-xl font-semibold tracking-wide">
              InternBoard
            </span>
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-200 focus:outline-none"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-indigo-200 transition">
              Dashboard
            </Link>
            <Link to="/about" className="hover:text-indigo-200 transition">
              About
            </Link>
            <Link
              to="/leaderboard"
              className="hover:text-indigo-200 transition duration-200"
            >
              Leaderboard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3 text-sm">
            {user ? (
              <>
                <div className="bg-white text-indigo-600 px-3 py-1 rounded-full font-medium">
                  {user.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-indigo-600 transition"
                >
                  <LogOutIcon size={16} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-1 bg-white text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100 transition"
                >
                  <LogInIcon size={16} /> Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-indigo-600 transition"
                >
                  <UserPlusIcon size={16} /> Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-200"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-200"
          >
            About
          </Link>
          <div>
            <Link
              to="/leaderboard"
              className="hover:text-indigo-200 transition duration-200"
            >
              Leaderboard
            </Link>
          </div>

          {user ? (
            <>
              <div className="bg-white text-indigo-600 px-3 py-1 rounded font-medium inline-block">
                {user.name}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-indigo-600 transition"
              >
                <LogOutIcon size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 bg-white text-indigo-600 px-3 py-1 rounded hover:bg-indigo-100 transition inline-block"
              >
                <LogInIcon size={16} /> Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-indigo-600 transition inline-block"
              >
                <UserPlusIcon size={16} /> Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
