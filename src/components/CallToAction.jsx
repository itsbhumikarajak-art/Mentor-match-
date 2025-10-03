import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white  text-black  text-center">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join our platform and connect with the best mentors to take your personal and professional growth to the next level.
        </p>
        <a
          href="#signup"
          className="px-6 py-3 text-lg font-semibold bg-black  text-white    rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
