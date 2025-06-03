import React, { useState } from 'react';
import { Search, Filter, X, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FreelancerCard from '../components/freelancer/FreelancerCard';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockUsers } from '../data/mockData';

const FreelancersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [hourlyRateRange, setHourlyRateRange] = useState<{ min: number, max: number }>({ min: 0, max: 100 });
  const [showFilters, setShowFilters] = useState(false);
  
  // Get all freelancers
  const freelancers = mockUsers.filter(user => user.role === 'freelancer');
  
  // Get all unique skills from freelancers
  const allSkills = Array.from(new Set(freelancers.flatMap(freelancer => freelancer.skills || [])));
  
  // Filter freelancers based on search term, skills, and hourly rate
  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (freelancer.bio && freelancer.bio.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSkills = selectedSkills.length === 0 || 
                         (freelancer.skills && selectedSkills.some(skill => freelancer.skills!.includes(skill)));
    
    const matchesHourlyRate = !freelancer.hourlyRate || 
                            (freelancer.hourlyRate >= hourlyRateRange.min && freelancer.hourlyRate <= hourlyRateRange.max);
    
    return matchesSearch && matchesSkills && matchesHourlyRate;
  });

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    setHourlyRateRange({ min: 0, max: 100 });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find Talented Freelancers
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for freelancers by name or skills..." 
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
                
                {/* Hourly Rate Filter */}
                <div className="p-5">
                  <h4 className="font-medium mb-3">Hourly Rate</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">${hourlyRateRange.min}</span>
                    <span className="text-sm">${hourlyRateRange.max}+</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={hourlyRateRange.max}
                    onChange={(e) => setHourlyRateRange({ ...hourlyRateRange, max: parseInt(e.target.value) })}
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
                {filteredFreelancers.length} freelancers found
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
                  
                  {/* Hourly Rate Filter */}
                  <div className="p-5">
                    <h4 className="font-medium mb-3">Hourly Rate</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">${hourlyRateRange.min}</span>
                      <span className="text-sm">${hourlyRateRange.max}+</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={hourlyRateRange.max}
                      onChange={(e) => setHourlyRateRange({ ...hourlyRateRange, max: parseInt(e.target.value) })}
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
            
            {/* Freelancers List */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  All Freelancers
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredFreelancers.length} freelancers found
                </div>
              </div>
              
              {/* Selected Filters */}
              {selectedSkills.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
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
              
              {filteredFreelancers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredFreelancers.map((freelancer) => (
                    <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-medium mb-2">No freelancers found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria to find more freelancers.
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

export default FreelancersPage;