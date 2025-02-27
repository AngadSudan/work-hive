import React, { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  CreditCard,
  Star,
  Edit,
  Building,
  Hash,
  AtSign,
  Shield,
  Save,
  X,
} from "lucide-react";

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    role: user?.role || "employee",
    employeeNumber: user?.employeeNumber || "",
    userName: user?.userName || "",
    credits: user?.credits || 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic would go here
    setIsEditing(false);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "manager":
        return "bg-blue-100 text-blue-800";
      case "lead":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto"
      style={{ backgroundColor: colors.light, borderRadius: "0.75rem" }}
    >
      {/* Header */}
      <div
        className="p-6 flex justify-between items-center"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.dark})`,
        }}
      >
        <div className="flex items-center">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: colors.secondary }}
          >
            <User size={28} style={{ color: colors.dark }} />
          </div>
          <div className="ml-4 text-white">
            <h2 className="text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </h2>
            <div className="flex items-center mt-1">
              <AtSign size={14} />
              <span className="ml-1 text-sm">{user?.userName}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 rounded-full transition-colors hover:bg-opacity-90"
          style={{ backgroundColor: colors.secondary, color: colors.dark }}
        >
          <Edit size={18} />
        </button>
      </div>

      {/* Main content */}
      <div className="p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={userForm.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  minLength={3}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={userForm.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  minLength={3}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  value={userForm.userName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Employee Number
                </label>
                <input
                  type="text"
                  name="employeeNumber"
                  value={userForm.employeeNumber}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  minLength={4}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Role
                </label>
                <select
                  name="role"
                  value={userForm.role}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  required
                >
                  <option value="employee">Employee</option>
                  <option value="lead">Lead</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: colors.text }}
                >
                  Credits
                </label>
                <input
                  type="number"
                  name="credits"
                  value={userForm.credits}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2 focus:ring-2"
                  style={{
                    borderColor: colors.textLight,
                    outlineColor: colors.secondary,
                  }}
                  min="0"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-md mr-2 flex items-center"
                style={{ backgroundColor: "#E5E7EB", color: colors.text }}
              >
                <X size={16} className="mr-1" />
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md flex items-center"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.dark,
                }}
              >
                <Save size={16} className="mr-1" />
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Mail style={{ color: colors.textLight }} size={20} />
                <span className="ml-2" style={{ color: colors.text }}>
                  {user?.email}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(
                  user?.role
                )}`}
              >
                <div className="flex items-center">
                  <Shield size={14} className="mr-1" />
                  {user?.role}
                </div>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div
                className="p-4 rounded-lg border"
                style={{
                  borderColor: colors.textLight,
                  backgroundColor: colors.lightGray,
                }}
              >
                <div
                  className="flex items-center mb-2"
                  style={{ color: colors.primary }}
                >
                  <Hash size={16} />
                  <span className="ml-2 text-sm font-medium">Employee ID</span>
                </div>
                <p style={{ color: colors.text }}>{user?.employeeNumber}</p>
              </div>

              <div
                className="p-4 rounded-lg border"
                style={{
                  borderColor: colors.textLight,
                  backgroundColor: colors.lightGray,
                }}
              >
                <div
                  className="flex items-center mb-2"
                  style={{ color: colors.primary }}
                >
                  <Building size={16} />
                  <span className="ml-2 text-sm font-medium">Organization</span>
                </div>
                <p style={{ color: colors.text }}>
                  {user?.organization ? "Connected" : "Not Connected"}
                </p>
              </div>

              <div
                className="p-4 rounded-lg border"
                style={{
                  borderColor: colors.textLight,
                  backgroundColor: colors.lightGray,
                }}
              >
                <div
                  className="flex items-center mb-2"
                  style={{ color: colors.primary }}
                >
                  <CreditCard size={16} />
                  <span className="ml-2 text-sm font-medium">Credits</span>
                </div>
                <p style={{ color: colors.text, fontWeight: "bold" }}>
                  {user?.credits || 0}
                </p>
              </div>

              <div
                className="p-4 rounded-lg border"
                style={{
                  borderColor: colors.textLight,
                  backgroundColor: colors.lightGray,
                }}
              >
                <div
                  className="flex items-center mb-2"
                  style={{ color: colors.primary }}
                >
                  <Star size={16} />
                  <span className="ml-2 text-sm font-medium">
                    Starred Tasks
                  </span>
                </div>
                <p style={{ color: colors.text }}>
                  {user?.starredTask?.length || 0}
                </p>
              </div>
            </div>

            <div
              className="mt-6 pt-4"
              style={{ borderTop: `1px solid ${colors.lightGray}` }}
            >
              <h3
                className="font-medium mb-2"
                style={{ color: colors.primary }}
              >
                Account Information
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div style={{ color: colors.textLight }}>Created</div>
                <div style={{ color: colors.text }}>
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </div>
                <div style={{ color: colors.textLight }}>Last Updated</div>
                <div style={{ color: colors.text }}>
                  {user?.updatedAt
                    ? new Date(user.updatedAt).toLocaleDateString()
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
