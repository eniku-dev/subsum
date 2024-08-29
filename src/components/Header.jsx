import React from "react";
import { Bell, User } from "lucide-react";

const Header = ({ userName }) => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      {/* Welcome message */}
      <h1 className="text-xl  text-gray-800 ml-4"> {userName}</h1>

      {/* Right side actions */}
      <div className="flex items-center space-x-2 mr-4">
        {/* Upgrade to Merchant button */}
        <button className=" text-primary px-4 py-2 rounded-full text-sm font-medium hover:text-black">
          Upgrade To Merchant
        </button>

        {/* Notification icon */}
        <button className="text-primary border-2 border-border bg-background rounded-full px-2 py-2 hover:bg-primary hover:text-white ">
          <Bell size={18} />
        </button>

        {/* User profile icon */}
        <button className="text-primary border-2 border-border bg-background rounded-full px-2 py-2 hover:bg-primary hover:text-white">
          <User size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
