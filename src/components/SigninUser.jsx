import React, { useState } from "react";
import { signUpWithProfilePhoto } from "../firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom"; // Import Link for route linking

const SigninUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const navigate = useNavigate(); // Initialize navigate

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePhoto) {
      toast.error("Please upload a profile photo.");
      return;
    }

    try {
      toast.info("Signing up...");
      await signUpWithProfilePhoto(email, password, profilePhoto);
      toast.success("User signed up successfully!");

      // Redirect to user profile after successful sign-up
      navigate("/user-profile"); // Redirect to user profile page
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-black  mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5DFF] focus:border-[#8B5DFF]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5DFF] focus:border-[#8B5DFF]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Profile Photo Input */}
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black  text-white font-semibold rounded-lg shadow-md   focus:outline-none focus:ring-2   focus:ring-opacity-75 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Link to User Profile Page */}
        <div className="mt-4 text-center">
          <Link
            to="/Dashboard" // Link to the user profile route
            className="text-black  hover:underline transition duration-200"
          >
            Go to User Dashboard
          </Link>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default SigninUser;
