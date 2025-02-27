import React from "react";
import {
  Briefcase,
  Clock,
  Users,
  ChevronRight,
  PlusCircle,
  Search,
} from "lucide-react";

function ProjectHero() {
  // Sample data - would normally come from props or context
  const stats = {
    activeProjects: 8,
    completedProjects: 12,
    upcomingDeadlines: 3,
    teamMembers: 17,
  };

  return (
    <div className="bg-[#0F1827] text-white">
      {/* Hero section with stats */}
      <div className="px-6 py-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Projects</h1>
              <p className="text-gray-400 mt-2">
                Manage and track all your current projects
              </p>
            </div>

            <div className="mt-4 lg:mt-0 flex gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-[#1E2A3C] border-0 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBCB18]"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button
                onClick={() =>
                  (window.location.href = "/project/create-project")
                }
                className="bg-[#FBCB18] hover:bg-amber-500 text-[#0F1827] font-medium px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <PlusCircle className="h-4 w-4 mr-1" />
                New Project
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1E2A3C] rounded-lg p-4 flex items-center">
              <div className="bg-[#FBCB18]/20 p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-[#FBCB18]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Projects</p>
                <p className="text-2xl font-bold">{stats.activeProjects}</p>
              </div>
            </div>

            <div className="bg-[#1E2A3C] rounded-lg p-4 flex items-center">
              <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                <Briefcase className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Completed Projects</p>
                <p className="text-2xl font-bold">{stats.completedProjects}</p>
              </div>
            </div>

            <div className="bg-[#1E2A3C] rounded-lg p-4 flex items-center">
              <div className="bg-red-500/20 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Upcoming Deadlines</p>
                <p className="text-2xl font-bold">{stats.upcomingDeadlines}</p>
              </div>
            </div>

            <div className="bg-[#1E2A3C] rounded-lg p-4 flex items-center">
              <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Team Members</p>
                <p className="text-2xl font-bold">{stats.teamMembers}</p>
              </div>
            </div>
          </div>

          {/* Quick shortcuts */}
          <div className="bg-[#1E2A3C] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-[#0F1827] hover:bg-[#2A3A50] rounded-lg p-4 flex justify-between items-center transition-colors">
                <div className="flex items-center">
                  <div className="p-2 bg-[#FBCB18]/20 rounded-lg mr-3">
                    <Briefcase className="h-5 w-5 text-[#FBCB18]" />
                  </div>
                  <span>Recent Projects</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button className="bg-[#0F1827] hover:bg-[#2A3A50] rounded-lg p-4 flex justify-between items-center transition-colors">
                <div className="flex items-center">
                  <div className="p-2 bg-red-500/20 rounded-lg mr-3">
                    <Clock className="h-5 w-5 text-red-500" />
                  </div>
                  <span>Due This Week</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button className="bg-[#0F1827] hover:bg-[#2A3A50] rounded-lg p-4 flex justify-between items-center transition-colors">
                <div className="flex items-center">
                  <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <span>My Team Projects</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
