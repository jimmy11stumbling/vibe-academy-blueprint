
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap, Code, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-6 text-sm font-medium">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Development Platform Analysis
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Master the Future of
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              No-Code Development
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive analysis and insights into the leading AI development platforms 
            shaping the software creation landscape. From Lovable 2.0 to Cursor IDE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group" asChild>
              <Link to="/platforms">
                <Zap className="h-4 w-4 mr-2" />
                Explore Platforms
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/analysis">
                <Code className="h-4 w-4 mr-2" />
                View Analysis
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/demo">
                <Rocket className="h-4 w-4 mr-2" />
                Try Demo
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">10+ Platforms</h3>
              <p className="text-muted-foreground">Comprehensive coverage of leading AI development tools</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">In-Depth Analysis</h3>
              <p className="text-muted-foreground">Strategic insights and technical deep-dives</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive Demos</h3>
              <p className="text-muted-foreground">Hands-on experience with platform capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
