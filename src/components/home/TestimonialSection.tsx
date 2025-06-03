import React from 'react';
import { Star } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { mockUsers, mockReviews } from '../../data/mockData';

const TestimonialSection: React.FC = () => {
  // Match reviews with users who wrote them
  const testimonialsWithUsers = mockReviews.map(review => {
    const reviewer = mockUsers.find(user => user.id === review.userId);
    const target = mockUsers.find(user => user.id === review.targetId);
    
    return {
      ...review,
      reviewer,
      target
    };
  });

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our satisfied clients and freelancers about their experiences on FreelanceHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsWithUsers.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center">
                {testimonial.reviewer && (
                  <Avatar 
                    src={testimonial.reviewer.avatar} 
                    name={testimonial.reviewer.name}
                    size="md"
                  />
                )}
                
                <div className="ml-3">
                  <p className="font-medium text-gray-900">
                    {testimonial.reviewer?.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;