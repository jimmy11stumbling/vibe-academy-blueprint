
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Target, 
  Clock, 
  Award, 
  ChevronRight, 
  Plus,
  User,
  BookOpen,
  Code,
  Rocket,
  CheckCircle,
  Star
} from 'lucide-react';
import { LearningPath } from '@/types/tutorial';

const learningPaths: LearningPath[] = [
  {
    id: 'no-code-fundamentals',
    title: 'No-Code Development Fundamentals',
    description: 'Master the basics of no-code development across multiple platforms',
    modules: ['lovable-fundamentals', 'base44-basics', 'v0-ui-generation'],
    totalDuration: '24 hours',
    difficulty: 'beginner',
    prerequisites: [],
    certification: true
  },
  {
    id: 'ai-assisted-development',
    title: 'AI-Assisted Professional Development',
    description: 'Learn to leverage AI tools for professional software development',
    modules: ['cursor-fundamentals', 'windsurf-fundamentals', 'claude-code-mastery'],
    totalDuration: '35 hours',
    difficulty: 'intermediate',
    prerequisites: ['Programming fundamentals', 'Version control basics'],
    certification: true
  },
  {
    id: 'full-stack-mastery',
    title: 'Full-Stack Development Mastery',
    description: 'Build complete applications from frontend to backend',
    modules: ['lovable-advanced', 'replit-fundamentals', 'bolt-fundamentals'],
    totalDuration: '40 hours',
    difficulty: 'advanced',
    prerequisites: ['Web development basics', 'Database concepts'],
    certification: true
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise AI Development Solutions',
    description: 'Implement enterprise-grade applications with advanced security',
    modules: ['windsurf-fundamentals', 'cursor-enterprise', 'security-best-practices'],
    totalDuration: '50 hours',
    difficulty: 'advanced',
    prerequisites: ['Professional development experience', 'Security fundamentals'],
    certification: true
  }
];

const LearningPathBuilder = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('paths');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const selectedLearningPath = learningPaths.find(path => path.id === selectedPath);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Structured learning journeys designed to take you from beginner to expert 
          across different no-code and AI-assisted development domains
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="custom">Build Custom Path</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="paths" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <Card 
                key={path.id} 
                className={`glass-card cursor-pointer transition-all ${
                  selectedPath === path.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mt-2">{path.description}</p>
                    </div>
                    <Badge variant="outline" className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{path.totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{path.modules.length} modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>{path.certification ? 'Certified' : 'No cert'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>0% Complete</span>
                    </div>
                  </div>

                  {path.prerequisites.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Prerequisites:</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.prerequisites.map((prereq, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={selectedPath === path.id ? "default" : "outline"}
                  >
                    {selectedPath === path.id ? "Start Learning Path" : "View Details"}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedLearningPath && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  {selectedLearningPath.title} - Detailed Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{selectedLearningPath.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{selectedLearningPath.totalDuration.split(' ')[0]}</div>
                    <div className="text-sm text-muted-foreground">Hours of Content</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{selectedLearningPath.modules.length}</div>
                    <div className="text-sm text-muted-foreground">Learning Modules</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{selectedLearningPath.certification ? '1' : '0'}</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Learning Journey:</h4>
                  <div className="space-y-3">
                    {selectedLearningPath.modules.map((moduleId, index) => (
                      <div key={moduleId} className="flex items-center gap-4 p-3 border rounded-lg">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium capitalize">{moduleId.replace('-', ' ')}</h5>
                          <p className="text-sm text-muted-foreground">Module description would go here</p>
                        </div>
                        <Badge variant="outline">Not Started</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    Start Learning Path
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Save for Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Build Your Custom Learning Path
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Create a personalized learning journey by selecting modules that match your goals and skill level.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Select Your Goal:</h4>
                  <div className="space-y-2">
                    {['Build MVPs quickly', 'Professional development', 'Enterprise solutions', 'Learning & education'].map((goal, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="goal" className="text-primary" />
                        <span className="text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Your Experience Level:</h4>
                  <div className="space-y-2">
                    {['Complete beginner', 'Some coding experience', 'Professional developer', 'Expert level'].map((level, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="experience" className="text-primary" />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full">
                Generate Custom Path
                <Rocket className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <User className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Paths Started</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Modules Completed</div>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Certificates Earned</div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Active Learning Paths</h3>
                <p className="text-muted-foreground mb-4">
                  Start a learning path to track your progress and earn certifications
                </p>
                <Button onClick={() => setActiveTab('paths')}>
                  Browse Learning Paths
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningPathBuilder;
