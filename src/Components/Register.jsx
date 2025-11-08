import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = {
      name: form.name.value,
      photoURL: form.photoURL.value,
      email: form.email.value,
      password: form.password.value,
    };
    console.log("User Data:", userData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="card w-full max-w-md shadow-xl bg-white p-6">
        <h3 className="font-bold text-center">Interested to Join with us?</h3>
        <h2 className="text-xl font-semibold text-center mb-4 text-primary">
          Register Now
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
