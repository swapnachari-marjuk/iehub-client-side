import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Utility/Logo";
import useAuth from "../hooks/useAuth";
import { CircleLoader } from "react-spinners";
import { LuLogOut } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Swal from "sweetalert2";
import ThemeBtn from "./Utility/ThemeBtn";
import UserDropdown from "./Utility/UserDropdown";

const Navbar = () => {
  const { loading, user } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    // <div>
      <div className="navbar max-w-7xl mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
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
          <ThemeBtn />
          {loading ? (
            <CircleLoader color="#0707f4" size={30} speedMultiplier={0} />
          ) : user ? (
            <UserDropdown />
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
    // </div>
  );
};

export default Navbar;
