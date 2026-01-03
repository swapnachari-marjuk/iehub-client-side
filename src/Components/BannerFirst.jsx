import React from "react";

const BannerFirst = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/S7sHzgbp/sea-ship.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md text-shadow-lg/50">
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-shadow-lg/30">
            Connect to the World of Imports
          </h1>
          <p className="mb-5 text-[18px]">
            Discover premium products and reliable global suppliers. Build
            long-term import partnerships with trusted businesses worldwide.
          </p>
          <button className="btn btn-primary border-none">
            Explore Imports
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerFirst;
