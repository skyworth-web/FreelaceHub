import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobCard from '../job/JobCard';
import Button from '../ui/Button';
import { mockJobs } from '../../data/mockData';

const FeaturedJobs: React.FC = () => {
  // Get only open jobs and sort by most recent
  const featuredJobs = mockJobs
    .filter(job => job.status === 'open')
    .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="text-gray-600 mt-2">Discover new opportunities that match your skills</p>
          </div>
          
          <Link to="/jobs">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<ArrowRight size={16} />} 
              iconPosition="right"
            >
              View All Jobs
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;