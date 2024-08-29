import React, { useState, useContext, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Adjust the import path as needed
import { SidebarImg } from "../assets";

const Login = () => {
  // State for form inputs and password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("wabdotmail@gmail.com");
  const [password, setPassword] = useState("Gabon4351");

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Use AuthContext
  const { isAuthenticated, login, loading } = useContext(AuthContext);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll simulate a successful login
    const token = "example_token"; // In a real app, this would come from your API
    login(token); // This will set the cookie and update the auth state
    navigate("/", { replace: true }); // Navigate to home and replace the login page in history
  };

  // Redirect if already authenticated
  if (isAuthenticated && !loading) {
    return <Navigate to="/" replace />;
  }

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fd]">
      {/* Left side gradient (hidden on mobile) */}
      <div className="hidden w-1/3 md:block relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SidebarImg})`,
              backgroundPosition: "top center", // Adjust this to change image position
              backgroundSize: "cover", // You can also adjust this for scaling
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020181] "></div>
        </div>
        <div className="absolute bottom-0">
          <h1 className="text-white text-3xl w-[80%] pl-24 font-bold mb-8">
            The BEST place to Subscribe / Buy
          </h1>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        {/* Header with Home button and Sign Up button */}
        <header className="mt-5 flex h-[70px] items-center justify-between">
          <button className="ml-8 flex h-fit w-fit items-center justify-center font-semibold text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="ml-1 text-md">Home</span>
          </button>
          <button className="mr-8 h-12 w-32 rounded-lg bg-primary px-4 py-2 text-md font-semibold text-white">
            Sign Up
          </button>
        </header>

        {/* Main login form area */}
        <main className="flex items-center justify-center">
          <div className="w-1/2 rounded-lg p-8">
            <h1 className="mb-6 text-center text-2xl font-semibold text-textColor">
              Login
            </h1>

            {/* Google login button */}
            <button className="mb-4 flex h-14 w-full items-center justify-center rounded-lg border-[1.2px] border-border bg-white px-4 py-2 font-semibold shadow-lg shadow-blue-100 transition duration-300 hover:bg-gray-50">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google logo"
                className="mr-2 h-7 w-7"
              />
              <span className="text-[1.1rem] text-textColor">
                Login with Google
              </span>
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <hr className="border-textColor" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f8f9fd] px-2 text-sm text-textColor">
                Or continue with
              </span>
            </div>

            {/* Login form */}
            <form
              onSubmit={handleLogin}
              className="rounded-lg border-[1.2px] border-border bg-white p-8"
            >
              {/* Email input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me and Recover Password */}
              <div className="mb-6 flex items-center justify-between">
                <label className="inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm text-gray-900">
                    Remember me
                  </span>
                </label>

                <a href="#" className="text-sm text-red-500 hover:underline">
                  Recover Password
                </a>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-600"
              >
                Log in
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
