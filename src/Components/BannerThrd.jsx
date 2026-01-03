import React from "react";

const BannerThrd = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/zWjZb7HH/port-cargo.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md  text-shadow-lg/50">
          <h1 className="mb-5 lg:text-5xl text-2xl font-bold  text-shadow-lg/30">
            Manage Imports & Exports Seamlessly
          </h1>
          <p className="mb-5 text-[18px]">
            Track shipments, monitor analytics, and organize trade data — all
            from one dashboard designed for efficiency.
          </p>
          <button className="btn btn-primary border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BannerThrd;
