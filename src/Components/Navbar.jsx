import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Utility/Logo";
import useAuth from "../hooks/useAuth";
import { CircleLoader } from "react-spinners";
import { LuLogOut } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
  const { loading, user, userSignOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0041c2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        userSignOut()
          .then(() =>
            Swal.fire({
              title: "LoggedOut",
              text: "You are logged out successfully",
              icon: "success",
            })
          )
          .catch((err) => toast.warning(err));
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/myImport"}>My Import</NavLink>
      </li>
      <li>
        <NavLink to={"/myExport"}>My Export</NavLink>
      </li>
      <li>
        <NavLink to={"/addExport"}>Add Export</NavLink>
      </li> */}
    </>
  );
  return (
    <div>
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
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle mr-2"
          />

          {loading ? (
            <CircleLoader color="#0707f4" size={30} speedMultiplier={0} />
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  title={user.displayName}
                  className="md:w-10 w-8 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
              >
                <li>
                  <p className="flex justify-center items-center">
                    <img
                      title={user.displayName}
                      className="md:w-10 w-8 rounded-full"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </p>
                </li>
                <li>
                  <Link to={"/dashboard"}>
                    <HiOutlineWrenchScrewdriver />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    <LuLogOut /> LogOut
                  </button>
                </li>
              </ul>
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
