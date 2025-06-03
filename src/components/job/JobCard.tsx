import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { Job } from '../../types';
import { formatDate, formatCurrency } from '../../lib/utils';
import { mockUsers } from '../../data/mockData';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const postedBy = mockUsers.find(user => user.id === job.postedBy);
  
  return (
    <Card hoverEffect className="transition-transform duration-300 hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-3">
          <Link to={`/jobs/${job.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
          </Link>
          <Badge 
            variant={
              job.status === 'open' ? 'success' : 
              job.status === 'in-progress' ? 'warning' : 
              job.status === 'completed' ? 'primary' : 
              'outline'
            }
          >
            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </Badge>
        </div>
        
        <div className="text-gray-600 mb-4">
          <p className="line-clamp-2 mb-2">{job.description}</p>
          
          <div className="flex flex-wrap gap-2 my-3">
            {job.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" size="sm">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" size="sm">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap gap-y-2 text-sm">
            <div className="flex items-center mr-4">
              <DollarSign size={16} className="mr-1 text-gray-400" />
              <span>
                {job.budget.type === 'fixed' 
                  ? `${formatCurrency(job.budget.min)} - ${formatCurrency(job.budget.max)}`
                  : `${formatCurrency(job.budget.min)}-${formatCurrency(job.budget.max)}/hr`}
              </span>
            </div>
            
            {job.deadline && (
              <div className="flex items-center mr-4">
                <Clock size={16} className="mr-1 text-gray-400" />
                <span>Due {formatDate(job.deadline)}</span>
              </div>
            )}
            
            {job.applicants && (
              <div className="flex items-center">
                <Users size={16} className="mr-1 text-gray-400" />
                <span>{job.applicants} applicants</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 flex items-center justify-between">
        <div className="flex items-center">
          {postedBy && (
            <>
              <Avatar 
                src={postedBy.avatar}
                name={postedBy.name}
                size="sm"
              />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-900">{postedBy.name}</p>
              </div>
            </>
          )}
        </div>
        <div className="text-sm text-gray-500">
          Posted {formatDate(job.postedDate)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;