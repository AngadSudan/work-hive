import React, { useState } from "react";
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  PauseCircle,
  XCircle,
  Edit,
  Trash2,
} from "lucide-react";

const TaskCard = ({ task }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Determine status icon and color
  const getStatusDetails = (status) => {
    switch (status) {
      case "pending":
        return {
          icon: <Clock className="h-5 w-5 text-amber-500" />,
          color: "bg-amber-100 text-amber-800",
        };
      case "in-progress":
        return {
          icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
          color: "bg-amber-100 text-amber-800",
        };
      case "completed":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          color: "bg-green-100 text-green-800",
        };
      case "on-hold":
        return {
          icon: <PauseCircle className="h-5 w-5 text-amber-500" />,
          color: "bg-amber-100 text-amber-800",
        };
      case "inactive":
        return {
          icon: <XCircle className="h-5 w-5 text-gray-400" />,
          color: "bg-gray-200 text-gray-700",
        };
      default:
        return {
          icon: <Clock className="h-5 w-5 text-gray-400" />,
          color: "bg-gray-200 text-gray-700",
        };
    }
  };

  // Determine priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            High
          </span>
        );
      case "mid":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
            Medium
          </span>
        );
      case "low":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Low
          </span>
        );
      default:
        return null;
    }
  };

  const statusDetails = getStatusDetails(task.status);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      {/* Task Card */}
      <div
        onClick={openDialog}
        className="bg-[#1E2A3C] my-3 border-2 rounded-lg shadow-md p-4 border-l-5 border-[#FBCB18] hover:shadow-lg transition-shadow cursor-pointer text-white"
      >
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-white text-lg">{task.name}</h3>
          {getPriorityBadge(task.priority)}
        </div>

        <div className="mt-3 flex items-center text-sm text-gray-300">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Due: {formatDate(task.deadline)}</span>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div
            className={`px-2 py-1 text-xs font-medium rounded-full flex items-center ${statusDetails.color}`}
          >
            {statusDetails.icon}
            <span className="ml-1 capitalize">{task.status}</span>
          </div>

          <div className="text-sm">
            {task.credits > 0 && (
              <span className="text-[#FBCB18] font-medium">
                +{task.credits}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0F1827] text-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#1E2A3C]">
            {/* Dialog Header */}
            <div className="border-b border-[#1E2A3C] px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Task Details</h2>
              <button
                onClick={closeDialog}
                className="text-gray-400 hover:text-[#FBCB18]"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="px-6 py-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-2xl text-white">{task.name}</h3>
                <div className="flex space-x-2">
                  {getPriorityBadge(task.priority)}
                  <div
                    className={`px-2 py-1 text-xs font-medium rounded-full flex items-center ${statusDetails.color}`}
                  >
                    {statusDetails.icon}
                    <span className="ml-1 capitalize">{task.status}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-1">
                  Description
                </h4>
                <p className="text-gray-300">
                  {task.description || "No description provided."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Project
                  </h4>
                  <p className="text-gray-300">
                    {task.project ? task.project.name : "Unassigned"}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Team
                  </h4>
                  <p className="text-gray-300">
                    {task.allotedTeam ? task.allotedTeam.name : "Unassigned"}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Assigned To
                  </h4>
                  <p className="text-gray-300">
                    {task.allotedTo ? task.allotedTo.name : "Unassigned"}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Deadline
                  </h4>
                  <p className="text-gray-300 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(task.deadline)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Rewards
                  </h4>
                  <p className="text-[#FBCB18] font-medium">
                    +{task.credits} credits
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">
                    Penalties
                  </h4>
                  <p className="text-red-500 font-medium">
                    {task.negativeRewards} credits
                  </p>
                </div>

                {task.completedAt && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Completed On
                    </h4>
                    <p className="text-gray-300">
                      {formatDate(task.completedAt)}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-between">
                <div className="text-xs text-gray-400">
                  Created: {formatDate(task.createdAt)}
                  {task.updatedAt !== task.createdAt &&
                    ` • Updated: ${formatDate(task.updatedAt)}`}
                </div>

                <div className="flex space-x-2">
                  <button className="px-3 py-2 bg-[#1E2A3C] hover:bg-[#2A3A50] text-green-300 rounded-md flex items-center text-sm transition-colors">
                    <Edit className="h-4 w-4 mr-1" />
                    Mark As Complete
                  </button>
                  <button className="px-3 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-md flex items-center text-sm transition-colors">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
