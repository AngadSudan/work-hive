import React from "react";
import UserProfile from "../components/UserProfile";
import Sidebar from "../components/Sidebar";
function Test() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/company-login";
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Test;
