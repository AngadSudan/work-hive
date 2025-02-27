import React, { useState } from "react";
import {
  Home,
  FolderKanban,
  Building2,
  ListTodo,
  User,
  Menu,
  X,
} from "lucide-react";
import src from "../assets/logo.png";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const nav = [
    {
      title: "Home",
      icon: Home,
      link: "/home",
    },
    {
      title: "Projects",
      icon: FolderKanban,
      link: "/projects",
    },
    {
      title: "Organization",
      icon: Building2,
      link: "/organization",
    },
    {
      title: "Tasks",
      icon: ListTodo,
      link: "/task",
    },
    {
      title: "Profile",
      icon: User,
      link: "/profile",
    },
  ];

  return (
    <div className="relative">
      {/* Mobile menu toggle button - only visible on small screens */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      >
        {expanded ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        } lg:w-64 z-40 shadow-lg`}
      >
        {/* Logo section */}
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <img src={src} alt="Logo" className="h-10 w-10 rounded-md" />
          <span
            className={`ml-2 font-bold text-xl ${
              expanded ? "block" : "hidden"
            } lg:block`}
          >
            Dashboard
          </span>
        </div>

        {/* Navigation links */}
        <nav className="mt-6 px-3">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center py-3 px-2 my-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              <item.icon size={24} className="text-gray-300" />
              <span
                className={`ml-3 ${expanded ? "block" : "hidden"} lg:block`}
              >
                {item.title}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile - only visible when sidebar is expanded on mobile */}
      {expanded && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setExpanded(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
