import React, { useState, useEffect } from "react";
import {
  Filter,
  Search,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  User,
  Users,
  Flag,
  ArrowUpCircle,
  Circle,
  Pause,
  XCircle,
  Star,
  Briefcase,
  CreditCard,
} from "lucide-react";
import TaskCard from "./TaskCard";
const FilterTask = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    search: "",
    team: "",
    user: "",
  });

  // Theme colors
  const colors = {
    primary: "#1E2A3C", // dark blue-gray
    secondary: "#FBCB18", // yellow
    dark: "#0F1827", // darker blue
    light: "#FFFFFF",
    lightGray: "#F3F4F6",
    text: "#1E293B",
    textLight: "#64748B",
  };

  // Mock fetch tasks - replace with actual API call
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/tasks');
        // const data = await response.json();

        // Mock data for now
        const data = [
          {
            _id: "1",
            name: "Implement User Authentication",
            description:
              "Add JWT based authentication for all API endpoints and protect user routes",
            project: { _id: "p1", name: "Website Redesign" },
            allotedTeam: { _id: "t1", name: "Backend Team" },
            allotedTo: { _id: "u1", firstName: "John", lastName: "Doe" },
            deadline: new Date("2025-03-15"),
            status: "in-progress",
            priority: "high",
            credits: 250,
            negativeRewards: -100,
          },
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
          {
            _id: "3",
            name: "Optimize Database Queries",
            description:
              "Improve database performance by optimizing existing queries and adding indexes",
            project: { _id: "p2", name: "Performance Improvement" },
            allotedTeam: { _id: "t1", name: "Backend Team" },
            allotedTo: { _id: "u3", firstName: "Mike", lastName: "Johnson" },
            deadline: new Date("2025-03-20"),
            completedAt: new Date("2025-02-25"),
            status: "completed",
            priority: "high",
            credits: 300,
            negativeRewards: -100,
          },
          {
            _id: "4",
            name: "Write Documentation",
            description: "Create comprehensive API documentation using Swagger",
            project: { _id: "p1", name: "Website Redesign" },
            allotedTeam: { _id: "t3", name: "DevOps Team" },
            allotedTo: { _id: "u4", firstName: "Sarah", lastName: "Williams" },
            deadline: new Date("2025-04-01"),
            status: "on-hold",
            priority: "low",
            credits: 150,
            negativeRewards: -100,
          },
        ];

        setTasks(data);
        setFilteredTasks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Apply filters whenever the filters state changes
  useEffect(() => {
    let result = tasks;

    // Filter by status
    if (filters.status) {
      result = result.filter((task) => task.status === filters.status);
    }

    // Filter by priority
    if (filters.priority) {
      result = result.filter((task) => task.priority === filters.priority);
    }

    // Filter by search term (name or description)
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (task) =>
          task.name.toLowerCase().includes(searchTerm) ||
          (task.description &&
            task.description.toLowerCase().includes(searchTerm))
      );
    }

    // Filter by team
    if (filters.team) {
      result = result.filter((task) => task.allotedTeam._id === filters.team);
    }

    // Filter by user
    if (filters.user) {
      result = result.filter((task) => task.allotedTo._id === filters.user);
    }

    setFilteredTasks(result);
  }, [filters, tasks]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      status: "",
      priority: "",
      search: "",
      team: "",
      user: "",
    });
  };

  // Status icon and color based on task status
  const getStatusInfo = (status) => {
    switch (status) {
      case "pending":
        return {
          icon: <Circle size={16} />,
          color: "#F59E0B",
          text: "Pending",
        };
      case "in-progress":
        return {
          icon: <ArrowUpCircle size={16} />,
          color: "#3B82F6",
          text: "In Progress",
        };
      case "completed":
        return {
          icon: <CheckCircle size={16} />,
          color: "#10B981",
          text: "Completed",
        };
      case "on-hold":
        return { icon: <Pause size={16} />, color: "#6B7280", text: "On Hold" };
      case "inactive":
        return {
          icon: <XCircle size={16} />,
          color: "#EF4444",
          text: "Inactive",
        };
      default:
        return {
          icon: <Circle size={16} />,
          color: "#F59E0B",
          text: "Pending",
        };
    }
  };

  // Priority icon and color based on task priority
  const getPriorityInfo = (priority) => {
    switch (priority) {
      case "low":
        return { icon: <Flag size={16} />, color: "#10B981", text: "Low" };
      case "mid":
        return { icon: <Flag size={16} />, color: "#F59E0B", text: "Medium" };
      case "high":
        return { icon: <Flag size={16} />, color: "#EF4444", text: "High" };
      default:
        return { icon: <Flag size={16} />, color: "#F59E0B", text: "Medium" };
    }
  };

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Calculate days left or overdue
  const getDaysInfo = (deadline, completedAt) => {
    if (completedAt) return { text: "Completed", color: "#10B981" };

    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: `${Math.abs(diffDays)} days overdue`, color: "#EF4444" };
    } else if (diffDays === 0) {
      return { text: "Due today", color: "#F59E0B" };
    } else {
      return { text: `${diffDays} days left`, color: "#10B981" };
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter Section */}
      <div
        className="mb-6 p-4 rounded-lg shadow-md"
        style={{ backgroundColor: colors.light }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-xl font-bold flex items-center"
            style={{ color: colors.primary }}
          >
            <Filter size={20} className="mr-2" />
            Filter Tasks
          </h2>
          <div>
            <button
              onClick={resetFilters}
              className="text-sm px-3 py-1 rounded"
              style={{ backgroundColor: colors.lightGray, color: colors.text }}
            >
              Reset Filters
            </button>
            <button
              onClick={() => (window.location.href = "/task/createTask")}
              className="text-sm px-3 py-1 rounded"
              style={{ backgroundColor: colors.lightGray, color: colors.text }}
            >
              Add a Task
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} style={{ color: colors.textLight }} />
            </div>
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Search tasks..."
              className="pl-10 p-2 w-full border rounded-md"
              style={{ borderColor: colors.textLight }}
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="p-2 w-full border rounded-md"
              style={{ borderColor: colors.textLight }}
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div>
            <select
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              className="p-2 w-full border rounded-md"
              style={{ borderColor: colors.textLight }}
            >
              <option value="">All Priorities</option>
              <option value="low">Low</option>
              <option value="mid">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Team Filter - would come from API in real app */}
          <div>
            <select
              name="team"
              value={filters.team}
              onChange={handleFilterChange}
              className="p-2 w-full border rounded-md"
              style={{ borderColor: colors.textLight }}
            >
              <option value="">All Teams</option>
              <option value="t1">Backend Team</option>
              <option value="t2">Frontend Team</option>
              <option value="t3">DevOps Team</option>
            </select>
          </div>
        </div>
      </div>

      {/* Task Cards */}
      {loading ? (
        <div className="text-center py-10">Loading tasks...</div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center py-10" style={{ color: colors.textLight }}>
          No tasks found matching the filters
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((task) => {
            const statusInfo = getStatusInfo(task.status);
            const priorityInfo = getPriorityInfo(task.priority);
            const daysInfo = getDaysInfo(task.deadline, task.completedAt);

            return <TaskCard task={task} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FilterTask;
