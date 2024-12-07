import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuthStore();
  console.log(isAuthenticated,'isAuthenticated in PrivateRoute')
  console.log(loading,'loading in PrivateRoute')
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator or spinner
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
