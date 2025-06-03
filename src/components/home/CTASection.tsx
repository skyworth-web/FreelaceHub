import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface CTASectionProps {
  userType?: 'client' | 'freelancer';
}

const CTASection: React.FC<CTASectionProps> = ({ userType = 'freelancer' }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {userType === 'freelancer'
              ? 'Ready to start earning on your terms?'
              : 'Ready to find the perfect talent for your project?'
            }
          </h2>
          
          <p className="text-xl mb-8 text-blue-100">
            {userType === 'freelancer'
              ? 'Join thousands of freelancers who have found great opportunities and clients on our platform.'
              : 'Connect with skilled professionals who can bring your vision to life, on time and within budget.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={userType === 'freelancer' ? '/signup/freelancer' : '/post-job'}>
              <Button
                variant={userType === 'freelancer' ? 'primary' : 'secondary'}
                size="lg"
                className={userType === 'freelancer' 
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-teal-500 hover:bg-teal-600'
                }
              >
                {userType === 'freelancer' ? 'Create Your Profile' : 'Post a Job'}
              </Button>
            </Link>
            
            <Link to={userType === 'freelancer' ? '/jobs' : '/freelancers'}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                {userType === 'freelancer' ? 'Browse Jobs' : 'Browse Freelancers'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;