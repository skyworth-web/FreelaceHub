import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Briefcase } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { User } from '../../types';

interface FreelancerCardProps {
  freelancer: User;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  return (
    <Card hoverEffect className="transition-transform duration-300 hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row">
          <Avatar 
            src={freelancer.avatar} 
            name={freelancer.name} 
            size="lg" 
            status="online"
            className="mx-auto sm:mx-0 mb-4 sm:mb-0"
          />
          
          <div className="sm:ml-4 flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <Link to={`/freelancers/${freelancer.id}`} className="inline-block">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {freelancer.name}
                  </h3>
                </Link>
                {freelancer.hourlyRate && (
                  <p className="text-blue-600 font-medium">${freelancer.hourlyRate}/hr</p>
                )}
              </div>
              
              {freelancer.rating && (
                <div className="flex items-center mt-1 sm:mt-0 justify-center sm:justify-start">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{freelancer.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
            
            {freelancer.location && (
              <div className="flex items-center justify-center sm:justify-start mt-2 text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{freelancer.location}</span>
              </div>
            )}
            
            {freelancer.bio && (
              <p className="mt-2 text-gray-600 line-clamp-2">{freelancer.bio}</p>
            )}
            
            {freelancer.skills && freelancer.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                {freelancer.skills.slice(0, 4).map((skill, index) => (
                  <Badge key={index} variant="outline" size="sm">
                    {skill}
                  </Badge>
                ))}
                {freelancer.skills.length > 4 && (
                  <Badge variant="outline" size="sm">
                    +{freelancer.skills.length - 4} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <Briefcase size={14} className="mr-1" />
          <span>Member since {new Date(freelancer.joinDate).getFullYear()}</span>
        </div>
        <Link 
          to={`/freelancers/${freelancer.id}`} 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View Profile
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FreelancerCard;