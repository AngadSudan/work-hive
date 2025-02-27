import React from "react";
import Sidebar from "../components/Sidebar";
import AllProjects from "../components/Project/AllProjects";
import ProjectHero from "../components/Project/ProjectHero";

function Project() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/company-login";
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <ProjectHero />
          <AllProjects />
        </div>
      </div>
    </div>
  );
}

export default Project;
