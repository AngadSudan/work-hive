import React from "react";
import Sidebar from "../components/Sidebar";
import FilterTask from "../components/Task/FilterTask";
function Task() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/company-login";
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <FilterTask />
        </div>
      </div>
    </div>
  );
}

export default Task;
