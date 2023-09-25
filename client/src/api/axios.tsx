import axios from 'axios';

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json'
  },
});

// Interceptors can be added here for request and response handling

export default axiosClient;