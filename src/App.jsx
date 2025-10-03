import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import MentorSignin from "./components/MentorSignin";
import SigninUser from "./components/SigninUser";
import MentorProfile from "./components/MentorProfile";
import MentorDashboard from "./components/MentorDashboard";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ConatactForm";

const App = () => {
  const [mentorPreferences, setMentorPreferences] = useState({});

  return (
    <Router>
      <Navbar />
      <main className="min-h-screen"> {/* Ensures the footer is pushed to the bottom */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/mentorlogin" element={<MentorSignin />} />
          <Route path="/mentordashboard" element={<MentorDashboard />} />
          <Route path="/userlogin" element={<SigninUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mentorprofile" element={<MentorProfile />} />
          <Route
            path="/dashboard"
            element={<Dashboard mentorPreferences={mentorPreferences} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
