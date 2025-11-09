import React from "react";

const BannerScnd = () => {
  return (
    <div
      className="hero min-h-[80vh]  bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/S7sHzgbp/sea-ship.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold">
            Expand Your Reach, Export with Confidence
          </h1>
          <p className="mb-5">
            Showcase your products to thousands of verified importers. Grow your
            export business globally with transparency and ease.
          </p>
          <button className="btn btn-primary border-none hover:bg-blue-700">
            Start Exporting
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerScnd;

