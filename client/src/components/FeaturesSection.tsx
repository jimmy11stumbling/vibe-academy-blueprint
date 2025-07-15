
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Code2, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Layers,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Deep insights into how AI transforms development workflows across different platforms.',
      category: 'Intelligence'
    },
    {
      icon: Code2,
      title: 'Platform Comparison',
      description: 'Side-by-side analysis of features, pricing, and capabilities across 10+ platforms.',
      category: 'Analysis'
    },
    {
      icon: Zap,
      title: 'Performance Metrics',
      description: 'Real-world performance data and user satisfaction ratings for informed decisions.',
      category: 'Performance'
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Enterprise-grade security analysis including compliance and data protection.',
      category: 'Security'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'User reviews, community feedback, and developer testimonials from each platform.',
      category: 'Community'
    },
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Latest trends in no-code development and future predictions for the industry.',
      category: 'Trends'
    },
    {
      icon: Layers,
      title: 'Architecture Deep-Dive',
      description: 'Technical architecture analysis and implementation patterns for each platform.',
      category: 'Technical'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Focus on web application development capabilities and deployment options.',
      category: 'Web'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Mobile app development features and cross-platform compatibility analysis.',
      category: 'Mobile'
    },
    {
      icon: Database,
      title: 'Backend Integration',
      description: 'Database connectivity, API integrations, and backend service capabilities.',
      category: 'Backend'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Intelligence: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      Analysis: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      Performance: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      Security: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      Community: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      Trends: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
      Technical: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
      Web: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
      Mobile: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
      Backend: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[category as keyof typeof colors] || colors.Technical;
  };

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Platform
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Analysis & Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to understand and choose the right AI development platform 
            for your projects and organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass-card hover:border-primary/20 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className={getCategoryColor(feature.category)}>
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
