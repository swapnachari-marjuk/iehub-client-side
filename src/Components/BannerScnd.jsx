import React from "react";

const BannerScnd = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/F49tx7FL/aerial-view-container-cargo-ship-sea-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md text-shadow-lg/50">
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold  text-shadow-lg/30">
            Expand Your Reach, Export with Confidence
          </h1>
          <p className="mb-5 text-[18px]">
            Showcase your products to thousands of verified importers. Grow your
            export business globally with transparency and ease.
          </p>
          <button className="btn btn-primary border-none">
            Start Exporting
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerScnd;
