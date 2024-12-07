import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import Details from "./components/Details";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import Posts from "./components/Admin/Posts";
import Categories from "./components/Admin/Categories";
import Users from "./components/Admin/Users";
import useAuthStore from "./stores/useAuthStore";
import axiosInstance from "./axiosConfig";

const App: React.FC = () => {
  const { setToken, setUser, setLoading, setAuthenticated, setAdmin } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true)
      const storedToken = localStorage.getItem('jwtToken');
      if (storedToken) {
        setToken(storedToken);
        try {
          const response = await axiosInstance.get('me', {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          setUser(response.data.user);
          setAdmin(response.data.is_admin);
          setAuthenticated(true); // Set isAuthenticated to true if the profile is successfully fetched
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(false);
      }
      setLoading(false); // Indicate loading is complete
    };

    initializeAuth();
  }, [setToken, setUser, setLoading, setAuthenticated, setAdmin]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected routes for regular users */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MasterLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />}></Route>
        </Route>

        {/* Protected routes for admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />{" "}
          {/* Default admin dashboard page */}
          {/* Additional admin page */}
          <Route path="users" element={<Users />} />{" "}

          <Route path="posts" element={<Posts />} />{" "}
          <Route path="categories" element={<Categories />} />{" "}

          {/* Additional admin page */}
          {/* Add more admin routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
