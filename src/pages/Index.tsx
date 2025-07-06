
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoursesSection from '@/components/CoursesSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
