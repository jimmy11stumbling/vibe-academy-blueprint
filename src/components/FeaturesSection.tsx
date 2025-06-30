
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Star, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Interactive Coding',
      description: 'Learn by doing with real-time code editor and instant feedback',
      badge: 'Core',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Get help from mentors and fellow learners 24/7',
      badge: 'Social',
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Star,
      title: 'Project Portfolio',
      description: 'Build real apps you can showcase to employers',
      badge: 'Career',
      color: 'bg-success/10 text-success',
    },
    {
      icon: Clock,
      title: 'Learn at Your Pace',
      description: 'Self-paced courses that fit your schedule',
      badge: 'Flexible',
      color: 'bg-warning/10 text-warning',
    },
    {
      icon: CheckCircle,
      title: 'Certification',
      description: 'Earn verified certificates upon course completion',
      badge: 'Achievement',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: ArrowRight,
      title: 'Career Support',
      description: 'Job placement assistance and interview prep',
      badge: 'Premium',
      color: 'bg-accent/10 text-accent',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Vibe Coders
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="block hero-gradient bg-clip-text text-transparent">
              Launch Your Career
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our comprehensive learning platform combines the best of interactive education, 
            community support, and real-world project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
