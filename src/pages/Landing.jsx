import React from 'react';
import logosrc from "../assets/logo.png" ;
import beesrc from "../assets/beehive.jpg" ;


const Landing = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          <img src={logosrc} alt="Company Logo" className="h-35" />
        </div>
        <nav className="hidden md:block">
          {/* Navigation would go here */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-0 px-4">
        {/* Left side text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mr-10 font-['Arial']">
  <h1 className="text-7xl md:text-8xl font-semibold text-yellow-400 mb-6" style={{ fontSize: '113px' }}>
    Creative<br />
    At Your<br />
    Plan
  </h1>
  <p className="text-lg mb-8 max-w-md font-['Inter']">
    Use our project management software to transform
    your company and manage business operations more
    smoothly and effectively.
  </p>
  <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-md flex items-center font-[';']">
    Get Started
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
</div>
        {/* Right side image content */}
        <div className="w-full md:w-1/2 relative">
          <div className="flex items-center justify-center">
            <img src={beesrc} alt="Server racks with cartoon robots" className="w-full h-max my--15" />
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/api/placeholder/80/30" alt="eBay logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="Cisco logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="Ford logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="Square logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="eBay logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="Cisco logo" className="h-6 opacity-70" />
            <img src="/api/placeholder/80/30" alt="Ford logo" className="h-6 opacity-70" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;