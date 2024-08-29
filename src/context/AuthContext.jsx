import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie"; // Assuming you're using cookies for authentication

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap your app and provide the auth context
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to check authentication status
  const checkAuthStatus = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  };

  // Call checkAuthStatus when the component mounts
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Function to log in (set token in cookies and state)
  const login = (token) => {
    Cookies.set("token", token);
    setIsAuthenticated(true);
  };

  // Function to log out (remove token from cookies and state)
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
