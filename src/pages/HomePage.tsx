import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedJobs from '../components/home/FeaturedJobs';
import TopFreelancers from '../components/home/TopFreelancers';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection userType="freelancer" />
        <CategoriesSection />
        <FeaturedJobs />
        <TopFreelancers />
        <HowItWorks />
        <TestimonialSection />
        <CTASection userType="freelancer" />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;