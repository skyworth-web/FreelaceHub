import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import JobCard from '../components/job/JobCard';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockJobs, mockCategories } from '../data/mockData';

const JobsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<{ min: number, max: number }>({ min: 0, max: 10000 });
  const [showFilters, setShowFilters] = useState(false);
  
  // Get all unique skills from jobs
  const allSkills = Array.from(new Set(mockJobs.flatMap(job => job.skills)));
  
  // Filter jobs based on search term, category, skills, and budget
  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => job.skills.includes(skill));
    
    const matchesBudget = job.budget.min <= budgetRange.max && job.budget.max >= budgetRange.min;
    
    return matchesSearch && matchesCategory && matchesSkills && matchesBudget;
  });

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSkills([]);
    setBudgetRange({ min: 0, max: 10000 });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find the Perfect Job
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for jobs (e.g. web design, content writing, mobile app...)" 
                  className="block w-full pl-10 pr-4 py-3 border-0 rounded-md focus:ring-0 text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <Card className="sticky top-20">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <button 
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={clearFilters}
                    >
                      Clear all
                    </button>
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div className="p-5 border-b border-gray-200">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {mockCategories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input 
                          type="radio" 
                          name="category" 
                          checked={selectedCategory === category.name}
                          onChange={() => setSelectedCategory(category.name)}
                          className="mr-2"
                        />
                        <span>{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Skills Filter */}
                <div className="p-5 border-b border-gray-200">
                  <h4 className="font-medium mb-3">Skills</h4>
                  <div className="space-y-2">
                    {allSkills.slice(0, 8).map(skill => (
                      <label key={skill} className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={selectedSkills.includes(skill)}
                          onChange={() => toggleSkill(skill)}
                          className="mr-2"
                        />
                        <span>{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Budget Range Filter */}
                <div className="p-5">
                  <h4 className="font-medium mb-3">Budget Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">${budgetRange.min}</span>
                    <span className="text-sm">${budgetRange.max}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={budgetRange.max}
                    onChange={(e) => setBudgetRange({ ...budgetRange, max: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </Card>
            </div>
            
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-4 flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                icon={<Filter size={16} />}
                onClick={() => setShowFilters(true)}
              >
                Filters
              </Button>
              <span className="text-sm text-gray-500">
                {filteredJobs.length} jobs found
              </span>
            </div>
            
            {/* Mobile Filters Drawer */}
            {showFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black opacity-25" onClick={() => setShowFilters(false)}></div>
                <div className="absolute inset-y-0 left-0 w-3/4 max-w-xs bg-white shadow-xl">
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Filters</h3>
                      <button onClick={() => setShowFilters(false)}>
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Filter content - same as desktop but in a drawer */}
                  {/* Categories Filter */}
                  <div className="p-5 border-b border-gray-200">
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {mockCategories.map(category => (
                        <label key={category.id} className="flex items-center">
                          <input 
                            type="radio" 
                            name="category" 
                            checked={selectedCategory === category.name}
                            onChange={() => setSelectedCategory(category.name)}
                            className="mr-2"
                          />
                          <span>{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills Filter */}
                  <div className="p-5 border-b border-gray-200">
                    <h4 className="font-medium mb-3">Skills</h4>
                    <div className="space-y-2">
                      {allSkills.slice(0, 8).map(skill => (
                        <label key={skill} className="flex items-center">
                          <input 
                            type="checkbox" 
                            checked={selectedSkills.includes(skill)}
                            onChange={() => toggleSkill(skill)}
                            className="mr-2"
                          />
                          <span>{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Budget Range Filter */}
                  <div className="p-5">
                    <h4 className="font-medium mb-3">Budget Range</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">${budgetRange.min}</span>
                      <span className="text-sm">${budgetRange.max}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={budgetRange.max}
                      onChange={(e) => setBudgetRange({ ...budgetRange, max: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="p-5 border-t border-gray-200">
                    <Button 
                      variant="primary"
                      className="w-full"
                      onClick={() => setShowFilters(false)}
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full mt-2"
                      onClick={() => {
                        clearFilters();
                        setShowFilters(false);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Jobs List */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory ? selectedCategory : 'All Jobs'}
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredJobs.length} jobs found
                </div>
              </div>
              
              {/* Selected Filters */}
              {(selectedCategory || selectedSkills.length > 0) && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedCategory && (
                    <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {selectedCategory}
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="ml-2"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  
                  {selectedSkills.map(skill => (
                    <div 
                      key={skill} 
                      className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                      <button 
                        onClick={() => toggleSkill(skill)}
                        className="ml-2"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria to find more jobs.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;