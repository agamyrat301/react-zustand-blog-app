import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';
import { isTokenExpired } from '../isTokenExpired';


interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuthStore();

  console.log(isAuthenticated,'isAuthenticated')
  console.log(isAdmin,'isAdmin')
  console.log(loading,'loading')
  
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator or spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />; // Redirect non-admin users to home page
  }

  return <>{children}</>;

};

export default AdminRoute;
