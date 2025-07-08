
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, Users, Trophy } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Lifetime access to all courses',
    'Live Q&A sessions with experts',
    'Private community access',
    'Project portfolio reviews',
    'Job placement assistance',
    'Industry-recognized certificates'
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Enrolled' },
    { icon: Trophy, value: '95%', label: 'Success Rate' },
    { icon: Zap, value: '3 Months', label: 'Average Completion' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card border-border/50 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    <Zap className="h-4 w-4" />
                    Limited Time Offer
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Ready to Build Your
                    <span className="hero-gradient bg-clip-text text-transparent block">
                      No-Code Future?
                    </span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    Join thousands of students who have already transformed their careers. 
                    Start building production-ready applications today.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">What you'll get:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button size="lg" className="hero-gradient text-white hover:opacity-90 group flex-1">
                      Start Learning Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1">
                      View Pricing
                    </Button>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      30-day money-back guarantee • No hidden fees • Cancel anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl overflow-hidden border border-border/50">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                      alt="Students collaborating on no-code projects"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Success Badge */}
                  <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Success Stories
                    </div>
                    <div className="text-xs text-muted-foreground">Join 10,000+ builders</div>
                  </div>
                  
                  {/* Floating Certificate Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-medium">Certified</div>
                    <div className="text-xs text-muted-foreground">Industry Recognized</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
