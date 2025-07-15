import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoursesSection from '@/components/CoursesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CommunitySection from '@/components/CommunitySection';
import NewsletterSection from '@/components/NewsletterSection';
import CTASection from '@/components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <CommunitySection />
      <CTASection />
      <NewsletterSection />
    </div>
  );
};

export default Home;