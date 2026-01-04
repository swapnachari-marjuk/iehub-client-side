import React from "react";
import { toast } from "react-toastify";

const Mentorship = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    toast("Thank you for register.");
    e.target.reset();
  };
  return (
    <section className="py-16 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            New to Import & Export?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Start your journey with us — join our{" "}
            <strong>Free Mentorship Program</strong> and learn how to build a
            successful international trade business.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            “Learn. Connect. Grow with Import Export Hub.”
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleRegister}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm w-full dark:border dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-6 text-center">
            Register for Free Mentorship
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required={true}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required={true}
              placeholder="example@email.com"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required={true}
              placeholder="Your phone number"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary text-white font-semibold py-3 rounded-lg transition-all"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mentorship;