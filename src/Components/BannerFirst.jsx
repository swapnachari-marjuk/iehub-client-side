import React from "react";

const BannerFirst = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/jvLLY8j5/port-ship.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Connect to the World of Imports
          </h1>
          <p className="mb-5">
            Discover premium products and reliable global suppliers. Build
            long-term import partnerships with trusted businesses worldwide.
          </p>
          <button className="btn btn-primary border-none hover:bg-blue-700">
            Explore Imports
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerFirst;
