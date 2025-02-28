import React, { useState, useEffect } from "react";
import { Save, XCircle, Upload } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const CreateTask = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    organizationId: "",
    projectLead: "",
    imageUrl: "",
    deadline: "",
    projectStatus: "active",
    priority: "mid",
    prd: "",
    status: "open",
    createdBy: "",
  });

  const [prdFile, setPrdFile] = useState(null);
  const [organizations, setOrganizations] = useState([
    {
      _id: "67c098630b023de5d7280175",
      name: "workhive",
    },
  ]);
  const [projectLeads, setProjectLeads] = useState([
    {
      _id: "67c098a30b023de5d7280177",
      name: "Angad Sudan",
    },
    {
      _id: "67c099030b023de5d728017d",
      name: "Adheesh Verma",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Fetch organizations and project leads on component mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setPrdFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (
      !formData.name ||
      !formData.deadline ||
      !formData.organizationId ||
      !formData.projectLead
    ) {
      toast.error("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      // Create FormData object for file upload
      const projectData = new FormData();

      // Add all form fields to FormData
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          projectData.append(key, formData[key]);
        }
      });

      // Add the PRD file if it exists
      if (prdFile) {
        projectData.append("prdFile", prdFile);
      }

      // Make API call to create project
      const response = await axios.post("http://localhost:8000/project", {
        ...projectData,
        user: localStorage.getItem("token"),
      });

      // Call the onSubmit callback with the response data
      //   toast.success("project registered success")

      // Show success message
      toast.success("Project created successfully!");

      window.location.href = "/projects";
      // Reset form
      setFormData({
        name: "",
        description: "",
        organizationId: organizations.length > 0 ? organizations[0]._id : "",
        projectLead: "",
        imageUrl: "",
        deadline: "",
        projectStatus: "active",
        priority: "mid",
        prd: "",
        status: "open",
        createdBy: formData.createdBy, // Keep the current user
      });
      setPrdFile(null);
    } catch (error) {
      toast.success("waiting for the admin to authorize the project");
      //   toast.error(
      // error.response?.data.data?.message || "Failed to create project"
      //   );
      console.error("Error creating project:", error);
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
      organizationId: organizations.length > 0 ? organizations[0]._id : "",
      projectLead: "",
      imageUrl: "",
      deadline: "",
      projectStatus: "active",
      priority: "mid",
      prd: "",
      status: "open",
      createdBy: formData.createdBy, // Keep the current user
    });
    setPrdFile(null);
    toast.error("Form cleared!");
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg"
      style={{ backgroundColor: "#1E2A3C" }}
    >
      <Toaster />
      <h2 className="text-2xl font-bold mb-4" style={{ color: "#FBCB18" }}>
        Create New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Project Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            required
            minLength="3"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            maxLength="1000"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Organization *
          </label>
          <select
            name="organizationId"
            value={formData.organizationId}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            required
          >
            <option value="">Select Organization</option>
            {organizations.map((org) => (
              <option key={org._id} value={org._id}>
                {org.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Project Lead *
          </label>
          <select
            name="projectLead"
            value={formData.projectLead}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            required
          >
            <option value="">Select Project Lead</option>
            {projectLeads.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Deadline *
          </label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Project Status
          </label>
          <select
            name="projectStatus"
            value={formData.projectStatus}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
          >
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            PRD Document
          </label>
          <div className="flex items-center mt-1">
            <input
              type="file"
              id="prd-file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <label
              htmlFor="prd-file"
              className="flex items-center px-4 py-2 rounded-md cursor-pointer"
              style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
            >
              <Upload className="mr-2" size={16} />
              {prdFile ? prdFile.name : "Upload PRD"}
            </label>
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ color: "#FBCB18" }}
          >
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full p-2 rounded-md"
            style={{ backgroundColor: "#0F1827", color: "#FFFFFF" }}
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center px-4 py-2 rounded-md"
            style={{ backgroundColor: "#FBCB18", color: "#0F1827" }}
            disabled={loading}
          >
            <XCircle className="mr-2" size={16} /> Clear
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 rounded-md"
            style={{ backgroundColor: "#FBCB18", color: "#0F1827" }}
            disabled={loading}
          >
            <Save className="mr-2" size={16} /> {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
