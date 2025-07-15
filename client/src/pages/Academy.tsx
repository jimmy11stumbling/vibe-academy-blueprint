import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play,
  CheckCircle,
  Lock,
  Target,
  Award,
  TrendingUp,
  Code,
  Zap
} from 'lucide-react';
import { completeAcademyModules, learningPaths } from '@/data/completeAcademyData';
import PlatformModules from '@/components/PlatformModules';
import LearningPathBuilder from '@/components/platform/LearningPathBuilder';
import PlatformOverview from '@/components/platform/PlatformOverview';
import LearningDashboard from '@/components/LearningDashboard';
import ProgressTracker from '@/components/ProgressTracker';
import CertificationSystem from '@/components/CertificationSystem';
import AssessmentSystem from '@/components/AssessmentSystem';
import InteractiveLearning from '@/components/InteractiveLearning';
import { Link } from 'react-router-dom';

const Academy = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: '🌐' },
    { id: 'Lovable 2.0', name: 'Lovable 2.0', icon: '🚀' },
    { id: 'Cursor', name: 'Cursor IDE', icon: '🎯' },
    { id: 'Replit', name: 'Replit', icon: '🔄' },
    { id: 'Windsurf', name: 'Windsurf', icon: '🏢' },
    { id: 'Bolt', name: 'Bolt', icon: '⚡' },
    { id: 'Claude Code', name: 'Claude Code', icon: '🤖' },
    { id: 'Gemini CLI', name: 'Gemini CLI', icon: '💎' },
    { id: 'Base44', name: 'Base44', icon: '🧱' },
    { id: 'V0', name: 'V0', icon: '🎨' },
    { id: 'Rork', name: 'Rork', icon: '📱' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const getAllModules = () => {
    const allModules = [];
    for (const platform in completeAcademyModules) {
      allModules.push(...completeAcademyModules[platform]);
    }
    return allModules;
  };

  const filteredModules = getAllModules().filter(module => {
    const matchesPlatform = selectedPlatform === 'all' || module.platform === selectedPlatform;
    const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty === selectedDifficulty;
    return matchesPlatform && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const ModuleCard = ({ module }: { module: any }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{module.icon}</div>
            <div>
              <CardTitle className="text-lg mb-1">{module.title}</CardTitle>
              <Badge variant="outline" className="text-xs">
                {module.platform}
              </Badge>
            </div>
          </div>
          <Badge className={getDifficultyColor(module.difficulty)}>
            {module.difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {module.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {module.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {module.lessons.length} lessons
          </span>
          <span className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            {module.learningObjectives.length} objectives
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>0/{module.lessons.length}</span>
          </div>
          <Progress value={0} className="h-2" />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Learning Objectives:</h4>
          <ul className="space-y-1">
            {module.learningObjectives.slice(0, 3).map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                {objective}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <Link to={`/academy/module/${module.id}`} className="flex-1">
            <Button className="w-full hero-gradient text-white">
              <Play className="h-4 w-4 mr-2" />
              Start Learning
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const LearningPathCard = ({ path }: { path: any }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2">{path.title}</CardTitle>
            <Badge className={getDifficultyColor(path.difficulty)}>
              {path.difficulty}
            </Badge>
          </div>
          <Award className="h-6 w-6 text-yellow-500" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{path.description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {path.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            {path.modules.length} modules
          </span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Included Modules:</h4>
          <div className="flex flex-wrap gap-1">
            {path.modules.slice(0, 3).map((moduleId, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                Module {index + 1}
              </Badge>
            ))}
            {path.modules.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{path.modules.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <Button className="w-full hero-gradient text-white">
          <TrendingUp className="h-4 w-4 mr-2" />
          Start Learning Path
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">No-Code Academy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master full-stack development with no-code platforms. Learn to build complete applications 
              using the power of AI and visual development tools.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {getAllModules().length}
                </div>
                <p className="text-sm text-muted-foreground">Learning Modules</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {platforms.length - 1}
                </div>
                <p className="text-sm text-muted-foreground">Platforms Covered</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {learningPaths.length}
                </div>
                <p className="text-sm text-muted-foreground">Learning Paths</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">Practical Projects</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="modules">Learning Modules</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="platforms">Platform Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <LearningDashboard />
            </TabsContent>

            <TabsContent value="modules" className="space-y-6">
              <PlatformModules />
            </TabsContent>

            <TabsContent value="interactive" className="space-y-6">
              <InteractiveLearning />
            </TabsContent>

            <TabsContent value="assessments" className="space-y-6">
              <AssessmentSystem />
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <CertificationSystem />
            </TabsContent>

            <TabsContent value="paths" className="space-y-6">
              <LearningPathBuilder />
            </TabsContent>

            <TabsContent value="platforms" className="space-y-6">
              <PlatformOverview />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Academy;