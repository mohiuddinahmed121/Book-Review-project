import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                  : "font-bold hover:bg-gray-200 rounded-lg p-2"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                  : "font-bold hover:bg-gray-200 rounded-lg p-2"
              }
              to="/listedbook"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                  : "font-bold hover:bg-gray-200 rounded-lg p-2"
              }
              to="/pageread"
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7  text-gray-600">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                : "font-bold hover:bg-gray-200 rounded-lg p-2"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                : "font-bold hover:bg-gray-200 rounded-lg p-2"
            }
            to="/listedbook"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold rounded-lg p-2 text-base border-2 border-green-500"
                : "font-bold hover:bg-gray-200 rounded-lg p-2"
            }
            to="/pageread"
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-cyan-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
