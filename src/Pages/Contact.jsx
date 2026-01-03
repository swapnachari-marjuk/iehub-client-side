import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { toast } from "react-toast";

const Contact = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    toast("Your message sent successfully.");
    e.target.reset();
  };
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-16 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-4">
            <MdOutlineBusinessCenter size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Connect With <span className="text-blue-600">IEHub</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to take your business global? Reach out to our consultants for
            expert advice and financial support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>

            {[
              {
                icon: <FaPhoneAlt />,
                label: "Call Us",
                value: "+880 1234 567890",
                color: "bg-green-500",
              },
              {
                icon: <FaEnvelope />,
                label: "Email Us",
                value: "support@iehub.com",
                color: "bg-blue-500",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Visit Us",
                value: "Trade Center, Agrabad, Chattogram",
                color: "bg-red-500",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-600 transition-all group"
              >
                <div
                  className={`${item.color} p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-4xl shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
              <form onSubmit={handleMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Service Required
                  </label>
                  <select
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition appearance-none"
                  >
                    <option>Global Trade Consulting</option>
                    <option>Export-Import Training</option>
                    <option>Interest-Free Business Loan</option>
                    <option>Expert Mentorship</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition resize-none"
                    placeholder="Briefly describe your business needs..."
                  ></textarea>
                </div>

                <button className="w-full md:w-max px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
                  <FaPaperPlane />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
