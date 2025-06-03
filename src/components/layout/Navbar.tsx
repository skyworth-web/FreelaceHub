import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, Search, User } from 'lucide-react';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

interface NavbarProps {
  user?: {
    id: string;
    name: string;
    avatar?: string;
  } | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-600">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span className="font-bold text-xl">FreelanceHub</span>
            </Link>
          </div>

          {/* Search bar - visible on medium screens and up */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search jobs, freelancers, skills..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/jobs" className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md">
              Find Jobs
            </Link>
            <Link to="/freelancers" className="px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md">
              Find Talent
            </Link>
            
            {user ? (
              <>
                <button className="p-2 text-gray-700 hover:text-blue-600 rounded-md relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 text-gray-700 hover:text-blue-600 rounded-md relative">
                  <MessageSquare size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="relative">
                  <Link to="/profile" className="flex items-center">
                    <Avatar 
                      src={user.avatar} 
                      name={user.name} 
                      size="sm" 
                      status="online" 
                      className="ml-2" 
                    />
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Log In</Button>
                <Button variant="primary" size="sm">Sign Up</Button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search jobs, freelancers, skills..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50"
                />
              </div>
            </div>
            <Link 
              to="/jobs" 
              className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link 
              to="/freelancers" 
              className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Talent
            </Link>
            {user ? (
              <>
                <Link 
                  to="/messages" 
                  className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Messages
                </Link>
                <Link 
                  to="/notifications" 
                  className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Notifications
                </Link>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            ) : (
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">Log In</Button>
                <Button variant="primary" size="sm" className="w-full">Sign Up</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;