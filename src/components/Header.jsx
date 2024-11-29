import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";


const Header = () => {
  const { user, handleLogout } = useContext(authContext); 
  const navigate = useNavigate();

  const handleSignOut = () => {
    handleLogout()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        
      });
  };

  return (
    <div className="w-full mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
                Home
              </NavLink>
              <NavLink to="/start-learning" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
                Start Learning
              </NavLink>
              <NavLink to="/tutorial" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
                Tutorials
              </NavLink>
              <NavLink to="/about-us" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
                About Us
              </NavLink>
              {user && (
                <NavLink to="/my-profile" className={({ isActive }) => 
                  isActive ? "text-[#caf12d] font-bold underline" : "text-white"
                }>
                  My Profile
                </NavLink>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-lg lg:text-2xl text-[#caf12d] glow-effect">Lingo Bingo</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <NavLink to="/" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
              Home
            </NavLink>
            <NavLink to="/start-learning" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
              Start Learning
            </NavLink>
            <NavLink to="/tutorial" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
              Tutorials
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => 
    isActive ? "text-[#caf12d] font-bold underline" : "text-white"
  }>
              About Us
            </NavLink>
            {user && (
              <NavLink to="/my-profile" className={({ isActive }) => 
                isActive ? "text-[#caf12d] font-bold underline" : "text-white"
              }>
                My Profile
              </NavLink>
            )}
          </ul>
        </div>

        <div className="navbar-end flex items-center">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white hidden lg:inline">
                Welcome, {user.displayName || "User"}!
              </span>
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <button
                onClick={handleSignOut}
                className="btn bg-[#657915] text-white hover:text-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-[#657915] text-white hover:text-white">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;