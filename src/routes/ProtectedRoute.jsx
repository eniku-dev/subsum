import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Add a loading state while checking authentication
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
