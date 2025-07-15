
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap 
} from 'lucide-react';

const ProjectShowcase = () => {
  const showcaseProjects = [
    {
      id: 'fullstack-saas',
      title: 'Complete SaaS Application',
      description: 'Full-featured SaaS platform with authentication, payments, and dashboard',
      platforms: ['Lovable 2.0', 'Cursor', 'Windsurf'],
      difficulty: 'Advanced',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Auth0'],
      features: [
        'User authentication and authorization',
        'Subscription management with Stripe',
        'Real-time dashboard with analytics',
        'Multi-tenant architecture',
        'API rate limiting and security',
        'Automated deployment pipeline'
      ],
      liveDemo: 'https://demo-saas.example.com',
      sourceCode: 'https://github.com/example/saas-app',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Complete online store with inventory management and payment processing',
      platforms: ['Replit', 'Base44', 'Bolt'],
      difficulty: 'Intermediate',
      technologies: ['React', 'Express', 'MongoDB', 'PayPal', 'Cloudinary'],
      features: [
        'Product catalog and search',
        'Shopping cart and checkout',
        'Payment processing integration',
        'Order management system',
        'Inventory tracking',
        'Admin dashboard'
      ],
      liveDemo: 'https://demo-store.example.com',
      sourceCode: 'https://github.com/example/ecommerce',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'mobile-social-app',
      title: 'Social Media Mobile App',
      description: 'Cross-platform social media app with real-time messaging',
      platforms: ['Rork', 'Lovable 2.0', 'Replit'],
      difficulty: 'Advanced',
      technologies: ['React Native', 'Firebase', 'WebSocket', 'Push Notifications'],
      features: [
        'User profiles and authentication',
        'Real-time messaging and chat',
        'Photo and video sharing',
        'News feed with infinite scroll',
        'Push notifications',
        'Offline functionality'
      ],
      liveDemo: 'https://demo-social.example.com',
      sourceCode: 'https://github.com/example/social-app',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'enterprise-dashboard',
      title: 'Enterprise Analytics Dashboard',
      description: 'Complex data visualization and business intelligence platform',
      platforms: ['Windsurf', 'Cursor', 'Claude Code'],
      difficulty: 'Advanced',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Role-based access control',
        'API integrations',
        'Data export capabilities',
        'Advanced filtering and search'
      ],
      liveDemo: 'https://demo-dashboard.example.com',
      sourceCode: 'https://github.com/example/dashboard',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ai-chatbot-platform',
      title: 'AI Chatbot Platform',
      description: 'Intelligent customer service platform with natural language processing',
      platforms: ['Claude Code', 'Gemini CLI', 'Base44'],
      difficulty: 'Advanced',
      technologies: ['Node.js', 'OpenAI API', 'WebSocket', 'Redis', 'PostgreSQL'],
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Conversation history',
        'Admin dashboard',
        'Integration APIs',
        'Analytics and reporting'
      ],
      liveDemo: 'https://demo-chatbot.example.com',
      sourceCode: 'https://github.com/example/chatbot',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'ui-component-library',
      title: 'Design System & Component Library',
      description: 'Comprehensive UI component library with documentation',
      platforms: ['V0', 'Cursor', 'Bolt'],
      difficulty: 'Intermediate',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
      features: [
        'Reusable UI components',
        'Comprehensive documentation',
        'Dark/light theme support',
        'Accessibility compliance',
        'NPM package distribution',
        'Interactive playground'
      ],
      liveDemo: 'https://demo-components.example.com',
      sourceCode: 'https://github.com/example/components',
      image: '/api/placeholder/600/400'
    }
  ];

  const fullStackFeatures = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Frontend Excellence',
      description: 'Modern, responsive user interfaces with the latest frameworks',
      examples: ['React components', 'Vue.js apps', 'Angular dashboards', 'Svelte interfaces']
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: 'Backend Power',
      description: 'Robust server-side logic and API development',
      examples: ['RESTful APIs', 'GraphQL endpoints', 'Real-time features', 'Background jobs']
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Database Integration',
      description: 'Comprehensive data management and persistence',
      examples: ['PostgreSQL', 'MongoDB', 'Redis caching', 'Real-time sync']
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      examples: ['React Native', 'Progressive Web Apps', 'Native features', 'App store deployment']
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Security & Auth',
      description: 'Enterprise-grade security implementations',
      examples: ['User authentication', 'Role-based access', 'Data encryption', 'Compliance']
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Deployment & DevOps',
      description: 'Production-ready deployment solutions',
      examples: ['One-click deploy', 'CI/CD pipelines', 'Custom domains', 'Performance monitoring']
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4">Project Showcase</Badge>
        <h2 className="text-3xl font-bold mb-4">
          Full-Stack Applications
          <span className="hero-gradient bg-clip-text text-transparent block">
            Built with NoCode Platforms
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore real-world applications built using our academy platforms. Each project demonstrates 
          the complete full-stack capabilities available through AI-powered development.
        </p>
      </div>

      {/* Full-Stack Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullStackFeatures.map((feature, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {feature.icon}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.examples.map((example, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {example}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Showcase */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="web">Web Apps</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
          <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseProjects.map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <Badge variant="outline">{project.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Built with:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.platforms.map((platform, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseProjects.filter(p => !p.title.includes('Mobile')).map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseProjects.filter(p => p.title.includes('Mobile')).map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enterprise" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseProjects.filter(p => p.title.includes('Enterprise') || p.difficulty === 'Advanced').map((project) => (
              <Card key={project.id} className="glass-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectShowcase;
