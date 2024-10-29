import axios from "axios";
import useAuthStore from "./stores/useAuthStore";
import { isTokenExpired } from "./isTokenExpired";

const token = localStorage.getItem('jwtToken')

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Replace with your actual base URL
  timeout: 5000, // Set timeout for requests
  headers: {
    "Content-Type": "application/json", // Default headers for requests
    "Access-Control-Allow-Origin": "*", // Although you can't really bypass CORS with this on the client side
  },
});

// You can also add interceptors for request or response if needed

axiosInstance.interceptors.response.use(

  (response) => {
    // Handle the response
    return response;
  },
  (error) => {
    // Handle the response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
