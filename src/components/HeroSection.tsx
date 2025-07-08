
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Star, Users, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Students' },
    { icon: BookOpen, value: '200+', label: 'Courses' },
    { icon: Star, value: '4.9/5', label: 'Rating' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 Join 25,000+ No-Code Builders
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Build Apps
              <span className="hero-gradient bg-clip-text text-transparent block">
                Without Code
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transform your ideas into powerful applications using the latest no-code tools. 
              Learn from experts, build real projects, and launch your dream startup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90 group px-8">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group px-8">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative glass-card rounded-2xl p-8 border border-border/50">
              {/* Mock App Interface */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-foreground/10 rounded-full w-3/4"></div>
                  <div className="h-4 bg-foreground/10 rounded-full w-1/2"></div>
                  <div className="h-8 bg-primary/20 rounded-lg w-32 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">No Code</span>
                  </div>
                </div>
              </div>

              {/* Tool Icons */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Bubble', color: 'bg-blue-100 text-blue-600' },
                  { name: 'Webflow', color: 'bg-purple-100 text-purple-600' },
                  { name: 'Airtable', color: 'bg-orange-100 text-orange-600' },
                  { name: 'Zapier', color: 'bg-yellow-100 text-yellow-600' },
                  { name: 'Notion', color: 'bg-gray-100 text-gray-600' },
                  { name: 'Glide', color: 'bg-green-100 text-green-600' }
                ].map((tool, index) => (
                  <div key={index} className={`${tool.color} dark:bg-opacity-20 rounded-lg p-3 text-center`}>
                    <div className="text-xs font-medium">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 border border-border/50 animate-bounce">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium">Live App</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-3 border border-border/50 animate-pulse">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by developers from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Google</div>
            <div className="text-lg font-semibold">Microsoft</div>
            <div className="text-lg font-semibold">Netflix</div>
            <div className="text-lg font-semibold">Spotify</div>
            <div className="text-lg font-semibold">Uber</div>
            <div className="text-lg font-semibold">Airbnb</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
