import React from 'react';
import Sidebar from "../components/Sidebar";
import banner1 from "../assets/banner1.jpg" ;


// Dummy data for the organization
const organization = {
  name: 'Tech Innovators Inc.',
  description:
    'Tech Innovators Inc. is a leading technology company specializing in software development, AI, and cloud solutions. We are committed to delivering cutting-edge technology to our clients.',
  employees: 250,
  review: 'Great place to work! The team is very supportive and the projects are challenging and rewarding.',
};

const OrganizationPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1827] text-[#FBCB18] p-5">
      <Sidebar />

      {/* Banner Image */}
      <img
        src={banner1}
        alt="Banner"
        className="w-[75%] h-64 object-cover rounded-lg ml-[20%]" 
      />

      {/* Organization Name */}
      <h1 className="text-4xl font-bold mt-6  w-[75%] ml-[20%]">{organization.name}</h1>

      {/* Description */}
      <p className="text-[#ffffff] text-lg mt-4 w-[75%] ml-[20%]">{organization.description}</p>

      {/* Number of Employees */}
      <div className="text-[#ffffff] text-lg mt-4 w-[75%] ml-[20%]">
        <strong>Number of Employees:</strong> {organization.employees}
      </div>

      {/* Review Section */}
      <div className="bg-[#1E2A3C] p-4 rounded-lg mt-6 w-[75%] ml-[20%]">
        <p className="text-[#FBCB18] italic w-[75%] ml-[20%]">{organization.review}</p>
      </div>
    </div>
  );
};

export default OrganizationPage;