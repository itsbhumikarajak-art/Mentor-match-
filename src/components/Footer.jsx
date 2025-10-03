import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Information */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
          <Link to="/">
              <img
                src="https://chhari07.github.io/images-/image.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-2 text-white">
              Connecting you with experienced mentors who can help guide you towards your personal and professional goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/4 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/4 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-white">Email: support@mentorconnect.com</p>
            <p className="text-white">Phone: +1 (123) 456-7890</p>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/4 lg:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-white">
          <p>&copy; 2024 MentorConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
