
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20">
            <span className="text-sm font-medium text-primary">🚀 No-Code Revolution</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Master No-Code Development
              <span className="block hero-gradient bg-clip-text text-transparent">
                Build Without Limits
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators learning to build powerful applications without writing code. 
              From complete beginner to professional no-code developer.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="hero-gradient text-white hover:opacity-90 px-8 py-6 text-lg font-semibold"
            >
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-border/50 hover:bg-accent/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient bg-clip-text text-transparent">10k+</div>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient bg-clip-text text-transparent">50+</div>
              <p className="text-muted-foreground">Expert Courses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient bg-clip-text text-transparent">95%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
