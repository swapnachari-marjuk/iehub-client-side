import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const [scrolling, setScrolling] = useState()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`${scrolling ? "bg-white/70 backdrop-blur-md border border-white/20 shadow-sm" : "bg-base-100 shadow-sm"}  dark:border-b-2 dark:border-b-gray-600 sticky top-0 z-50`}
      >
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
