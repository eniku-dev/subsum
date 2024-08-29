import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

/**
 * Layout component serves as the main wrapper for all pages
 * that require a sidebar and header. It uses React Router's Outlet
 * to render nested routes.
 */
function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar for navigation */}
      <SideBar />
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto bg-[#f8f9fd]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
