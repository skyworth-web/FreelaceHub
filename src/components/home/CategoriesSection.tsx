import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import Button from '../ui/Button';
import { mockCategories } from '../../data/mockData';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="text-gray-600 mt-2">Explore opportunities in your area of expertise</p>
          </div>
          
          <Link to="/categories">
            <Button 
              variant="outline" 
              size="sm" 
              icon={<ArrowRight size={16} />} 
              iconPosition="right"
            >
              View All Categories
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {mockCategories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;