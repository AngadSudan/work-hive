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
  // Using the provided data or default values
  const defaultUser = {
    firstName: "Angad",
    lastName: "Sudan",
    email: "angad@workhive.com",
    role: "employee",
    employeeNumber: "EMP004",
    userName: "angad",
    credits: 100,
    organization: "Workhive",
    starredTask: [],
    createdAt: "2025-02-27",
    updatedAt: "2025-02-28",
  };

  // Merge provided user data with defaults
  const userData = { ...defaultUser, ...user };

  const [isEditing, setIsEditing] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    role: userData.role,
    employeeNumber: userData.employeeNumber,
    userName: userData.userName,
    credits: userData.credits,
  });

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
    <div className="min-h-screen bg-[#0F1827] text-[#FBCB18] p-5">
      <div className="rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto bg-white">
        {/* Header */}
        <div className="p-6 flex justify-between items-center bg-gradient-to-r from-[#1E2A3C] to-[#0F1827]">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-[#FBCB18]">
              <User size={28} className="text-[#0F1827]" />
            </div>
            <div className="ml-4 text-white">
              <h2 className="text-xl font-bold">
                {userForm.firstName} {userForm.lastName}
              </h2>
              <div className="flex items-center mt-1">
                <AtSign size={14} />
                <span className="ml-1 text-sm">{userForm.userName}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 rounded-full bg-[#FBCB18] text-[#0F1827] hover:bg-opacity-90 transition-colors"
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
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userForm.firstName}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    minLength={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userForm.lastName}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    minLength={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userForm.email}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={userForm.userName}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Employee Number
                  </label>
                  <input
                    type="text"
                    name="employeeNumber"
                    value={userForm.employeeNumber}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    minLength={4}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Role
                  </label>
                  <select
                    name="role"
                    value={userForm.role}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    required
                  >
                    <option value="employee">Employee</option>
                    <option value="lead">Lead</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#1E293B]">
                    Credits
                  </label>
                  <input
                    type="number"
                    name="credits"
                    value={userForm.credits}
                    onChange={handleChange}
                    className="w-full border border-[#64748B] rounded-md p-2 focus:ring-2 focus:ring-[#FBCB18] focus:border-[#FBCB18] outline-none"
                    min="0"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-md mr-2 flex items-center bg-gray-200 text-[#1E293B]"
                >
                  <X size={16} className="mr-1" />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md flex items-center bg-[#FBCB18] text-[#0F1827]"
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
                  <Mail className="text-[#64748B]" size={20} />
                  <span className="ml-2 text-[#1E293B]">{userData.email}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(
                    userData.role
                  )}`}
                >
                  <div className="flex items-center">
                    <Shield size={14} className="mr-1" />
                    {userData.role}
                  </div>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-lg border border-[#64748B] bg-[#F3F4F6]">
                  <div className="flex items-center mb-2 text-[#1E2A3C]">
                    <Hash size={16} />
                    <span className="ml-2 text-sm font-medium">
                      Employee ID
                    </span>
                  </div>
                  <p className="text-[#1E293B]">{userData.employeeNumber}</p>
                </div>

                <div className="p-4 rounded-lg border border-[#64748B] bg-[#F3F4F6]">
                  <div className="flex items-center mb-2 text-[#1E2A3C]">
                    <Building size={16} />
                    <span className="ml-2 text-sm font-medium">
                      Organization
                    </span>
                  </div>
                  <p className="text-[#1E293B]">{userData.organization}</p>
                </div>

                <div className="p-4 rounded-lg border border-[#64748B] bg-[#F3F4F6]">
                  <div className="flex items-center mb-2 text-[#1E2A3C]">
                    <CreditCard size={16} />
                    <span className="ml-2 text-sm font-medium">Credits</span>
                  </div>
                  <p className="text-[#1E293B] font-bold">{userData.credits}</p>
                </div>

                <div className="p-4 rounded-lg border border-[#64748B] bg-[#F3F4F6]">
                  <div className="flex items-center mb-2 text-[#1E2A3C]">
                    <Star size={16} />
                    <span className="ml-2 text-sm font-medium">
                      Starred Tasks
                    </span>
                  </div>
                  <p className="text-[#1E293B]">
                    {userData.starredTask?.length || 0}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <h3 className="font-medium mb-2 text-[#1E2A3C]">
                  Account Information
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-[#64748B]">Created</div>
                  <div className="text-[#1E293B]">
                    {userData.createdAt
                      ? new Date(userData.createdAt).toLocaleDateString()
                      : "27-02-2025"}
                  </div>
                  <div className="text-[#64748B]">Last Updated</div>
                  <div className="text-[#1E293B]">
                    {userData.updatedAt
                      ? new Date(userData.updatedAt).toLocaleDateString()
                      : "28-02-2025"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
