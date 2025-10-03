import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config"; // Assuming you have Firebase setup in this file
import { doc, setDoc, collection } from "firebase/firestore";

const Profile = ({ setMentorPreferences }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    education: "",
    profession: "",
    bio: "",
    mentorGender: "",
    category: "",
    mentorCategory: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const categories = [
    "Artificial Intelligence",
    "Data Science",
    "Web Development",
    "Cybersecurity",
    "Machine Learning",
    "Blockchain",
    "DevOps",
    "Database Management",
    "Cloud Computing",
    "Computer Vision",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset previous error

    // Basic validation for required fields
    if (!formData.name || !formData.dob || !formData.gender || !formData.phone || !formData.email) {
      setError("Please fill all the required fields.");
      setIsLoading(false);
      return;
    }

    // Validate phone number (10-digit number)
    const isPhoneValid = /^[0-9]{10}$/.test(formData.phone);
    if (!isPhoneValid) {
      setError("Please enter a valid 10-digit phone number.");
      setIsLoading(false);
      return;
    }

    // Validate email format
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      // Sanitize email for Firestore document ID (if using email as doc ID)
      const userId = formData.email.replace(/[^\w\s]/gi, '_');

      // Saving to Firestore with user data
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, {
        ...formData,
        createdAt: new Date(),
      });

      // Save mentor preferences to a separate collection (mentor_match)
      const mentorRef = collection(db, "mentor_match");
      await setDoc(doc(mentorRef, userId), {
        mentorCategory: formData.mentorCategory,
        mentorGender: formData.mentorGender,
        userId: userId,
        preferences: formData,
      });

      // Save mentor preferences in local state (optional for later use in your app)
      setMentorPreferences(formData);

      // Redirect to Dashboard
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error saving user data:", error);
      setError("Error saving user data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl space-y-8">
        <h2 className="text-3xl font-bold text-[#8B5DFF] text-center">Create or Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="Write a short bio"
            ></textarea>
          </div>

          {/* Mentor Preferences */}
          <h3 className="text-xl font-bold text-gray-700 mt-6">Mentor Preferences</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Mentor Category</label>
            <select
              name="mentorCategory"
              value={formData.mentorCategory}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto py-2 px-6 bg-[#8B5DFF] text-white rounded-md shadow-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Profile"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Profile;
