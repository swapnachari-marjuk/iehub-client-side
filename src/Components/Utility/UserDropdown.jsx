import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";

const UserDropdown = () => {
  const { user, userSignOut } = useAuth();
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
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="m-1">
        <img
          title={user?.displayName}
          className="md:w-10 w-8 rounded-full"
          src={user?.photoURL}
          alt={user?.displayName}
        />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm"
      >
        <li>
          <p className="flex justify-center items-center">
            <img
              title={user?.displayName}
              className="md:w-10 w-8 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
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
  );
};

export default UserDropdown;
