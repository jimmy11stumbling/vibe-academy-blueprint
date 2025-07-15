
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Shield, 
  Zap, 
  Code, 
  Layers,
  Cloud,
  Users,
  Settings,
  CheckCircle
} from 'lucide-react';

const FullStackCapabilities = () => {
  const fullStackFeatures = [
    {
      category: 'Frontend Development',
      icon: <Globe className="h-5 w-5" />,
      description: 'Complete user interface and user experience development',
      capabilities: [
        'React, Vue, Angular component generation',
        'Responsive design and mobile optimization',
        'Modern CSS frameworks (Tailwind, Bootstrap)',
        'Interactive animations and transitions',
        'Progressive Web App (PWA) features',
        'Real-time user interface updates'
      ]
    },
    {
      category: 'Backend Development',
      icon: <Server className="h-5 w-5" />,
      description: 'Server-side logic and API development',
      capabilities: [
        'RESTful API creation and management',
        'GraphQL endpoint development',
        'Authentication and authorization systems',
        'Real-time communication (WebSockets)',
        'File upload and processing',
        'Background job processing'
      ]
    },
    {
      category: 'Database Integration',
      icon: <Database className="h-5 w-5" />,
      description: 'Data storage and management solutions',
      capabilities: [
        'SQL database design and optimization',
        'NoSQL document and key-value stores',
        'Real-time database synchronization',
        'Data migration and backup systems',
        'Advanced querying and indexing',
        'Database security and encryption'
      ]
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone className="h-5 w-5" />,
      description: 'Cross-platform mobile application development',
      capabilities: [
        'React Native app generation',
        'Native iOS and Android features',
        'Push notification systems',
        'Offline functionality and caching',
        'Device hardware integration',
        'App store deployment assistance'
      ]
    },
    {
      category: 'DevOps & Deployment',
      icon: <Cloud className="h-5 w-5" />,
      description: 'Infrastructure and deployment automation',
      capabilities: [
        'One-click deployment to production',
        'CI/CD pipeline automation',
        'Environment variable management',
        'SSL certificate management',
        'Domain configuration and DNS',
        'Performance monitoring and scaling'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="h-5 w-5" />,
      description: 'Enterprise-grade security implementations',
      capabilities: [
        'User authentication and authorization',
        'Data encryption and secure storage',
        'GDPR and privacy compliance',
        'Security scanning and vulnerability assessment',
        'Enterprise SSO integration',
        'Audit trails and logging'
      ]
    }
  ];

  const platformCapabilities = {
    'Lovable 2.0': {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      backend: ['Node.js', 'Express', 'RESTful APIs', 'Real-time Features'],
      database: ['Supabase', 'PostgreSQL', 'Real-time Sync', 'Row Level Security'],
      mobile: ['Progressive Web App', 'Mobile Responsive', 'Touch Optimized'],
      deployment: ['One-click Deploy', 'Custom Domains', 'SSL Certificates'],
      security: ['Authentication', 'Authorization', 'Security Scanning']
    },
    'Cursor': {
      frontend: ['React', 'Vue', 'Angular', 'Svelte', 'TypeScript'],
      backend: ['Node.js', 'Python', 'Go', 'Rust', 'Java'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
      mobile: ['React Native', 'Flutter', 'Ionic'],
      deployment: ['Docker', 'Kubernetes', 'AWS', 'Vercel'],
      security: ['OAuth', 'JWT', 'HTTPS', 'Data Encryption']
    },
    'Replit': {
      frontend: ['React', 'HTML/CSS', 'JavaScript', 'TypeScript'],
      backend: ['Node.js', 'Python', 'Go', 'Java', 'C++'],
      database: ['ReplDB', 'PostgreSQL', 'MongoDB', 'SQLite'],
      mobile: ['React Native', 'Mobile Web', 'Progressive Web Apps'],
      deployment: ['Replit Hosting', 'Custom Domains', 'SSL'],
      security: ['Built-in Auth', 'Environment Variables', 'Private Repos']
    },
    'Windsurf': {
      frontend: ['React', 'Vue', 'Angular', 'TypeScript', 'Modern CSS'],
      backend: ['Node.js', 'Python', '.NET', 'Java', 'Go'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'Enterprise DBs'],
      mobile: ['React Native', 'Flutter', 'Xamarin'],
      deployment: ['On-premise', 'Cloud', 'Enterprise Solutions'],
      security: ['FedRAMP', 'SOC 2', 'Enterprise SSO', 'Compliance']
    },
    'Bolt': {
      frontend: ['React', 'Vue', 'Svelte', 'TypeScript', 'Modern CSS'],
      backend: ['Node.js', 'Express', 'Fastify', 'WebSockets'],
      database: ['SQLite', 'PostgreSQL', 'In-memory Stores'],
      mobile: ['Progressive Web Apps', 'Mobile Responsive'],
      deployment: ['StackBlitz', 'Vercel', 'Netlify', 'GitHub Pages'],
      security: ['Client-side Security', 'HTTPS', 'Content Security Policy']
    },
    'Claude Code': {
      frontend: ['React', 'Vue', 'Angular', 'TypeScript', 'All Modern Frameworks'],
      backend: ['Node.js', 'Python', 'Go', 'Rust', 'Java', 'C++'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'All Major DBs'],
      mobile: ['React Native', 'Flutter', 'Native Development'],
      deployment: ['AWS', 'Google Cloud', 'Azure', 'On-premise'],
      security: ['Enterprise Security', 'Granular Permissions', 'Audit Trails']
    },
    'Gemini CLI': {
      frontend: ['React', 'Vue', 'Angular', 'Web Components'],
      backend: ['Node.js', 'Python', 'Java', 'Go'],
      database: ['PostgreSQL', 'MongoDB', 'Firebase', 'Cloud Databases'],
      mobile: ['React Native', 'Flutter', 'Progressive Web Apps'],
      deployment: ['Google Cloud', 'Firebase', 'Multi-cloud'],
      security: ['Google Identity', 'OAuth 2.0', 'Cloud Security']
    },
    'Base44': {
      frontend: ['React', 'TypeScript', 'Modern CSS', 'Responsive Design'],
      backend: ['Built-in Backend', 'APIs', 'Business Logic'],
      database: ['Built-in Database', 'Data Management', 'Backup Systems'],
      mobile: ['Mobile Responsive', 'Progressive Web Apps'],
      deployment: ['Instant Deployment', 'Custom Domains', 'Wix Integration'],
      security: ['Enterprise SSO', 'User Management', 'Data Protection']
    },
    'V0': {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Modern Components'],
      backend: ['Requires separate backend integration'],
      database: ['Requires separate database integration'],
      mobile: ['Responsive Components', 'Mobile-first Design'],
      deployment: ['Vercel', 'Next.js', 'Component Libraries'],
      security: ['Component-level Security', 'Type Safety']
    },
    'Rork': {
      frontend: ['React Native', 'Mobile UI Components', 'Native Navigation'],
      backend: ['Node.js', 'Express', 'Mobile APIs'],
      database: ['SQLite', 'Realm', 'Firebase', 'Remote APIs'],
      mobile: ['iOS', 'Android', 'Cross-platform', 'Native Features'],
      deployment: ['App Store', 'Google Play', 'Enterprise Distribution'],
      security: ['Mobile Security', 'Device Authentication', 'Data Encryption']
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4">Full-Stack Development</Badge>
        <h2 className="text-3xl font-bold mb-4">
          Every Platform Builds
          <span className="hero-gradient bg-clip-text text-transparent block">
            Complete Applications
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          All these platforms share one fundamental capability: they enable you to build complete, 
          production-ready full-stack applications without traditional coding barriers.
        </p>
      </div>

      {/* Full-Stack Capabilities Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullStackFeatures.map((feature, index) => (
          <Card key={index} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {feature.icon}
                {feature.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Platform Comparison */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Platform-Specific Full-Stack Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Lovable 2.0" className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
              {Object.keys(platformCapabilities).map(platform => (
                <TabsTrigger key={platform} value={platform} className="text-xs">
                  {platform.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(platformCapabilities).map(([platform, capabilities]) => (
              <TabsContent key={platform} value={platform} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(capabilities).map(([category, items]) => (
                    <div key={category} className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        {category === 'frontend' && <Globe className="h-4 w-4" />}
                        {category === 'backend' && <Server className="h-4 w-4" />}
                        {category === 'database' && <Database className="h-4 w-4" />}
                        {category === 'mobile' && <Smartphone className="h-4 w-4" />}
                        {category === 'deployment' && <Cloud className="h-4 w-4" />}
                        {category === 'security' && <Shield className="h-4 w-4" />}
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Key Insight */}
      <Card className="glass-card border-primary/20">
        <CardContent className="p-8 text-center">
          <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-4">The Universal Truth</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Every single platform in our academy enables you to build complete, production-ready 
            full-stack applications. Whether you're a beginner or an expert, these tools democratize 
            software development by handling the complexity while you focus on your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm">Frontend ✓</Badge>
            <Badge variant="outline" className="text-sm">Backend ✓</Badge>
            <Badge variant="outline" className="text-sm">Database ✓</Badge>
            <Badge variant="outline" className="text-sm">Mobile ✓</Badge>
            <Badge variant="outline" className="text-sm">Deployment ✓</Badge>
            <Badge variant="outline" className="text-sm">Security ✓</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FullStackCapabilities;
