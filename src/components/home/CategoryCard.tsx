import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '../../types';
import { cn } from '../../lib/utils';

// Dynamically import the icon from lucide-react based on the category icon name
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className }) => {
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)];
  
  return (
    <Link to={`/categories/${category.id}`}>
      <div className={cn(
        "bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group",
        className
      )}>
        <div className="mb-4 text-blue-600 bg-blue-50 p-3 rounded-lg inline-block">
          {IconComponent && <IconComponent size={24} />}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-gray-500">Browse jobs</p>
        <div className="mt-4 text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="mr-1 text-sm font-medium">Explore</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;