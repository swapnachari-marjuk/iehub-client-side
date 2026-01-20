import React from "react";
import { FiHome } from "react-icons/fi";
import { TbPackageExport, TbPackageImport } from "react-icons/tb";
import { Link, Outlet } from "react-router";
import { MdAddShoppingCart } from "react-icons/md";
import ThemeBtn from "../Components/Utility/ThemeBtn";
import UserDropdown from "../Components/Utility/UserDropdown";

const DashLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full">
          {/* toggle btn */}

          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>

          <div className="px-4">
            <Link
              to={"/dashboard"}
              className="font-bold italic text-shadow-md/20"
            >
              IE<span className="text-primary">Hub Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeBtn />
            <UserDropdown />
          </div>
        </nav>

        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* iehub home */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="IEHub Home"
              >
                <img
                  className="md:w-5 w-7 inline"
                  src="https://i.ibb.co.com/Q7q5hRvj/ship-logo-template-ship-element-ship-icon-illustration-vector.jpg"
                  alt=""
                />

                <span className="is-drawer-close:hidden">
                  <p className="font-bold italic text-shadow-md/20">
                    IE<span className="text-primary">Hub</span>
                  </p>
                </span>
              </Link>
            </li>

            {/* dash home */}
            <li>
              <Link
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dash Home"
              >
                <FiHome />
                <span className="is-drawer-close:hidden">Dash Home</span>
              </Link>
            </li>

            {/* imports */}
            <li>
              <Link
                to={"/dashboard/myImport"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Imports"
              >
                <TbPackageExport />
                <span className="is-drawer-close:hidden">My Exports</span>
              </Link>
            </li>

            {/* exports */}
            <li>
              <Link
                to={"/dashboard/myExport"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Exports"
              >
                <TbPackageImport />
                <span className="is-drawer-close:hidden">My Exports</span>
              </Link>
            </li>

            {/* add export */}
            <li>
              <Link
                to={"/dashboard/addExport"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Export Product"
              >
                <MdAddShoppingCart />
                <span className="is-drawer-close:hidden">My Exports</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
