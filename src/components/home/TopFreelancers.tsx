import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FreelancerCard from '../freelancer/FreelancerCard';
import Button from '../ui/Button';
import { mockUsers } from '../../data/mockData';

const TopFreelancers: React.FC = () => {
  // Get only freelancer users and sort by rating
  const topFreelancers = mockUsers
    .filter(user => user.role === 'freelancer')
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Top Freelancers</h2>
            <p className="text-gray-600 mt-2">Connect with talented professionals for your projects</p>
          </div>
          
          <Link to="/freelancers">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<ArrowRight size={16} />} 
              iconPosition="right"
            >
              View All Freelancers
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topFreelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;