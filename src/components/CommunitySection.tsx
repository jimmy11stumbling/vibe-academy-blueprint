
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Star, ArrowRight } from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: '10,000+', label: 'Active Members' },
    { icon: MessageSquare, value: '50K+', label: 'Messages Daily' },
    { icon: Star, value: '500+', label: 'Projects Shared' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Career Switcher',
      image: '👩‍💻',
      content: 'Went from zero coding experience to building my first SaaS in 3 months. The community support was incredible!',
      project: 'TaskFlow App',
    },
    {
      name: 'Marcus Johnson',
      role: 'Entrepreneur',
      image: '👨‍🚀',
      content: 'Built my startup MVP without hiring developers. Saved $50K and launched 6 months ahead of schedule.',
      project: 'FitTracker Pro',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Designer',
      image: '🎨',
      content: 'As a designer, I always struggled with development. Now I can bring my ideas to life independently.',
      project: 'Portfolio Platform',
    },
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Join Our Community
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Learn Faster with
            <span className="block hero-gradient bg-clip-text text-transparent">
              10,000+ Builders
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Connect with fellow learners, share your projects, and get help from experienced developers 
            in our thriving community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-bold text-center">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <Badge variant="outline" className="text-xs">
                    Built: {testimonial.project}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="group hero-gradient text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-200"
          >
            Join Our Community
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free forever • No spam • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
