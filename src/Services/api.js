import axios from 'axios';

// Make sure to set your API_URL in the .env file, defaulting to 'http://localhost:5000/api' if not defined
const API_URL = "http://localhost:5000/api" ;

// Function to fetch users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/Profile`);
    return response.data;
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // The request was made, but the server responded with a status code
      console.error('Error fetching users:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else triggered the error
      console.error('Error in setting up the request:', error.message);
    }
    throw error;
  }
};

// Function to create a user profile
export const createUserProfile = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/UserProfile`, userData);
    return response.data;
  } catch (error) {
    // Handle different error types
    if (error.response) {
      console.error('Error creating user profile:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error in setting up the request:', error.message);
    }
    throw error;
  }
};
