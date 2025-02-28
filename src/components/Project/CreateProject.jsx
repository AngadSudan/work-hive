import React, { useState, useEffect } from "react";
import {
  Save,
  XCircle,
  Clock,
  Star,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const CreateProject = () => {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([
    {
      _id: "67c0b89b0c6f6c617e2e6469",
      name: "Innovators Squad",
    },
  ]);
  const [users, setUsers] = useState([
    {
      _id: "67c098a30b023de5d7280177",
      name: "Angad Sudan",
    },
    {
      _id: "67c099030b023de5d728017d",
      name: "Adheesh Verma",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    allotedTeam: "",
    allotedTo: "",
    deadline: "",
    priority: "mid",
    credits: 0,
    negativeReward: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (
      !formData.name ||
      !formData.description ||
      !formData.allotedTeam ||
      !formData.allotedTo ||
      !formData.priority ||
      !formData.deadline
    ) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/task/create", {
        ...formData,
        user: localStorage.getItem("token"),
      });

      toast.success("Task created successfully!");
      // Reset form
      setFormData({
        name: "",
        description: "",
        allotedTeam: "",
        allotedTo: "",
        deadline: "",
        priority: "mid",
        credits: 0,
        negativeReward: 0,
      });
    } catch (error) {
      toast.success("Waiting for the admin to authorize the task");
      console.error("Error creating task:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      description: "",
      allotedTeam: "",
      allotedTo: "",
      deadline: "",
      priority: "mid",
      credits: 0,
      negativeReward: 0,
    });
    toast.error("Form cleared!");
  };

  return (
    <div className="p-6 rounded-lg shadow-lg bg-slate-800 text-white">
      <Toaster />
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-400">Create New Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Task Name */}
        <div>
          <label className="block text-sm font-medium text-yellow-400 mb-1">
            Task Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter task name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-yellow-400 mb-1">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter task description"
            rows="4"
            required
          />
        </div>

        {/* Team and Assignment - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Alloted Team */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Alloted Team *
            </label>
            {teams.length !== 0 && (
              <select
                name="allotedTeam"
                value={formData.allotedTeam}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Select Team</option>
                {teams.map((team) => (
                  <option key={team._id} value={team._id}>
                    {team.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Alloted To */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              Assign To *
            </label>
            <select
              name="allotedTo"
              value={formData.allotedTo}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Deadline and Priority - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              <div className="flex items-center">
                <Clock className="mr-1" size={16} />
                Deadline *
              </div>
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              <div className="flex items-center">
                <Star className="mr-1" size={16} />
                Priority *
              </div>
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        {/* Credits and Negative Reward - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Credits */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              <div className="flex items-center">
                <DollarSign className="mr-1" size={16} />
                Credits
              </div>
            </label>
            <input
              type="number"
              name="credits"
              value={formData.credits}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              min="0"
            />
          </div>

          {/* Negative Reward */}
          <div>
            <label className="block text-sm font-medium text-yellow-400 mb-1">
              <div className="flex items-center">
                <AlertTriangle className="mr-1" size={16} />
                Negative Reward
              </div>
            </label>
            <input
              type="number"
              name="negativeReward"
              value={formData.negativeReward}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              min="0"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
            disabled={loading}
          >
            <XCircle className="mr-2" size={18} /> Clear
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 rounded-md bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-400 transition-colors"
            disabled={loading}
          >
            <Save className="mr-2" size={18} />
            {loading ? "Creating..." : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
