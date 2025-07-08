
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Code, 
  Palette, 
  Database, 
  Shield, 
  Rocket,
  Users,
  BookOpen,
  Target,
  Globe,
  Heart,
  Award
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Build applications 10x faster with our no-code platform and drag-and-drop interface.',
      badge: 'Speed',
      color: 'text-yellow-600'
    },
    {
      icon: Code,
      title: 'No Coding Required',
      description: 'Create powerful applications without writing a single line of code. Perfect for beginners.',
      badge: 'Beginner Friendly',
      color: 'text-blue-600'
    },
    {
      icon: Palette,
      title: 'Beautiful Design System',
      description: 'Access to professionally designed templates and components for stunning applications.',
      badge: 'Design',
      color: 'text-purple-600'
    },
    {
      icon: Database,
      title: 'Powerful Database Integration',
      description: 'Connect to multiple databases and APIs with our visual database designer.',
      badge: 'Backend',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security features, authentication, and compliance tools for enterprise use.',
      badge: 'Security',
      color: 'text-red-600'
    },
    {
      icon: Rocket,
      title: 'One-Click Deployment',
      description: 'Deploy your applications to the cloud with a single click. No DevOps knowledge required.',
      badge: 'Deployment',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Collaborative Development',
      description: 'Work together with your team in real-time on the same project.',
      badge: 'Teamwork',
      color: 'text-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Access to tutorials, documentation, and community support.',
      badge: 'Learning',
      color: 'text-pink-600'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Courses',
      description: 'Structured learning paths designed to achieve specific development goals.',
      badge: 'Structured',
      color: 'text-cyan-600'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join thousands of developers worldwide in our supportive community.',
      badge: 'Community',
      color: 'text-emerald-600'
    },
    {
      icon: Heart,
      title: 'Passion for Teaching',
      description: 'Our instructors are passionate about sharing knowledge and helping you succeed.',
      badge: 'Passion',
      color: 'text-rose-600'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Get certificates and credentials recognized by top tech companies.',
      badge: 'Certified',
      color: 'text-amber-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Build
            <span className="hero-gradient bg-clip-text text-transparent"> Amazing Apps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and support 
            you need to create professional applications without coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Templates Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Apps Created</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
