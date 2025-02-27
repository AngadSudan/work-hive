import React, { useState } from 'react';
import logosrc from "../assets/logo.png";
import beesrc from "../assets/beehive.jpg";

const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }
      
      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      console.log('Login successful', formData);
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 bg-opacity-95 text-white">
      <div className="w-[70%] h-[70%] mr-[5%]">
        <img src={beesrc} alt="beehive"/>
      </div>
      <div className="max-w-md w-full p-8 mr-[5%]">
        <div className="flex justify-center mb-8">
          <div className="w-35 h-35">
            <img src={logosrc} alt="Logo" />
          </div>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900 bg-opacity-50 text-red-200 rounded-md">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 ml-5 font-medium mb-2">
              Organization Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-700 rounded-full bg-white bg-opacity-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@company.com"
              required
            />
          </div>
          
          <div className="mb-6">
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
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 text-sm">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-300"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Need an account?{' '}
            <a href="#" className="text-yellow-500 hover:cursor:pointer hover:text-yellow-400">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin;