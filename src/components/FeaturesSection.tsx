
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Users, Trophy, Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Hands-On Learning',
      description: 'Build real projects while learning. Every course includes practical exercises and real-world applications.',
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join a supportive community of no-code builders. Get help, share projects, and network with peers.',
    },
    {
      icon: Trophy,
      title: 'Industry Certification',
      description: 'Earn recognized certificates that prove your no-code skills to employers and clients.',
    },
    {
      icon: Rocket,
      title: 'Career Support',
      description: 'Get guidance on freelancing, job hunting, and building your no-code development career.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Vibe Coders?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a successful no-code developer, 
            from beginner tutorials to advanced masterclasses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
