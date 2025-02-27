import React, { useState } from 'react';
import { FiPlus, FiFilter, FiSearch, FiSettings, FiList, FiGrid, FiRefreshCw, FiShare2, FiAlertCircle } from 'react-icons/fi';

const Home = () => {
  const [view, setView] = useState('board');

  // Sample task data based on the image
  const tasks = {
    backlog: [
      { 
        id: 1, 
        title: 'Multiple bugs with the same root cause', 
        type: 'bug', 
        priority: 'high',
        assignees: ['/api/placeholder/30/30', '/api/placeholder/30/30']
      },
      { 
        id: 2, 
        title: 'Add bulk import of users from CSV exports', 
        type: 'feature', 
        priority: 'medium',
        assignees: ['/api/placeholder/30/30']
      },
      { 
        id: 3, 
        title: 'Feature request template', 
        type: 'improvement', 
        priority: 'low',
        assignees: ['/api/placeholder/30/30', '/api/placeholder/30/30']
      }
    ],
    inDevelopment: [
      { 
        id: 4, 
        title: 'Help improve onboarding speed for first time users', 
        type: 'improvement', 
        priority: 'medium',
        assignees: ['/api/placeholder/30/30']
      },
      { 
        id: 5, 
        title: 'Resolve API mapping issues in integrations', 
        type: 'bug', 
        priority: 'high',
        assignees: ['/api/placeholder/30/30', '/api/placeholder/30/30']
      },
      { 
        id: 6, 
        title: 'Add friend profile for MVP', 
        type: 'feature', 
        priority: 'medium',
        assignees: ['/api/placeholder/30/30']
      }
    ],
    readyForReview: [
      { 
        id: 7, 
        title: 'Add bulk import of users from CSV exports', 
        type: 'feature', 
        priority: 'high',
        assignees: ['/api/placeholder/30/30']
      },
      { 
        id: 8, 
        title: 'Remove backend error states for profile pages', 
        type: 'bug', 
        priority: 'high',
        assignees: ['/api/placeholder/30/30']
      },
      { 
        id: 9, 
        title: 'Improve security level settings for user roles', 
        type: 'security', 
        priority: 'critical',
        assignees: ['/api/placeholder/30/30', '/api/placeholder/30/30']
      }
    ],
    readyToDeploy: [
      { 
        id: 10, 
        title: 'Remove best story backlog techniques', 
        type: 'cleanup', 
        priority: 'medium',
        assignees: ['/api/placeholder/30/30', '/api/placeholder/30/30']
      },
      { 
        id: 11, 
        title: 'Build new section for client resource shared project docs', 
        type: 'feature', 
        priority: 'medium',
        assignees: ['/api/placeholder/30/30']
      }
    ]
  };

  // Get task type badge color
  const getTypeColor = (type) => {
    switch(type.toLowerCase()) {
      case 'bug': return 'bg-red-500';
      case 'feature': return 'bg-blue-500';
      case 'improvement': return 'bg-purple-500';
      case 'security': return 'bg-yellow-500';
      case 'cleanup': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  // Get priority indicator color
  const getPriorityColor = (priority) => {
    switch(priority.toLowerCase()) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-400';
      default: return 'bg-gray-400';
    }
  };

  // Task card component
  const TaskCard = ({ task }) => (
    <div className="bg-white rounded-md shadow-sm p-3 mb-3 border-l-4 border-blue-500">
      <div className="flex items-start justify-between mb-2">
        <span className={`text-xs px-2 py-1 rounded-full text-white ${getTypeColor(task.type)}`}>
          {task.type}
        </span>
        <span className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></span>
      </div>
      <p className="text-sm font-medium mb-2">{task.title}</p>
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {task.assignees.map((avatar, index) => (
            <img 
              key={index} 
              src={avatar} 
              alt="User avatar" 
              className="w-6 h-6 rounded-full border-2 border-white" 
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-yellow-400 font-bold text-xl flex items-center">
              <img src="/api/placeholder/36/36" alt="WorkHive logo" className="mr-2" />
              WorkHive
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:text-yellow-400">The Shortcut Way</a>
              <a href="#" className="text-sm hover:text-yellow-400">Features</a>
              <a href="#" className="text-sm hover:text-yellow-400">Integrations</a>
              <a href="#" className="text-sm hover:text-yellow-400">Pricing</a>
              <a href="#" className="text-sm hover:text-yellow-400">Resources</a>
              <a href="#" className="text-sm hover:text-yellow-400">Achievements</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm hover:text-yellow-400">Log in</button>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium">Sign up for FREE</button>
          </div>
        </div>
      </nav>

      {/* Feature Boxes */}
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
            <div className="mr-3 bg-yellow-400 p-2 rounded-full">
              <FiPlus className="text-gray-900" />
            </div>
            <div>
              <h3 className="font-bold">Build Collaboratively</h3>
              <p className="text-sm opacity-75">Prioritize, develop, iterate, track</p>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
            <div className="mr-3 bg-orange-400 p-2 rounded-full">
              <FiRefreshCw className="text-gray-900" />
            </div>
            <div>
              <h3 className="font-bold">Coordinate Roadmaps</h3>
              <p className="text-sm opacity-75">Plan, track, & share visual progress</p>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
            <div className="mr-3 bg-blue-400 p-2 rounded-full">
              <FiShare2 className="text-gray-900" />
            </div>
            <div>
              <h3 className="font-bold">Connect Work to Goals</h3>
              <p className="text-sm opacity-75">1:1s linked to your actual work</p>
            </div>
          </div>
        </div>

        {/* Create Story + Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <FiPlus className="mr-1" /> Create Story
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Stories..."
                className="bg-gray-800 text-white pl-9 pr-3 py-2 rounded-md text-sm border border-gray-700"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <FiFilter />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <FiShare2 />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <FiSettings />
            </button>
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>

        {/* Workflow Header */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Workflow: Engineering</span>
              <FiFilter className="text-gray-500" />
            </div>
            <button className="text-sm text-gray-500">Help</button>
            <button className="text-sm text-gray-500">Filters</button>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">Display:</span>
            <button 
              className={`p-1 ${view === 'board' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setView('board')}
            >
              <FiGrid />
            </button>
            <button 
              className={`p-1 ${view === 'list' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setView('list')}
            >
              <FiList />
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Backlog Column */}
          <div className="bg-gray-200 rounded-md p-3">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">Ready for Dev</h3>
              <span className="text-xs bg-gray-300 py-1 px-2 rounded-full">{tasks.backlog.length}</span>
            </div>
            {tasks.backlog.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
            <button className="w-full text-center py-2 text-gray-500 hover:text-gray-700">
              <FiPlus className="inline mr-1" /> Add card
            </button>
          </div>

          {/* In Development Column */}
          <d