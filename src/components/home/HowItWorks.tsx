import React from 'react';
import { Search, UserCheck, FileText, CreditCard } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Post a Job',
      description: 'Tell us what you need. Provide as many details as possible, but it\'s fine if you don\'t know exactly what you need.',
      icon: <FileText size={30} className="text-blue-600" />,
    },
    {
      title: 'Find Talent',
      description: 'Receive proposals from our vast network of skilled freelancers. Browse profiles, reviews, and portfolios.',
      icon: <Search size={30} className="text-blue-600" />,
    },
    {
      title: 'Hire the Best',
      description: 'Interview top candidates, discuss your project details, and hire the perfect match for your needs.',
      icon: <UserCheck size={30} className="text-blue-600" />,
    },
    {
      title: 'Payment Protection',
      description: 'Release payment only when you\'re satisfied with the work, ensuring quality results every time.',
      icon: <CreditCard size={30} className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How FreelanceHub Works</h2>
          <p className="text-lg text-gray-600">
            Our platform makes it easy to find talent for any job, or to find work that matches your expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="bg-blue-50 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;