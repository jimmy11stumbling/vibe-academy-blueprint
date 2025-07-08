
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Users, 
  BookOpen, 
  Award, 
  MessageSquare, 
  Rocket,
  Clock,
  Target,
  Globe
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Hands-on projects and real-world applications that keep you engaged throughout your learning journey.',
      badge: 'Popular',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in no-code development and business growth.',
      badge: 'Verified',
      color: 'text-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'From beginner to advanced levels, our structured curriculum covers all major no-code platforms.',
      badge: 'Complete',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: 'Industry Certificates',
      description: 'Earn recognized certificates that boost your credibility and career prospects in the tech industry.',
      badge: 'Certified',
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Community Support',
      description: 'Join a vibrant community of learners and get help from peers and mentors whenever you need it.',
      badge: 'Active',
      color: 'text-orange-500'
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track your career with job placement assistance and portfolio development guidance.',
      badge: 'Premium',
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with lifetime access to all course materials and updates.',
      badge: 'Flexible',
      color: 'text-indigo-500'
    },
    {
      icon: Target,
      title: 'Project-Based',
      description: 'Build real applications that you can add to your portfolio and showcase to potential employers.',
      badge: 'Practical',
      color: 'text-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access courses from anywhere in the world with our mobile-friendly platform and offline downloads.',
      badge: 'Worldwide',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Vibe Coders?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in the no-code world, 
            from beginner-friendly tutorials to advanced business applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-muted/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Zap className="h-4 w-4" />
            Join 10,000+ Happy Students
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your No-Code Journey?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive no-code courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
