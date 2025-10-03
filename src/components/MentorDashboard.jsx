import React, { useState } from "react";

const MentorDashboard = () => {
  const mentors = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer, Google",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Data Scientist, Amazon",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Product Manager, Microsoft",
      photo: "https://via.placeholder.com/150",
    },
  ];

  const [activeTab, setActiveTab] = useState("mentors");
  const [notifications, setNotifications] = useState([
    "You have a new connection request from Jane Smith.",
    "Emily Johnson accepted your request.",
    "John Doe sent you a message.",
  ]);

  const [alert, setAlert] = useState("");

  const handleConnect = (name) => {
    setAlert(`${name} has been notified of your request.`);
    setTimeout(() => setAlert(""), 3000); // Clear alert after 3 seconds
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Tabs Section */}
      <div className="bg-black   text-white py-4">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "mentors"
                ? "bg-white text-black"
                : "text-white hover:bg-black"
            }`}
            onClick={() => setActiveTab("mentors")}
          >
            Mentors
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "notifications"
              ? "bg-white text-black"
                : "text-white hover:bg-black"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
        </div>
      </div>

      {/* Alert Section */}
      {alert && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mx-4 mt-4">
          <span>{alert}</span>
        </div>
      )}

      {/* Main Content */}
      <main className="py-16">
        {activeTab === "mentors" && (
          <section className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Mentors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <img
                    src={mentor.photo}
                    alt={`${mentor.name}'s photo`}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                  <button
                    className="mt-4 bg-black      text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={() => handleConnect(mentor.name)}
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "notifications" && (
          <section className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Notifications</h2>
            {notifications.length > 0 ? (
              <ul className="space-y-4">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 text-left"
                  >
                    {notification}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No new notifications</p>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default MentorDashboard;
