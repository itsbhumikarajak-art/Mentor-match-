import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6 mt-14">
        {/* Card 1: Who We Are */}
        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Who We Are</h2>
          <p className="text-lg text-gray-700 text-center">
            We are a passionate team dedicated to providing the best solutions for our clients. Our mission is to innovate, create, and deliver exceptional results to help businesses thrive in the digital age.
          </p>
        </div>

        {/* Card 2: Our Mission */}
        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center">
            To empower businesses and individuals through innovative technology, creative solutions, and exceptional service.
          </p>
        </div>

        {/* Card 3: Our Vision */}
        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Vision</h2>
          <p className="text-lg text-gray-700 text-center">
            To become a global leader in technology and solutions by fostering innovation and building lasting relationships with our clients and communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
