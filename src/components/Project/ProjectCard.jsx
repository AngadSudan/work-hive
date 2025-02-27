import React from "react";
import {
  Calendar,
  Flag,
  AlertCircle,
  CheckCircle,
  XCircle,
  Users,
  FileText,
  ExternalLink,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Calculate days remaining
  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get status details with icon and color
  const getStatusDetails = (projectStatus) => {
    switch (projectStatus) {
      case "active":
        return {
          icon: <AlertCircle className="h-5 w-5 text-[#FBCB18]" />,
          color: "bg-[#FBCB18]/20 text-[#FBCB18]",
          label: "Active",
        };
      case "completed":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          color: "bg-green-500/20 text-green-500",
          label: "Completed",
        };
      case "terminated":
        return {
          icon: <XCircle className="h-5 w-5 text-red-500" />,
          color: "bg-red-500/20 text-red-500",
          label: "Terminated",
        };
      default:
        return {
          icon: <AlertCircle className="h-5 w-5 text-gray-400" />,
          color: "bg-gray-500/20 text-gray-400",
          label: projectStatus,
        };
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            High
          </span>
        );
      case "mid":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            Medium
          </span>
        );
      case "low":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Low
          </span>
        );
      default:
        return null;
    }
  };

  const daysRemaining = getDaysRemaining(project.deadline);
  const statusDetails = getStatusDetails(project.projectStatus);
  const isOverdue = daysRemaining < 0 && project.projectStatus === "active";

  return (
    <div className="bg-[#1E2A3C] py-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Project Image Header */}
      <div className="h-32 bg-gradient-to-r from-[#0F1827] to-[#2A3A50] relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover opacity-70"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="h-12 w-12 text-gray-400" />
          </div>
        )}

        {/* Status badge */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium flex items-center ${statusDetails.color}`}
        >
          {statusDetails.icon}
          <span className="ml-1">{statusDetails.label}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-white truncate">
            {project.name}
          </h3>
          {getPriorityBadge(project.priority)}
        </div>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2 h-10">
          {project.description || "No description available."}
        </p>

        {/* Deadline Section */}
        <div className="flex items-center mb-4">
          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
          <div>
            <div className="text-sm text-gray-300">
              Deadline: {formatDate(project.deadline)}
            </div>
            {project.projectStatus === "active" && (
              <div
                className={`text-xs ${
                  isOverdue ? "text-red-400" : "text-gray-400"
                }`}
              >
                {isOverdue
                  ? `Overdue by ${Math.abs(daysRemaining)} days`
                  : `${daysRemaining} days remaining`}
              </div>
            )}
          </div>
        </div>

        {/* Project Lead */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-300">
              Lead: {project.projectLead?.name || "Unassigned"}
            </span>
          </div>

          {project.prd && (
            <button className="flex items-center text-xs text-[#FBCB18]">
              <FileText className="h-3 w-3 mr-1" />
              PRD
              <ExternalLink className="h-3 w-3 ml-1" />
            </button>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => (window.location.href = `/project/${project._id}`)}
          className="w-full bg-[#0F1827] hover:bg-[#2A3A50] text-white py-2 rounded-md flex items-center justify-center transition-colors"
        >
          <span>View Project</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
