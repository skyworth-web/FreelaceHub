import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

interface HeroSectionProps {
  userType?: 'client' | 'freelancer';
}

const HeroSection: React.FC<HeroSectionProps> = ({ userType = 'freelancer' }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-16 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {userType === 'freelancer' 
              ? 'Find Great Freelance Jobs' 
              : 'Hire Expert Freelancers'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {userType === 'freelancer'
              ? 'Discover projects that match your skills and start working with clients from around the world.'
              : 'Connect with talented professionals and get quality work done for your business needs.'}
          </p>
          
          <div className="bg-white rounded-lg p-2 shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder={userType === 'freelancer' 
                    ? "Search for jobs (e.g. web design, mobile app, writing...)" 
                    : "Search for skills (e.g. web design, mobile app, writing...)"
                  }
                  className="block w-full pl-10 pr-3 py-3 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:rounded-l-md sm:border-r sm:border-gray-200"
                />
              </div>
              <Button 
                variant="primary" 
                size="lg" 
                className="mt-2 sm:mt-0 sm:ml-2 sm:flex-shrink-0 whitespace-nowrap"
              >
                {userType === 'freelancer' ? 'Find Jobs' : 'Find Freelancers'}
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-blue-100 text-sm">
            <p>
              Popular: 
              <a href="#" className="inline-block ml-2 mr-2 underline hover:text-white">Web Development</a>
              <a href="#" className="inline-block mr-2 underline hover:text-white">Design</a>
              <a href="#" className="inline-block mr-2 underline hover:text-white">Writing</a>
              <a href="#" className="inline-block mr-2 underline hover:text-white">Marketing</a>
              <a href="#" className="inline-block underline hover:text-white">Mobile Development</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px] rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;