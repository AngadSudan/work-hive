import React, { useState } from "react";
import { Star, Users, Briefcase, CheckCircle, Clock } from "lucide-react";

function Organization() {
  // Enhanced dummy data to match the schema
  const [organizations, setOrganizations] = useState([
    {
      name: "Work Hive",
      description:
        "a leading technology company specializing in streamlining the product management cycle.",
      organizationRegestrationNumber: "REG123456",
      status: "active",
      numberOfEmployees: 250,
      overallRating: 4.8,
      currentProjects: 15,
      completedProjects: 45,
    },
  ]);

  return (
    <div className="p-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-yellow-400 text-4xl font-bold">Organizations</h1>
        </div>

        <div className="">
          {organizations.map((org, index) => (
            <OrganizationCard key={index} org={org} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Improved Organization Card Component
function OrganizationCard({ org }) {
  // Function to capitalize the first letter of each word
  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Function to render rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-600" />);
      }
    }

    return stars;
  };

  return (
    <div
      className={`bg-gray-800 rounded-xl shadow-lg border-l-4 ${
        org.status === "active" ? "border-green-500" : "border-red-500"
      } hover:shadow-2xl hover:translate-y-1 transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-yellow-400 text-2xl font-bold">
            {capitalize(org.name)}
          </h2>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              org.status === "active"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {org.status}
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-6">
          {capitalize(org.description)}
        </p>

        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            {renderRating(org.overallRating)}
            <span className="text-gray-300 ml-2">
              {org.overallRating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-gray-400 w-32">Employees:</span>
            <span className="font-medium">{org.numberOfEmployees}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <Briefcase className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-gray-400 w-32">Registration:</span>
            <span className="font-medium">
              {org.organizationRegestrationNumber}
            </span>
          </div>

          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-gray-400 w-32">Current Projects:</span>
            <span className="font-medium">{org.currentProjects}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-gray-400 w-32">Completed Projects:</span>
            <span className="font-medium">{org.completedProjects}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
