import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";

// Lazy-loaded components
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Help = lazy(() => import("../pages/Help"));
const Airtime = lazy(() => import("../pages/Airtime"));
const Transaction = lazy(() => import("../pages/Transaction"));
const NotFound = lazy(() => import("../pages/NotFound"));

import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";

// Function to get the access token from cookies
const getAccessToken = () => {
  return Cookies.get("token");
};

// Create the router configuration
const Router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoute isAuthenticated={!!getAccessToken()} />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "/airtime",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Airtime />
              </Suspense>
            ),
          },
          {
            path: "/transaction",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Transaction />
              </Suspense>
            ),
          },
          {
            path: "/help",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Help />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default Router;
