import React from "react";
import TaskCard from "../Task/TaskCard.jsx";
function HeroSection() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#0F1827] to-[#1E2A3C] py-12">
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
              {[
                {
                  _id: "123",
                  name: "Implement User Authentication",
                  description:
                    "Add login, registration and password reset functionality to the application.",
                  project: { _id: "p1", name: "Client Portal" },
                  allotedTeam: { _id: "t1", name: "Frontend Team" },
                  allotedTo: { _id: "u1", name: "Jane Doe" },
                  deadline: new Date("2025-03-15"),
                  status: "in-progress",
                  priority: "high",
                  credits: 150,
                  negativeRewards: -100,
                  createdAt: new Date("2025-02-20"),
                  updatedAt: new Date("2025-02-25"),
                },
              ].map((task, id) => {
                return <TaskCard task={task} />;
              })}
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
