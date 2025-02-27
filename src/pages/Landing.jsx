import React from 'react';
import logosrc from "../assets/logo.png" ;
import beesrc from "../assets/beehive.jpg" ;
import cisco from "../assets/cisco.png" ;
import ebay from "../assets/ebay.png" ;
import ford from "../assets/ford.png" ;


const Landing = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          <img src={logosrc} alt="Company Logo" className="h-25" />
        </div>
        {/* <nav className="hidden md:block"> */}
          {/* Navigation would go here */}
        {/* </nav> */}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-0 px-4">
        {/* Left side text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 ml-10 mr--20 font-['Arial']">
  <h1 className="text-7xl md:text-8xl font-semibold text-yellow-400 mb-6" style={{ fontSize: '93px' }}>
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
        <div className="w-[110%] md:w-1/2 relative mr-10">
          <div className="flex items-center justify-center">
            <img src={beesrc} alt="Server racks with cartoon robots" className="w-[120%] h-[120%] my--15" />
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={ebay} alt="eBay logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={cisco} alt="Cisco logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={ford} alt="Ford logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={cisco} alt="Square logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={ebay} alt="eBay logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={ford} alt="Cisco logo" className=" mr-10 h-13 opacity-70 w-18" />
            <img src={cisco} alt="Ford logo" className=" mr-10 h-13 opacity-70 w-18" />
          </div>
        </div>
      </section>

      <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto my-16">
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Inter']">Boost Your Productivity</h2>
    <p className="text-gray-300 max-w-2xl mx-auto font-['Inter']">
      Transform how your team works with our powerful project management tools. Choose the plan that fits your business needs.
    </p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-6">
    {/* Basic Plan */}
    <div className="bg-gray-900 rounded-lg p-6 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2 font-['Inter']">Basic</h3>
      <p className="text-gray-400 mb-4 font-['Inter']">Perfect for small teams</p>
      <div className="text-yellow-400 text-4xl font-bold mb-4 font-['Inter']">$29<span className="text-lg font-normal">/month</span></div>
      <ul className="text-gray-300 mb-6 flex-grow font-['Inter']">
        <li className="mb-2">• Up to 5 team members</li>
        <li className="mb-2">• 10 active projects</li>
        <li className="mb-2">• Basic analytics</li>
        <li className="mb-2">• 24/7 support</li>
      </ul>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded font-['Inter']">
        Get Started
      </button>
    </div>
    
    {/* Pro Plan */}
    <div className="bg-yellow-400 rounded-lg p-6 flex flex-col relative transform scale-105">
      <div className="absolute -top-4 left-0 right-0 text-center">
        <span className="bg-blue-600 text-white text-sm py-1 px-3 rounded-full font-['Inter']">MOST POPULAR</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Inter']">Pro</h3>
      <p className="text-gray-700 mb-4 font-['Inter']">Ideal for growing businesses</p>
      <div className="text-gray-900 text-4xl font-bold mb-4 font-['Inter']">$79<span className="text-lg font-normal">/month</span></div>
      <ul className="text-gray-800 mb-6 flex-grow font-['Inter']">
        <li className="mb-2">• Up to 15 team members</li>
        <li className="mb-2">• Unlimited projects</li>
        <li className="mb-2">• Advanced analytics</li>
        <li className="mb-2">• Priority support</li>
        <li className="mb-2">• Custom integrations</li>
      </ul>
      <button className="bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded font-['Inter']">
        Choose Pro
      </button>
    </div>
    
    {/* Enterprise Plan */}
    <div className="bg-gray-900 rounded-lg p-6 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2 font-['Inter']">Enterprise</h3>
      <p className="text-gray-400 mb-4 font-['Inter']">For large organizations</p>
      <div className="text-yellow-400 text-4xl font-bold mb-4 font-['Inter']">$199<span className="text-lg font-normal">/month</span></div>
      <ul className="text-gray-300 mb-6 flex-grow font-['Inter']">
        <li className="mb-2">• Unlimited team members</li>
        <li className="mb-2">• Unlimited projects</li>
        <li className="mb-2">• Enterprise analytics</li>
        <li className="mb-2">• Dedicated support</li>
        <li className="mb-2">• Advanced security</li>
        <li className="mb-2">• Custom branding</li>
      </ul>
      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded font-['Inter']">
        Contact Sales
      </button>
    </div>
  </div>
  
  <div className="text-center mt-8">
    <p className="text-gray-400 font-['Inter']">All plans include a 14-day free trial. No credit card required.</p>
  </div>
</div>

<footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6">
  <div className="container mx-auto px-4">
    {/* Newsletter Section */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h3 className="text-2xl font-bold text-white mb-3 font-['Inter']">Subscribe to our newsletter</h3>
      <p className="text-gray-400 mb-6 font-['Inter']">
        Stay updated with the latest features, tips, and project management insights.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="flex-grow bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 font-['Inter']"
        />
        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors font-['Inter']">
          Subscribe
        </button>
      </div>
      
      <p className="text-gray-500 text-sm mt-3 font-['Inter']">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
    
    {/* Footer Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h4 className="text-white font-bold mb-4 font-['Inter']">Product</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Features</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Pricing</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Integrations</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Changelog</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4 font-['Inter']">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Documentation</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Guides</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Tutorials</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Webinars</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4 font-['Inter']">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Careers</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4 font-['Inter']">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Privacy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Terms</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Security</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors font-['Inter']">Cookies</a></li>
        </ul>
      </div>
    </div>
    
    {/* Bottom Section */}
    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/api/placeholder/40/40" alt="Company Logo" className="h-8 mr-3" />
        <span className="text-gray-400 font-['Inter']">© 2025 Creative Plan. All rights reserved.</span>
      </div>
      
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Landing;