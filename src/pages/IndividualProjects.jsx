import React, { useState } from "react";

export default function IndividualProjects() {
  const [progress, setProgress] = useState(50);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 bg-gray-800 p-4 flex flex-col items-center space-y-4 fixed h-full">
        {["🏠", "💬", "⚙", "📈", "👤"].map((icon, index) => (
          <div key={index} className="cursor-pointer text-2xl">
            {icon}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-20 p-8 w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Name of Project</h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-6">
        <div className="bg-yellow-400 h-3" style={{ width: `${progress}%` }}></div>

        </div>

        {/* Team Lead */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <strong>Team Lead</strong>
          <p>Head of Team</p>
        </div>

        {/* Team Description */}
        <h2 className="text-2xl text-center text-yellow-400 mb-4">Description of Team</h2>

        {/* Team Members */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="bg-gray-800 p-4 rounded-lg text-center">
              <strong>Member {num}</strong>
              <p>{num === 1 ? "Frontend Dev" : num === 2 ? "Creator" : num === 3 ? "Designer" : "Backend"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}