
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, BookOpen, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build Apps Without
              <span className="block hero-gradient bg-clip-text text-transparent">
                Writing Code
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Master no-code development with hands-on courses, real projects, and a supportive community of builders.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8 py-6 text-lg">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-muted-foreground">Courses Available</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
