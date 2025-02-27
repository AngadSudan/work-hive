import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Organization from "../components/Home/Organization";
import RecentReviews from "../components/Home/RecentReviews";
import Sidebar from "../components/Sidebar";

function Home() {
  if (localStorage.getItem("token") === null) {
    window.location.href = "/company-login";
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <Organization />
          <RecentReviews />
        </div>
      </div>
    </div>
  );
}

export default Home;
