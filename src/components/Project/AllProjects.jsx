import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import axios from "axios";


const sampleProject = {
  _id: "60a12d7f45c3a87b9e42e123",
  name: "Work Hive",
  description:
    "Modernize the conceptual idea of a corporate management system into a real life working model.",
  organizationId: { _id: "o123", name: "Acme Corporation" },
  projectLead: { _id: "u456", name: "Angad Sudan" },
  imageUrl: "https://example.com/project-image.jpg", // You can leave this empty to see the fallback
  deadline: new Date("2025-04-15"),
  projectStatus: "active",
  priority: "high",
  prd: "https://docs.example.com/prd/client-portal",
  status: "open",
  createdBy: { _id: "67c098a30b023de5d7280177", name: "Angad Sudan" },
  createdAt: new Date("2025-01-10"),
  updatedAt: new Date("2025-02-05"),
};
import ProjectCard from "./ProjectCard";
function AllProjects() {
  useEffect(() => {
    const getTask = async () => {
      try {
        const response = axios.get("http://localhost:8000/task/getOneTask", {
          user: localStorage.getItem("token"),
        });
        console.log(response);

        toast.success("data fetched");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    getTask();
  }, []);
  return (
    <div className="bg-[#1E2A3C]">
      {/* Project filter section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <Toaster />
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl text-white ml-12 mt-4  font-semibold">
            All Projects
          </h2>
        </div>

        <div className="flex space-x-2">
          <select className="bg-[#1E2A3C] border-0 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCB18]">
            <option>All Projects</option>
            <option>Active</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>

          <select className="bg-[#1E2A3C] border-0 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FBCB18]">
            <option>Sort By: Newest</option>
            <option>Sort By: Oldest</option>
            <option>Sort By: Deadline</option>
            <option>Sort By: Priority</option>
          </select>
        </div>
      </div>
      <div className="mx-auto w-[80%]">
        <ProjectCard project={sampleProject} />
      </div>
    </div>
  );
}

export default AllProjects;
