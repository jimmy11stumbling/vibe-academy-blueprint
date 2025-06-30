
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, Star } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Active Learners' },
    { icon: Clock, value: '50+', label: 'Hours of Content' },
    { icon: Star, value: '4.9', label: 'Student Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge className="hero-gradient text-white px-4 py-2 text-sm font-medium">
            🚀 New: AI-Powered Code Assistant
          </Badge>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              Build Apps Without
              <span className="block hero-gradient bg-clip-text text-transparent">
                Writing Code
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Master no-code development with interactive lessons, real projects, and a supportive community. 
              Go from complete beginner to launching your first app in weeks, not years.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group glow-effect hero-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 hover:bg-card/50 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating elements */}
          <div className="absolute top-32 left-8 hidden lg:block">
            <div className="float-animation">
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
          <div className="absolute top-48 right-12 hidden lg:block">
            <div className="float-animation delay-1000">
              <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
