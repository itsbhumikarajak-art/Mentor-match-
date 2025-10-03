import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"; // Ensure Firebase is configured properly
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import MentorDashboard from "./MentorDashboard";


const MentorSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false); // Track sign-up status
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firebase sign-up without profile photo
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      toast.success("Mentor signed up successfully!");
      console.log("Mentor Sign Up Successful: ", user);
      setIsSignedUp(true); // Set the sign-up status to true
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error("Error during sign-up:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Mentor Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle password visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? "Hide" : "Show"} {/* Button to toggle visibility */}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black   text-white  font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Sign Up as Mentor
          </button>
        </form>

        {/* Conditional render for redirect link after sign-up */}
        {isSignedUp && (
          <div className="mt-4 text-center">
            <Link
              to="/MentorDashboard" // Redirect to Mentor Dashboard after sign-up
              className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer hover:bg-blue-600"
            >
              Go to Mentor Dashboard
            </Link>
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default MentorSignIn;
