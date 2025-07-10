
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="mb-6">
          <Sparkles className="h-3 w-3 mr-1" />
          Ready to Get Started?
        </Badge>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Choose Your Perfect
          <span className="hero-gradient bg-clip-text text-transparent block mt-2">
            Development Platform
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't waste time evaluating platforms. Use our comprehensive analysis 
          and expert insights to make the right choice for your next project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Platform Matching</h3>
            <p className="text-muted-foreground mb-4">
              Answer a few questions and get personalized platform recommendations 
              based on your project requirements.
            </p>
            <Button className="w-full group" asChild>
              <Link to="/demo">
                <Zap className="h-4 w-4 mr-2" />
                Try Platform Matcher
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Analysis Report</h3>
            <p className="text-muted-foreground mb-4">
              Download our comprehensive 50-page analysis report covering all 
              10 platforms with detailed comparisons.
            </p>
            <Button variant="outline" className="w-full group" asChild>
              <Link to="/analysis">
                <Download className="h-4 w-4 mr-2" />
                Download Report
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group" asChild>
            <Link to="/platforms">
              <Sparkles className="h-4 w-4 mr-2" />
              Explore All Platforms
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" asChild>
            <Link to="/resources">
              <BookOpen className="h-4 w-4 mr-2" />
              Browse Resources
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Updated Weekly</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>10+ Platforms Covered</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>50+ Hours of Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
