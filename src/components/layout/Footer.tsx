import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center text-white mb-4">
              <svg
                width="24"
                height="24"
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
            <p className="text-gray-300 mb-4 max-w-md">
              Connect with top freelancers and clients worldwide. FreelanceHub makes it easy to find work, 
              showcase your skills, and grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* For Freelancers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Freelancers</h3>
            <ul className="space-y-2">
              <li><Link to="/browse-jobs" className="text-gray-300 hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link to="/create-profile" className="text-gray-300 hover:text-white transition-colors">Create Profile</Link></li>
              <li><Link to="/freelancer-resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          {/* For Clients */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-gray-300 hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link to="/find-freelancers" className="text-gray-300 hover:text-white transition-colors">Find Freelancers</Link></li>
              <li><Link to="/client-resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise Solutions</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help-support" className="text-gray-300 hover:text-white transition-colors">Help & Support</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {year} FreelanceHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;