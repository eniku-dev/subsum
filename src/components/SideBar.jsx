import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Phone,
  Wifi,
  Tv,
  Zap,
  RefreshCw,
  ReceiptText,
  Headphones,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Airtle, Logo, Mobile, Mtn } from "../assets";
import { AuthContext } from "../context/AuthContext";

// Sidebar component for navigation and logout functionality
const Sidebar = () => {
  // State to manage open/closed state of submenus
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Hooks for navigation and routing
  const location = useLocation();
  const navigate = useNavigate();

  // Access logout function from AuthContext
  const { logout } = useContext(AuthContext);

  // Define menu items with their properties
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Phone, label: "Buy Airtime", path: "", hasChevron: true },
    { icon: Wifi, label: "Buy Data", path: "", hasChevron: true },
    { icon: Tv, label: "TV Subscription", path: "", hasChevron: true },
    { icon: Zap, label: "Pay Electric Bill", path: "", hasChevron: true },
    {
      icon: RefreshCw,
      activeIcon: LogOut,
      label: "Airtime to Cash",
      path: "/airtime",
      submenu: [
        { label: "MTN", iconSrc: Mtn },
        { label: "Airtel", iconSrc: Airtle },
        { label: "9mobile", iconSrc: Mobile },
        { label: "More", icon: ChevronRight },
      ],
    },
    { icon: ReceiptText, label: "Transaction History", path: "/transaction" },
    { icon: Headphones, label: "Help & Support", path: "/help" },
  ];

  // Effect to close submenu when navigating away from /airtime
  useEffect(() => {
    if (location.pathname !== "/airtime") {
      setOpenSubmenu(null);
    }
  }, [location.pathname]);

  // Toggle submenu open/closed state
  const toggleSubmenu = (label) => {
    setOpenSubmenu((prevSubmenu) => (prevSubmenu === label ? null : label));
  };

  // Check if the current path is active
  const isActive = (path) => location.pathname === path;

  // Handle click on menu items
  const handleMenuItemClick = (path, submenu, label) => {
    if (label === "Airtime to Cash") {
      navigate(path);
      toggleSubmenu(label);
    } else if (path) {
      navigate(path);
      setOpenSubmenu(null);
    }
  };

  // Handle logout action
  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/login"); // Navigate to the login page
  };

  // Render submenu items
  const renderSubmenuItems = (submenu) => (
    <ul className="ml-2 py-2 flex justify-start items-center">
      {submenu.map((subItem, subIndex) => (
        <li
          key={subIndex}
          className="px-2 py-2 flex items-center text-sm text-gray-600 hover:text-gray-800"
        >
          {subItem.iconSrc ? (
            <img
              src={subItem.iconSrc}
              alt={subItem.label}
              className="w-[50px] h-12 rounded-lg"
            />
          ) : subItem.icon ? (
            <>
              <span className="text-primary font-semibold">More</span>
              <subItem.icon className="w-5 h-5 text-primary" />
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );

  // Render menu items
  const renderMenuItems = () => (
    <ul>
      {menuItems.map((item, index) => {
        const active = isActive(item.path);
        const IconComponent =
          active && item.activeIcon ? item.activeIcon : item.icon;
        return (
          <li key={index} className="mb-1 mt-3">
            <button
              onClick={() =>
                handleMenuItemClick(item.path, item.submenu, item.label)
              }
              className={`group w-[90%] ml-[5%] text-left px-4 py-3 flex items-center justify-between rounded-lg transition-colors ${
                active
                  ? "text-white bg-primary"
                  : "text-inactive hover:text-white hover:bg-buttonHover"
              } focus:outline-none`}
            >
              <div className="flex items-center">
                <IconComponent
                  className={`w-5 h-5 ${
                    menuItems[index].icon === Tv ? "rotate-180" : null
                  } ${
                    active
                      ? "text-white"
                      : "text-inactive group-hover:text-white"
                  }`}
                />
                <span className="ml-3 font-semibold">{item.label}</span>
              </div>
              {item.hasChevron && <ChevronDown className="w-5 h-5" />}
            </button>
            {item.submenu &&
              openSubmenu === item.label &&
              renderSubmenuItems(item.submenu)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="w-1/6 bg-background h-screen shadow-lg flex flex-col">
      <div className="p-6 flex items-center">
        <img src={Logo} alt="Subssum Logo" className="h-10 mr-2" />
        <h1 className="text-2xl font-semibold text-[#010080]">Subssum</h1>
      </div>

      <nav className="flex-grow">{renderMenuItems()}</nav>

      <div className="p-4 mb-8">
        <button
          onClick={handleLogout}
          className="group w-[90%] ml-[5%] text-left px-4 py-3 flex items-center rounded-lg transition-colors text-inactive hover:text-white hover:bg-buttonHover focus:outline-none"
        >
          <LogOut className="w-5 h-5" />
          <span className="ml-3 font-semibold">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
