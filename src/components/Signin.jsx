import React from "react";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Responsive Grid with 2 Boxes in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-lg font-semibold mb-2">Mentor Profile</h2>
          <p className="text-gray-500 mb-4 text-center">
            Sign up as a mentor and guide aspiring users.
          </p>
          <Link to="/mentorlogin">
            <button className="bg-black    text-white px-4 py-2 rounded-lg mb-2 w-full hover:bg-[#8B5DFF]    transition duration-300">
              Sign as Mentor
            </button>
          </Link>
         
         
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-lg font-semibold mb-2">User Profile</h2>
          <p className="text-gray-500 mb-4 text-center">
            Sign up as a user and start your journey.
          </p>
          <Link to="/userlogin">
            <button className="bg-black     text-white px-4 py-2 rounded-lg mb-2 w-full hover:[#8B5DFF]   transition duration-300">
              Sign as user
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
