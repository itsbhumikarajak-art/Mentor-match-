import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout, listenAuthStateChange } from "../firebase/auth"; // Updated import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setIsOpen(false); // Close the mobile menu on logout
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = listenAuthStateChange((authUser) => {
      setUser(authUser);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-black shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Link */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://chhari07.github.io/images-/image.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
            <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
            {user ? (
              <>
                <button
                  className="py-2 px-4 bg-[#8B5DFF] text-black rounded-full hover:scale-105 hover:bg-black hover:text-white transition-all"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
                <Link
                  to={user ? (user.isMentor ? "/mentor-dashboard" : "/profile") : "/signin"}
                  className="ml-4"
                >
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/40"}
                    alt="User Profile"
                    className="h-10 w-10 rounded-full border-2 border[#8B5DFF]    hover:scale-105 transition duration-300"
                  />
                </Link>
              </>
            ) : (
              <Link to="/signin">
                <button className="py-2 px-4   bg-white  text-black rounded-full hover:scale-105 hover:bg-black hover:text-white transition-all">
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-white hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {user ? (
              <button
                className="w-full text-left text-white py-2 hover:bg-teal-500"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/signin"
                className="block text-white hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
