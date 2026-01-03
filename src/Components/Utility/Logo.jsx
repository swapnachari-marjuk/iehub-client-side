import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        className="md:w-10 w-7 inline"
        src="https://i.ibb.co.com/Q7q5hRvj/ship-logo-template-ship-element-ship-icon-illustration-vector.jpg"
        alt=""
      />
      <p className="md:text-xl font-bold italic text-shadow-md/20 ">
        IE<span className="text-primary">Hub</span>
      </p>
    </div>
  );
};

export default Logo;
