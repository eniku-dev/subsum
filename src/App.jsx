import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Router from "./routes/Route";

function App() {
  return (
    <AuthProvider>
      {/* AuthProvider ensures authentication state is available throughout the app */}
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

export default App;
