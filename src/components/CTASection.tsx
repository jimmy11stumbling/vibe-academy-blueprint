
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Users, BookOpen, Award } from 'lucide-react';

const CTASection = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Students' },
    { icon: BookOpen, value: '200+', label: 'Courses' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
    { icon: Award, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Ready to Start?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the No-Code
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Revolution Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your career and build the applications you've always dreamed of. 
            Start with our comprehensive no-code courses and join a community of makers, 
            builders, and innovators who are shaping the future of software development.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 glass-card rounded-lg border border-border/50">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="hero-gradient text-white hover:opacity-90 group px-8">
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group px-8">
            Explore Free Courses
            <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              30-day money-back guarantee • No questions asked
            </span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4">Join students from these amazing companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Stripe</div>
              <div className="text-lg font-semibold">Airbnb</div>
              <div className="text-lg font-semibold">Shopify</div>
              <div className="text-lg font-semibold">Notion</div>
              <div className="text-lg font-semibold">Figma</div>
              <div className="text-lg font-semibold">Slack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
