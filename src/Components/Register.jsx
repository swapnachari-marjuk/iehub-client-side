import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { googleSignIn, createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!passwordRegex.test(password)) {
      alert("Password is not valid.");
      return;
    }

    createUser(email, password)
      .then(() => {
         toast.success("Your account has been created successfully.")

        updateUser({ displayName, photoURL })
          .then(() => console.log("successfully updated user"))
          .catch((err) => toast.warning(err.message));

        navigate("/");
      })
      .catch((err) => toast.warning(err.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((err) => toast.warning(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
       <title>IEHub || Register</title>
      <div className="card w-full max-w-md shadow-xl bg-white p-6">
        <h3 className="font-bold text-center">Interested to Join with us?</h3>
        <h2 className="text-xl font-semibold text-center mb-4 text-primary">
          Register Now
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* name */}
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

          {/* img url */}
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

          {/* email */}
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

          {/* password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              minLength={6}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        {/* google signin button */}
        <button className="btn btn-outline w-full" onClick={handleGoogleLogin}>
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
