import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { User, Calendar, BarChart2, MessageSquare, CheckCircle } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function IndividualProjects() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/company-login";
  }
  
  const [progress, setProgress] = useState(50);
  
  // Sample project data - replace with your actual data
  const projectData = {
    name: "Workhive",
    description: "This is a corporate management system which allows organisastions to manage the progress of their employees on various projects.",
    teamLead: {
      name: "Angad Sudan",
      role: "Head of Team",
      image: {profile}
    },
    startDate: "Jan 15, 2025",
    endDate: "Mar 30, 2025",
    members: [
      { name: "Adheesh Verma", role: "Frontend Dev", image: {profile} },
      { name: "Arsh Wadhwa", role: "Backend Dev", image: {profile} },
      { name: "Akshat Singla", role: "Designer", image: {profile} },
      // { name: "Jordan Lee", role: "Backend", image: {profile} }
    ],
    tasks: [
      { name: "Design UI Mockups", status: "completed", dueDate: "Feb 5, 2025" },
      { name: "Implement Frontend", status: "in-progress", dueDate: "Feb 20, 2025" },
      { name: "Backend Integration", status: "pending", dueDate: "Mar 10, 2025" },
      // { name: "Testing Phase", status: "pending", dueDate: "Mar 25, 2025" }
    ]
  };
  
  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "bg-green-500";
      case "in-progress": return "bg-yellow-400";
      case "pending": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-8 w-full md:w-4/5 ml-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">{projectData.name}</h1>
                <div className="flex items-center mt-2 text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{projectData.startDate} - {projectData.endDate}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-medium text-sm">
                  {progress}% Complete
                </span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-4">
              <div
                className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <p className="text-gray-300 mt-2">{projectData.description}</p>
          </div>
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Team Section */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-700 p-4">
                  <h2 className="text-xl font-bold flex items-center">
                    <User size={20} className="mr-2 text-yellow-400" />
                    Team
                  </h2>
                </div>
                
                {/* Team Lead */}
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <img 
                      src={projectData.teamLead.image} 
                      alt={projectData.teamLead.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-yellow-400">{projectData.teamLead.name}</h3>
                      <p className="text-gray-400 text-sm">{projectData.teamLead.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Team Members */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Team Members</h3>
                  <div className="space-y-4">
                    {projectData.members.map((member, index) => (
                      <div key={index} className="flex items-center">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-gray-400 text-sm">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tasks and Activity Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tasks Section */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-700 p-4">
                  <h2 className="text-xl font-bold flex items-center">
                    <CheckCircle size={20} className="mr-2 text-yellow-400" />
                    Tasks
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {projectData.tasks.map((task, index) => (
                      <div key={index} className="bg-gray-900 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)} mr-3`}></div>
                            <h4 className="font-medium">{task.name}</h4>
                          </div>
                          <span className="text-sm text-gray-400">Due: {task.dueDate}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                            {task.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Activity Section */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-700 p-4">
                  <h2 className="text-xl font-bold flex items-center">
                    <MessageSquare size={20} className="mr-2 text-yellow-400" />
                    Recent Activity
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start">
                        <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full mr-3" />
                        <div>
                          <p><span className="font-medium text-yellow-400">Adheesh Verma</span> updated the frontend code</p>
                          <p className="text-xs text-gray-400 mt-1">Today at 10:30 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start">
                        <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full mr-3" />
                        <div>
                          <p><span className="font-medium text-yellow-400">Akshat Singla</span> uploaded new design files</p>
                          <p className="text-xs text-gray-400 mt-1">Yesterday at 4:15 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-start">
                        <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full mr-3" />
                        <div>
                          <p><span className="font-medium text-yellow-400">Arsh Wadhwa</span> created a controllers for authentication</p>
                          <p className="text-xs text-gray-400 mt-1">Feb 26, 2025 at 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}