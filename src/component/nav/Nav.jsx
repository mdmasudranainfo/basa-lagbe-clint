import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

import useSeller from "../Hooka/UseSeller";

function Nav() {
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const menuItem = (
    <>
      <li className="text-white font-bold">
        <Link to="/">Home</Link>
      </li>

      {user?.uid && !isSeller && (
        <li className="text-white font-bold">
          <Link to="/requestseller">Request Seller</Link>
        </li>
      )}

      <li className="text-white font-bold">
        <Link to="/contactus">Contact Us</Link>
      </li>
      <li className="text-white font-bold">
        <Link to="/aboutus">About Us</Link>
      </li>

      {user?.uid && (
        <li className="text-white font-bold">
          <Link to="/dashbord">DashBoard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-lg bg-black sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl text-white"
          >
            বাড়িভাড়া
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end dropdown flex justify-end ">
          {/* <Link to="/login" className="btn text-white">Login</Link> */}

          {user?.uid ? (
            <>
              <label tabIndex={0} className="btn btn-primary">
                <div className="text-white">{user?.displayName}</div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="btn-sm btn-primary" onClick={handleLogOut}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <li>
              <Link className="btn btn-sm btn-primary text-white" to="/login">
                Login
              </Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
