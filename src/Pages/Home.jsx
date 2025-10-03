import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Howitswork from "../components/Howitswork";
import Testimonials from "../components/TestimonialSection";
import CallToAction from "../components/CallToAction";

import CookieConsent from "react-cookie-consent"


const Home = () => {




  return (
    <div className="bg-white " >
      <Hero/>
      <Features/>
      <Howitswork/>
      <CookieConsent/>
      <Testimonials/>
      <CallToAction/>
      
    </div>
  );
};

export default Home;
