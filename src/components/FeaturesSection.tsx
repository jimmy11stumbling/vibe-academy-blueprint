
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Trophy, Rocket, BookOpen, MessageCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Learn from beginner to advanced with structured, hands-on courses covering all major no-code platforms.',
    },
    {
      icon: Rocket,
      title: 'Real Projects',
      description: 'Build actual applications that solve real problems. Add them to your portfolio and showcase your skills.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands of no-code builders. Get help, share ideas, and collaborate on exciting projects.',
    },
    {
      icon: Trophy,
      title: 'Certification',
      description: 'Earn recognized certificates upon course completion. Validate your skills to employers and clients.',
    },
    {
      icon: MessageCircle,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts. Weekly office hours and personalized feedback on your projects.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Experiment with cutting-edge no-code tools and techniques. Stay ahead of the curve.',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Master No-Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From complete beginner to professional builder, we provide all the tools and support you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
