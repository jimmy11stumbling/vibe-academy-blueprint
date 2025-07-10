
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TutorialSystem from '@/components/TutorialSystem';
import { getAllPlatformModules } from '@/components/PlatformModules';
import { 
  ArrowLeft,
  Star,
  Users,
  Clock,
  Award,
  BookOpen,
  Code,
  Terminal,
  Zap,
  Shield,
  Globe,
  Rocket,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const platformData = {
  'Lovable 2.0': {
    overview: 'European AI startup revolutionizing full-stack development through chat-driven interfaces',
    keyFeatures: [
      'Chat-driven full-stack development',
      'Native Supabase integration',
      'Visual editing capabilities',
      'Multiplayer workspaces',
      'One-click deployment',
      'Security scanning',
      'Figma integration'
    ],
    strengths: [
      'Fastest time-to-market for MVPs',
      'No coding experience required',
      'Powerful backend integration',
      'Growing European ecosystem'
    ],
    limitations: [
      'Pricing can be expensive for large projects',
      'Recent stability issues with 2.0 launch',
      'Limited to web applications'
    ],
    pricing: {
      free: 'Limited daily credits',
      pro: '$25/month',
      teams: '$30/user/month',
      enterprise: 'Custom pricing'
    },
    marketPosition: 'Leading no-code platform for rapid full-stack development'
  },
  'Cursor': {
    overview: 'AI-first IDE built on VS Code, trusted by developers at major tech companies',
    keyFeatures: [
      'Codebase-aware AI chat',
      'Predictive editing',
      'Agent mode for complex tasks',
      'VS Code compatibility',
      'Enterprise security',
      'Privacy mode'
    ],
    strengths: [
      'Familiar VS Code interface',
      'Powerful AI integration',
      'Professional developer focus',
      'Strong funding and backing'
    ],
    limitations: [
      'Learning curve for AI features',
      'Can be overwhelming for beginners',
      'Subscription required for full features'
    ],
    pricing: {
      pro: '$20/month',
      enterprise: 'Custom pricing',
      api: 'Bring your own key option'
    },
    marketPosition: 'Leading AI-first IDE for professional developers'
  },
  'Replit': {
    overview: 'Collaborative browser-based IDE with 40M+ users and zero-setup development',
    keyFeatures: [
      'Real-time collaboration',
      'Zero-setup environment',
      'Built-in database (ReplDB)',
      'Authentication system',
      'AI agent assistance',
      'Mobile development'
    ],
    strengths: [
      'Massive community',
      'Perfect for education',
      'True collaborative coding',
      'Multi-language support'
    ],
    limitations: [
      'Performance can be slower than local development',
      'Limited offline capabilities',
      'Pricing for teams can add up'
    ],
    pricing: {
      starter: 'Free tier available',
      core: '$20/month',
      teams: '$35/user/month'
    },
    marketPosition: 'Dominant collaborative coding platform with educational focus'
  },
  'Windsurf': {
    overview: 'Enterprise-grade agentic code editor with FedRAMP certification and Cascade AI',
    keyFeatures: [
      'Cascade AI agent',
      'Multi-model support',
      'FedRAMP certification',
      'SOC 2 compliance',
      'On-premise deployment',
      'MCP support'
    ],
    strengths: [
      'Enterprise security focus',
      'Powerful agentic capabilities',
      'Government compliance',
      'Multi-model flexibility'
    ],
    limitations: [
      'Higher learning curve',
      'More expensive than alternatives',
      'Overkill for simple projects'
    ],
    pricing: {
      free: '25 credits/month',
      pro: '$15/month',
      teams: '$30/month',
      enterprise: '$60+/user/month'
    },
    marketPosition: 'Premium enterprise AI coding solution'
  },
  'Bolt': {
    overview: 'Revolutionary in-browser full-stack development using WebContainer technology',
    keyFeatures: [
      'WebContainer technology',
      'Full-stack browser development',
      'Real-time code execution',
      'Open source core',
      'GitHub integration',
      'Code export capabilities'
    ],
    strengths: [
      'Unique WebContainer technology',
      'True full-stack in browser',
      'Open source foundation',
      'No local setup required'
    ],
    limitations: [
      'Limited to JavaScript ecosystem',
      'Token-based pricing can be unpredictable',
      'Browser performance constraints'
    ],
    pricing: {
      free: '150K tokens/day',
      pro: '$20/month',
      teams: '$30/member/month'
    },
    marketPosition: 'Innovative browser-based full-stack development platform'
  }
};

const PlatformDetail = () => {
  const { platformName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const decodedPlatformName = decodeURIComponent(platformName || '');
  const allModules = getAllPlatformModules();
  const platformModules = allModules[decodedPlatformName as keyof typeof allModules] || [];
  const platform = platformData[decodedPlatformName as keyof typeof platformData];

  if (!platform) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Platform Not Found</h1>
          <Button onClick={() => navigate('/platforms')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Platforms
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/platforms')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Platforms
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {decodedPlatformName}
              <span className="hero-gradient bg-clip-text text-transparent block mt-2">
                Academy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {platform.overview}
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Platform Overview</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials & Courses</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">
                    {platformModules.reduce((sum, module) => sum + module.enrolledStudents, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Students Enrolled</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{platformModules.length}</div>
                  <div className="text-sm text-muted-foreground">Learning Modules</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">
                    {platformModules.reduce((sum, module) => 
                      sum + parseInt(module.totalDuration.split(' ')[0]), 0
                    )}h
                  </div>
                  <div className="text-sm text-muted-foreground">Total Content</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">
                    {platformModules.filter(m => m.certificationAvailable).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
            </div>

            {/* Platform Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Strengths & Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        </div>
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Pricing Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(platform.pricing).map(([tier, price]) => (
                      <div key={tier} className="flex justify-between items-center">
                        <span className="capitalize font-medium">{tier}:</span>
                        <Badge variant="outline">{price}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Market Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{platform.marketPosition}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials">
            <TutorialSystem platform={decodedPlatformName} modules={platformModules} />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Hands-On Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Apply your knowledge with real-world projects designed to showcase {decodedPlatformName} capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformModules.map((module) => 
                module.practicalProjects.map((project, index) => (
                  <Card key={`${module.id}-${index}`} className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{project}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {module.difficultyLevel}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Part of the {module.title} module
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Start Project</Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="certification" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Professional Certification</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Earn industry-recognized certifications that validate your expertise in {decodedPlatformName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platformModules
                .filter(module => module.certificationAvailable)
                .map((module) => (
                  <Card key={module.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            {module.title} Certificate
                          </CardTitle>
                          <p className="text-muted-foreground mt-2">{module.description}</p>
                        </div>
                        <Badge variant="outline" className="bg-primary/10">
                          Certificate
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <div className="font-medium">{module.totalDuration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Level:</span>
                          <div className="font-medium capitalize">{module.difficultyLevel}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Projects:</span>
                          <div className="font-medium">{module.practicalProjects.length}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rating:</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{module.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Certification Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Complete all {module.tutorials.length} tutorials</li>
                          <li>• Finish {module.practicalProjects.length} practical projects</li>
                          <li>• Pass the final assessment (80% minimum)</li>
                          <li>• Submit a capstone project</li>
                        </ul>
                      </div>

                      <Button className="w-full">
                        Start Certification Path
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlatformDetail;
