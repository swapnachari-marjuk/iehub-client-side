import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Utility/Logo";
import useAuth from "../hooks/useAuth";
import { CircleLoader } from "react-spinners";

const Navbar = () => {
  const { loading, user, userSignOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/myExport"}>My Export</NavLink>
      </li>
      <li>
        <NavLink to={"/myImport"}>My Import</NavLink>
      </li>
      <li>
        <NavLink to={"/addExport"}>Add Export</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <CircleLoader color="#0707f4" size={30} speedMultiplier={0} />
          ) : user ? (
            <div className="flex gap-2 items-center">
              <img
                title={user.displayName}
                className=" w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                className="btn lg:btn btn-sm btn-primary"
                onClick={() =>
                  userSignOut()
                    .then(() => "")
                    .catch((err) => console.log(err))
                }
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/register"} className="btn lg:btn btn-sm btn-primary">
                Register
              </Link>
              <Link
                to={"login"}
                className="btn btn-ghost lg:btn btn-sm  btn-outline text-primary"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
