import React, { useState } from "react";

const MentorProfile = () => {
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
    categories: [],
    specialty: "",
    availability: "",
    experience: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      categories: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Mentor Profile Data:", formData);
      // Save mentor data logic (e.g., Firestore)
      alert("Mentor profile submitted successfully!");
    } catch (error) {
      console.error("Error submitting mentor profile:", error);
      setError("Error submitting mentor profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-[#8B5DFF]   mb-6">
          Mentor Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block font-semibold mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block font-semibold mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Categories */}
            <div>
              <label className="block font-semibold mb-2">Categories</label>
              <input
                type="text"
                name="categories"
                value={formData.categories.join(", ")}
                onChange={handleCategoryChange}
                className="w-full p-2 border rounded-lg"
                placeholder="E.g., Web Development, AI, Data Science"
              />
            </div>
          </div>

          {/* Specialty */}
          <div>
            <label className="block font-semibold mb-2">Specialty</label>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your area of specialty"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block font-semibold mb-2">Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="E.g., Weekdays 6-9 PM"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block font-semibold mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter years of experience"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-2">Profile Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter profile image URL"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-[#8B5DFF]    rounded-full hover:bg-[#8B5DFF]     transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default MentorProfile;
