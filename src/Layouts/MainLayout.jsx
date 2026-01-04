import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="bg-base-100 shadow-sm dark:border-b-2 dark:border-b-gray-600">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-289px)] max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
