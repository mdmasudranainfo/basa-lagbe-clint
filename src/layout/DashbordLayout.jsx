import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../component/Hooka/UseAdmin";
import useSeller from "../component/Hooka/UseSeller";
import { AuthContext } from "../Context/UserContext";

const DashbordLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  console.log(user?.email);
  console.log("seller", isSeller);

  return (
    <div className="">
      {/* navbar start
       */}
      <div className="navbar bg-primary text-white container mx-auto">
        <div className="flex-1">
          <label
            htmlFor="my-drawer-2"
            className="lg:hidden  btn btn-circle btn-primary swap swap-rotate"
          >
            <input type="checkbox" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <Link
            to="/"
            className="lg:block hidden text-white font-bold  normal-case text-2xl"
          >
            বাড়ি-ভাড়া
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-secondary">
              <div className=" rounded-full">
                <button className="text-white"> {user?.displayName}</button>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-primary menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* navbar end */}

      <div className="drawer drawer-mobile container mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content gap-2">
            {/* this section will be implement letter...................................... */}
            <li>
              <Link
                to="/dashbord"
                className="btn btn-primary btn-outline text-white"
              >
                Dashboard
              </Link>
            </li>

            {isSeller && (
              <li>
                <Link
                  to="/dashbord/addhome"
                  className="btn btn-primary btn-outline text-white"
                >
                  {" "}
                  Add Home
                </Link>
              </li>
            )}

            {isSeller && (
              <li>
                <Link
                  to="/dashbord/mybookingsl"
                  className="btn btn-primary btn-outline text-white"
                >
                  {" "}
                  My Homes Sellers
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link
                  to="/dashbord/allhome"
                  className="btn btn-primary btn-outline text-white"
                >
                  All Home
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link
                  to="/dashbord/users"
                  className="btn btn-primary btn-outline text-white"
                >
                  Users
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link
                  to="/dashbord/sellers"
                  className="btn btn-primary btn-outline text-white"
                >
                  {" "}
                  Sellers
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link
                  to="/dashbord/sellerrequest"
                  className="btn btn-primary btn-outline text-white"
                >
                  Pending Sellers
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link
                  to="/dashbord/allbooking"
                  className="btn btn-primary btn-outline text-white"
                >
                  All Booking
                </Link>
              </li>
            )}

            {isSeller && (
              <li>
                <Link
                  to="/dashbord/bookingforSeller"
                  className="btn btn-primary btn-outline text-white"
                >
                  {" "}
                  Booking Sells
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/dashbord/mybookinguser"
                className="btn btn-primary btn-outline text-white"
              >
                My Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
