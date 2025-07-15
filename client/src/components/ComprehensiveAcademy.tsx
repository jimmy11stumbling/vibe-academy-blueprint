
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Target, 
  CheckCircle,
  Clock,
  Star,
  Code,
  Zap,
  Rocket,
  Shield,
  Globe,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ComprehensiveAcademy = () => {
  const academyStats = {
    totalModules: 47,
    totalLessons: 186,
    totalProjects: 89,
    totalStudents: 156000,
    averageRating: 4.6,
    completionRate: 78,
    certificationsOffered: 15
  };

  const platformStats = [
    { name: 'Lovable 2.0', modules: 8, lessons: 24, projects: 12, students: 42000, rating: 4.8 },
    { name: 'Cursor', modules: 6, lessons: 18, projects: 8, students: 38000, rating: 4.9 },
    { name: 'Replit', modules: 7, lessons: 22, projects: 14, students: 35000, rating: 4.7 },
    { name: 'Windsurf', modules: 5, lessons: 15, projects: 7, students: 12000, rating: 4.8 },
    { name: 'Bolt', modules: 4, lessons: 12, projects: 6, students: 8000, rating: 4.6 },
    { name: 'Claude Code', modules: 3, lessons: 9, projects: 4, students: 5000, rating: 4.7 },
    { name: 'Gemini CLI', modules: 4, lessons: 11, projects: 5, students: 7000, rating: 4.5 },
    { name: 'Base44', modules: 5, lessons: 16, projects: 8, students: 4000, rating: 4.6 },
    { name: 'V0', modules: 3, lessons: 8, projects: 5, students: 3000, rating: 4.4 },
    { name: 'Rork', modules: 2, lessons: 6, projects: 3, students: 2000, rating: 4.2 }
  ];

  const learningPaths = [
    {
      id: 'complete-beginner',
      title: 'Complete Beginner to Full-Stack Developer',
      description: 'Start from zero and build complete applications',
      duration: '16 weeks',
      platforms: ['Lovable 2.0', 'Replit', 'Base44', 'V0'],
      difficulty: 'Beginner',
      projects: 8,
      certification: 'NoCode Full-Stack Developer'
    },
    {
      id: 'professional-ai-developer',
      title: 'Professional AI-Assisted Developer',
      description: 'Master AI tools for professional development',
      duration: '12 weeks',
      platforms: ['Cursor', 'Windsurf', 'Claude Code', 'Gemini CLI'],
      difficulty: 'Intermediate',
      projects: 6,
      certification: 'AI-Assisted Developer Professional'
    },
    {
      id: 'mobile-first-developer',
      title: 'Mobile-First Application Developer',
      description: 'Specialize in mobile and cross-platform development',
      duration: '10 weeks',
      platforms: ['Rork', 'Bolt', 'Lovable 2.0', 'Replit'],
      difficulty: 'Intermediate',
      projects: 5,
      certification: 'Mobile Development Specialist'
    },
    {
      id: 'enterprise-developer',
      title: 'Enterprise Application Developer',
      description: 'Build secure, scalable enterprise solutions',
      duration: '14 weeks',
      platforms: ['Windsurf', 'Claude Code', 'Cursor', 'Base44'],
      difficulty: 'Advanced',
      projects: 7,
      certification: 'Enterprise Developer Certified'
    }
  ];

  const fullStackCapabilities = [
    { category: 'Frontend', icon: <Globe className="h-4 w-4" />, coverage: 100 },
    { category: 'Backend', icon: <Code className="h-4 w-4" />, coverage: 95 },
    { category: 'Database', icon: <Shield className="h-4 w-4" />, coverage: 92 },
    { category: 'Mobile', icon: <Smartphone className="h-4 w-4" />, coverage: 88 },
    { category: 'Deployment', icon: <Rocket className="h-4 w-4" />, coverage: 98 },
    { category: 'Security', icon: <Shield className="h-4 w-4" />, coverage: 85 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge variant="outline" className="mb-4">Academy Overview</Badge>
        <h2 className="text-3xl font-bold mb-4">
          Complete NoCode Academy
          <span className="hero-gradient bg-clip-text text-transparent block">
            For Full-Stack Development
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Master every major AI-powered development platform and learn to build complete, 
          production-ready applications without traditional coding barriers.
        </p>
      </div>

      {/* Academy Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.totalModules}</div>
            <div className="text-xs text-muted-foreground">Modules</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.totalLessons}</div>
            <div className="text-xs text-muted-foreground">Lessons</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Rocket className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.totalProjects}</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.totalStudents.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Star className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.averageRating}</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.completionRate}%</div>
            <div className="text-xs text-muted-foreground">Completion</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{academyStats.certificationsOffered}</div>
            <div className="text-xs text-muted-foreground">Certificates</div>
          </CardContent>
        </Card>
      </div>

      {/* Full-Stack Capabilities */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Full-Stack Development Coverage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullStackCapabilities.map((capability, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {capability.icon}
                    <span className="font-medium">{capability.category}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{capability.coverage}%</span>
                </div>
                <Progress value={capability.coverage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Statistics */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Platform Coverage & Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformStats.map((platform, index) => (
              <Card key={index} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{platform.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{platform.rating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Modules:</span>
                      <span className="ml-1 font-medium">{platform.modules}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lessons:</span>
                      <span className="ml-1 font-medium">{platform.lessons}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="ml-1 font-medium">{platform.projects}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Students:</span>
                      <span className="ml-1 font-medium">{platform.students.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Comprehensive Learning Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">{path.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                    </div>
                    <Badge variant="outline">{path.difficulty}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-muted-foreground" />
                      <span>{path.projects} Projects</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Platforms:</div>
                    <div className="flex flex-wrap gap-2">
                      {path.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{path.certification}</span>
                    </div>
                    <Link to={`/academy/path/${path.id}`}>
                      <Button size="sm">Start Path</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="glass-card border-primary/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-4">Ready to Build Complete Applications?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join our comprehensive academy and master the art of full-stack development 
            across all major AI-powered platforms. Start building production-ready applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy">
              <Button size="lg" className="min-w-[200px]">
                Start Learning Now
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View Projects
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveAcademy;
