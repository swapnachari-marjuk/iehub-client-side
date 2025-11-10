import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Utility/Logo";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { googleSignIn, userSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then(() => {
        toast.success("You are logged in successfully.")
        navigate(location.state || "/");
      })
      .catch((err) => toast.warning(err.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state);
      })
      .catch((err) => toast.warning(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] my-5">
      <div className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h3 className="font-bold text-center">
          Welcome Back to IE<span className="text-primary">Hub</span>
        </h3>
        <h2 className="text-xl font-semibold text-center mb-4 text-primary">
          Login Now
        </h2>

        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
              minLength={6}
              required
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="text-center mt-3 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
