import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Clock, 
  CheckCircle, 
  Lock, 
  Star,
  BookOpen,
  Code,
  Zap,
  Users,
  Award
} from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'video' | 'hands-on' | 'quiz';
  completed: boolean;
  locked: boolean;
  topics: string[];
  objectives: string[];
}

interface PlatformData {
  name: string;
  description: string;
  modules: Module[];
}

const platformModules: Record<string, PlatformData> = {
  lovable: {
    name: 'Lovable',
    description: 'AI-powered full-stack application development',
    modules: [
      {
        id: 'lovable-intro',
        title: 'Introduction to Lovable',
        description: 'Learn the fundamentals of AI-powered development with Lovable',
        duration: '45 min',
        difficulty: 'beginner',
        type: 'video',
        completed: true,
        locked: false,
        topics: ['AI Development', 'Full-Stack Basics', 'Platform Overview'],
        objectives: ['Understand Lovable basics', 'Set up development environment', 'Create first project']
      },
      {
        id: 'ai-prompting',
        title: 'Effective AI Prompting Techniques',
        description: 'Master the art of communicating with AI for optimal code generation',
        duration: '30 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: true,
        locked: false,
        topics: ['Prompt Engineering', 'UI Description', 'Iterative Refinement'],
        objectives: ['Write effective prompts', 'Refine generated components', 'Optimize UI output']
      },
      {
        id: 'component-design',
        title: 'Advanced Component Design',
        description: 'Create complex, reusable components with AI assistance',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Component Architecture', 'Reusability', 'State Management'],
        objectives: ['Design scalable components', 'Implement state management', 'Ensure reusability']
      }
    ]
  },
  cursor: {
    name: 'Cursor',
    description: 'AI-enhanced code editor for rapid development',
    modules: [
      {
        id: 'cursor-setup',
        title: 'Cursor IDE Setup & Configuration',
        description: 'Configure Cursor for optimal AI-assisted development',
        duration: '25 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['IDE Configuration', 'AI Features', 'Workflow Optimization'],
        objectives: ['Set up Cursor IDE', 'Configure AI features', 'Optimize workflow']
      },
      {
        id: 'ai-code-completion',
        title: 'AI Code Completion Mastery',
        description: 'Leverage AI for intelligent code suggestions and completion',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Code Completion', 'AI Suggestions', 'Productivity Tips'],
        objectives: ['Use AI completion effectively', 'Improve coding speed', 'Maintain code quality']
      }
    ]
  },
  replit: {
    name: 'Replit',
    description: 'Collaborative cloud-based development environment',
    modules: [
      {
        id: 'replit-basics',
        title: 'Replit Development Fundamentals',
        description: 'Master cloud-based development with Replit',
        duration: '35 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['Cloud Development', 'Collaboration', 'Deployment'],
        objectives: ['Understand cloud development', 'Set up projects', 'Deploy applications']
      }
    ]
  },
  windsurf: {
    name: 'WindSurf',
    description: 'Advanced AI-powered development platform',
    modules: [
      {
        id: 'windsurf-intro',
        title: 'WindSurf Platform Overview',
        description: 'Introduction to WindSurf development capabilities',
        duration: '40 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['Platform Overview', 'AI Features', 'Development Tools'],
        objectives: ['Understand WindSurf platform', 'Explore AI features', 'Set up development environment']
      }
    ]
  },
  bolt: {
    name: 'Bolt',
    description: 'Rapid prototyping and development platform',
    modules: [
      {
        id: 'bolt-quickstart',
        title: 'Bolt Quick Start Guide',
        description: 'Get started with rapid prototyping using Bolt',
        duration: '30 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Rapid Prototyping', 'Quick Development', 'Platform Basics'],
        objectives: ['Create first prototype', 'Understand platform features', 'Deploy quickly']
      }
    ]
  }
};

interface PlatformModulesProps {
  selectedPlatform: string;
}

const PlatformModules: React.FC<PlatformModulesProps> = ({ selectedPlatform }) => {
  const [completedModules, setCompletedModules] = useState<string[]>(['lovable-intro', 'ai-prompting']);

  const platform = platformModules[selectedPlatform];

  if (!platform) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Platform not found</p>
      </div>
    );
  }

  const handleModuleComplete = (moduleId: string) => {
    setCompletedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const completedCount = platform.modules.filter(module => 
    completedModules.includes(module.id)
  ).length;
  const progressPercentage = (completedCount / platform.modules.length) * 100;

  return (
    <div className="space-y-6">
      {/* Platform Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{platform.name} Mastery</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {platform.description}
        </p>

        {/* Progress Overview */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{completedCount}/{platform.modules.length} modules</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platform.modules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id);
          const isLocked = module.locked;

          return (
            <Card key={module.id} className={`relative ${isCompleted ? 'ring-2 ring-green-500' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={
                        module.difficulty === 'beginner' ? 'secondary' :
                        module.difficulty === 'intermediate' ? 'default' : 'destructive'
                      }>
                        {module.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {module.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>

                  {isCompleted && (
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  )}
                  {isLocked && (
                    <Lock className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{module.topics.length} topics</span>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <p className="text-xs font-medium mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-1">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learning Objectives */}
                <div>
                  <p className="text-xs font-medium mb-2">Learning Objectives:</p>
                  <ul className="space-y-1">
                    {module.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full" 
                  variant={isCompleted ? 'outline' : 'default'}
                  disabled={isLocked}
                  onClick={() => handleModuleComplete(module.id)}
                >
                  {isLocked ? (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Locked
                    </>
                  ) : isCompleted ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Module
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Platform Statistics */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{platform.modules.length}</div>
              <div className="text-sm text-muted-foreground">Total Modules</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {platform.modules.reduce((acc, module) => acc + parseInt(module.duration), 0)}min
              </div>
              <div className="text-sm text-muted-foreground">Total Duration</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlatformModules;