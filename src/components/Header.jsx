import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/start-learning">Start Learning</NavLink>
        <NavLink to="/tutorials">Tutorials</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Lingo Bingo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/start-learning">Start Learning</NavLink>
        <NavLink to="/tutorials">Tutorials</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to="/login"><button>Login</button></NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;