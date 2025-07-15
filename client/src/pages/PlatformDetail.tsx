
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Star, Clock, Users, BookOpen, CheckCircle, Play, Trophy } from 'lucide-react';
import { getAllPlatformModules } from '@/components/PlatformModules';

const PlatformDetail = () => {
  const { platformName } = useParams();
  
  if (!platformName) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Platform Not Found</h2>
              <p className="text-muted-foreground mb-4">No platform specified.</p>
              <Link to="/platforms">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Platforms
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Decode the platform name from URL
  const decodedPlatformName = decodeURIComponent(platformName);
  
  // Get all platform modules
  const allPlatformModules = getAllPlatformModules();
  
  // Find the platform modules
  const platformModules = allPlatformModules[decodedPlatformName];
  
  // Platform information mapping
  const platformInfo: Record<string, any> = {
    'Lovable 2.0': {
      description: 'European startup revolutionizing full-stack development through chat-driven interfaces.',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      features: ['Chat-driven development', 'Native Supabase integration', 'One-click deployment', 'Visual editing'],
      students: 42000,
      rating: 4.8,
      difficulty: 'Beginner Friendly'
    },
    'Cursor': {
      description: 'AI-first IDE that understands your entire codebase for intelligent assistance.',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      features: ['Codebase-aware AI', 'Predictive editing', 'Agent mode', 'VS Code compatibility'],
      students: 38000,
      rating: 4.9,
      difficulty: 'Intermediate'
    },
    'Replit': {
      description: 'Collaborative coding platform with AI agent for rapid development.',
      icon: '🔥',
      color: 'from-orange-500 to-red-500',
      features: ['Zero-setup environment', 'Real-time collaboration', 'AI Agent', 'Built-in deployment'],
      students: 35000,
      rating: 4.7,
      difficulty: 'Beginner Friendly'
    },
    'Windsurf': {
      description: 'Enterprise-grade agentic code editor with advanced security features.',
      icon: '🏢',
      color: 'from-green-500 to-emerald-500',
      features: ['Cascade AI agent', 'Enterprise security', 'FedRAMP compliance', 'Multi-model support'],
      students: 12000,
      rating: 4.8,
      difficulty: 'Advanced'
    },
    'Bolt': {
      description: 'Full-stack development directly in your browser using WebContainer technology.',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      features: ['WebContainer technology', 'Browser-based Node.js', 'Real-time execution', 'No local setup'],
      students: 8000,
      rating: 4.6,
      difficulty: 'Intermediate'
    },
    'Claude Code': {
      description: 'Security-first CLI agent with granular permissions and enterprise features.',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500',
      features: ['Granular permissions', 'CLAUDE.md context', 'Security-first design', 'Custom slash commands'],
      students: 5000,
      rating: 4.7,
      difficulty: 'Advanced'
    },
    'Gemini CLI': {
      description: 'Google\'s open-source terminal agent with massive context windows.',
      icon: '💎',
      color: 'from-emerald-500 to-teal-500',
      features: ['Open source', 'Massive context windows', 'Web search integration', 'MCP protocol'],
      students: 7000,
      rating: 4.5,
      difficulty: 'Intermediate'
    },
    'Base44': {
      description: 'Comprehensive no-code platform with "Buttery Includes" philosophy.',
      icon: '🧱',
      color: 'from-rose-500 to-pink-500',
      features: ['All-in-one platform', 'Rapid prototyping', 'Built-in backend', 'Enterprise SSO'],
      students: 4000,
      rating: 4.6,
      difficulty: 'Beginner Friendly'
    },
    'V0': {
      description: 'Vercel\'s AI-powered UI component generator for React and Tailwind.',
      icon: '🎨',
      color: 'from-slate-500 to-gray-500',
      features: ['UI component generation', 'Prompt-to-UI', 'Image-to-code', 'Vercel integration'],
      students: 3000,
      rating: 4.4,
      difficulty: 'Intermediate'
    },
    'Rork': {
      description: 'Mobile-first development platform for creating native apps with React Native.',
      icon: '📱',
      color: 'from-violet-500 to-purple-500',
      features: ['Mobile-first', 'React Native', 'Cross-platform', 'App store deployment'],
      students: 2000,
      rating: 4.2,
      difficulty: 'Intermediate'
    }
  };

  const platform = platformInfo[decodedPlatformName];

  if (!platform || !platformModules) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Platform Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The platform "{decodedPlatformName}" doesn't exist or modules are not available yet.
              </p>
              <Link to="/platforms">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Platforms
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/platforms">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Platforms
          </Button>
        </Link>

        {/* Platform Header */}
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${platform.color} p-8 text-white mb-8`}>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{platform.icon}</div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{decodedPlatformName}</h1>
                <p className="text-lg opacity-90">{platform.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Students</span>
                </div>
                <div className="text-2xl font-bold">{platform.students.toLocaleString()}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">Rating</span>
                </div>
                <div className="text-2xl font-bold">{platform.rating}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">Modules</span>
                </div>
                <div className="text-2xl font-bold">{platformModules.length}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm">Level</span>
                </div>
                <div className="text-lg font-bold">{platform.difficulty}</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        </div>

        {/* Key Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platform.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Available Learning Modules</h2>
          
          <div className="grid gap-6">
            {platformModules.map((module, index) => (
              <Card key={module.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <Badge variant={module.difficultyLevel === 'beginner' ? 'secondary' : 
                                      module.difficultyLevel === 'intermediate' ? 'default' : 'destructive'}>
                          {module.difficultyLevel}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{module.totalDuration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{module.enrolledStudents.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{module.rating} rating</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>{module.tutorials.length} lessons</span>
                        </div>
                      </div>

                      {module.practicalProjects && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Practical Projects:</h4>
                          <div className="space-y-1">
                            {module.practicalProjects.slice(0, 2).map((project, projectIndex) => (
                              <div key={projectIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                                <span>{project}</span>
                              </div>
                            ))}
                            {module.practicalProjects.length > 2 && (
                              <span className="text-sm text-muted-foreground">
                                +{module.practicalProjects.length - 2} more projects
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold mb-1">{module.completionRate}%</div>
                        <div className="text-sm text-muted-foreground">Completion Rate</div>
                        <Progress value={module.completionRate} className="w-16 h-2 mt-2" />
                      </div>
                      
                      <Link to={`/academy/module/${module.id}`}>
                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Start Module
                        </Button>
                      </Link>
                      
                      {module.certificationAvailable && (
                        <Badge className="w-full mt-2 justify-center" variant="outline">
                          <Trophy className="h-3 w-3 mr-1" />
                          Certification
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDetail;
