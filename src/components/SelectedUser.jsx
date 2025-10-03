import React, { useEffect, useState } from 'react';

const SelectedUser = () => {
  const [userData, setUserData] = useState(null);
  const [recentLoginData, setRecentLoginData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = 'http://localhost:5000'; // Update to match your API

  // Utility function to fetch data
  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError((prevError) => prevError || `Error fetching data: ${err.message}`);
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData(`${apiUrl}/users`, setUserData);
    fetchData(`${apiUrl}/recent-login`, setRecentLoginData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Selected User</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h2>User Data:</h2>
        {userData ? (
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        ) : (
          <p>No user data available.</p>
        )}
      </div>

      <div>
        <h2>Recent Login Data:</h2>
        {recentLoginData ? (
          <pre>{JSON.stringify(recentLoginData, null, 2)}</pre>
        ) : (
          <p>No recent login data available.</p>
        )}
      </div>
    </div>
  );
};

export default SelectedUser;
