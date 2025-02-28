import React, { useEffect, useState } from "react";
import TaskCard from "../Task/TaskCard.jsx";
import { useScroll } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

import axios from "axios";
function HeroSection() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = axios.get("http://localhost:8000/task/getOneTask", {
          user: localStorage.getItem("token"),
        });
        console.log(response);

        setTask([
          {
            _id: "2",
            name: "Create Dashboard UI",
            description:
              "Design and implement responsive dashboard with charts and data visualization",
            project: { _id: "p1", name: "Website Redesign" },
            allotedTeam: { _id: "t2", name: "Frontend Team" },
            allotedTo: { _id: "u2", firstName: "Jane", lastName: "Smith" },
            deadline: new Date("2025-03-10"),
            status: "pending",
            priority: "mid",
            credits: 180,
            negativeRewards: -100,
          },
        ]);

        toast.success("data fetched");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    getTask();
  }, []);
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#0F1827] to-[#1E2A3C] py-12">
      <Toaster />
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <div className="bg-[#0F1827] p-8 rounded-lg shadow-2xl border border-[#FBCB18]/10 relative overflow-hidden">
          {/* Graffiti-style Welcome Message */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span className="text-[#FBCB18] text-9xl font-bold transform rotate-[-15deg]">
              🎨 WELCOME 🎨
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-[#FBCB18] font-bold text-4xl md:text-6xl lg:text-7xl mb-4 relative z-10">
            Welcome Back, User! 👋
          </h1>
          <p className="text-[#E0E0E0] text-lg md:text-xl mb-8 relative z-10">
            Here's what's on your plate today. Let's crush it! 💪
          </p>

          {/* Task Overview Placeholder */}
          <div className="bg-[#1E2A3C] p-6 rounded-lg text-left relative z-10">
            <h2 className="text-[#FBCB18] font-semibold text-2xl mb-4">
              Your Pending Tasks 🚀
            </h2>

            <div>
              {tasks.length !== 0 &&
                tasks.map((task, id) => {
                  return <TaskCard task={task} />;
                })}
              {tasks.length === 0 && (
                <>
                  <h1 className="text-white">No Task for Today 🎊</h1>
                </>
              )}
            </div>
          </div>

          {/* Call-to-Action Button */}
          <button
            onClick={() => (window.location.href = "/task")}
            className="mt-8 cursor-pointer bg-[#FBCB18] text-[#0F1827] font-semibold py-3 px-8 rounded-lg hover:bg-[#E0B317] transition duration-300 relative z-10"
          >
            View All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
