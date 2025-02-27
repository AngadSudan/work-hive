import React, { useState } from 'react';
import logosrc from "../assets/logo.png" ;
import beesrc from "../assets/beehive.jpg" ;
function CompanySignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (formData.password.trim().length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Registration successful', formData);
      setSuccess(true);
      
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1827] bg-opacity-95 text-white">
      <div className="w-[70%] h-[70%] mr-[5%]">
        <img src={beesrc} alt="beehive"/></div>
      <div className="max-w-md w-full p-8 mr-[5%]">
        <div className="flex justify-center mb-8">

          <div className="w-35 h-35">
            {/* img */}
            <img src={logosrc} alt="Logo" />

          </div>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900 bg-opacity-50 text-red-200 rounded-md">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-900 bg-opacity-50 text-green-200 rounded-md">
            Registration successful! You can now log in to your account.
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 ml-5 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-700 rounded-full bg-white bg-opacity-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter Name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 ml-5 font-medium mb-2">
              Organization mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-700 rounded-full bg-white bg-opacity-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter mail"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 ml-5 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-700 rounded-full bg-white bg-opacity-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter password"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-300 ml-5 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-700 rounded-full bg-white bg-opacity-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Re-Enter password"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-300"
          >
            {loading ? 'Processing...' : 'Enter'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Registered Already?{' '}
            <a href="/company-login" className="text-yellow-500 hover:text-yellow-400">
              Log in
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default CompanySignup;