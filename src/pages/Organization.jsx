import React from "react";
import Sidebar from "../components/Sidebar";

function Organization() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">heelloo</div>
      </div>
    </div>
  );
}

export default Organization;
