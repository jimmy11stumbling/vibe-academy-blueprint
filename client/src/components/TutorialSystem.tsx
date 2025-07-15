
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Code, 
  Terminal,
  Lightbulb,
  Target,
  Award,
  ChevronRight,
  Lock
} from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'video' | 'interactive' | 'hands-on' | 'theory';
  completed: boolean;
  locked: boolean;
  topics: string[];
  objectives: string[];
  prerequisites?: string[];
}

interface TutorialModule {
  id: string;
  title: string;
  description: string;
  platform: string;
  totalDuration: string;
  difficultyLevel: string;
  completionRate: number;
  rating: number;
  enrolledStudents: number;
  tutorials: Tutorial[];
  practicalProjects: string[];
  certificationAvailable: boolean;
}

interface TutorialSystemProps {
  platform: string;
  modules: TutorialModule[];
}

const TutorialSystem = ({ platform, modules }: TutorialSystemProps) => {
  const [selectedModule, setSelectedModule] = useState<string>(modules[0]?.id || '');
  const [activeTab, setActiveTab] = useState('overview');

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'interactive': return <Code className="h-4 w-4" />;
      case 'hands-on': return <Terminal className="h-4 w-4" />;
      case 'theory': return <BookOpen className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const currentModule = modules.find(m => m.id === selectedModule);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{platform} Academy</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Master {platform} with comprehensive tutorials, hands-on projects, and real-world applications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Module Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold">Learning Modules</h3>
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`cursor-pointer transition-all ${
                selectedModule === module.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedModule(module.id)}
            >
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">{module.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{module.totalDuration}</span>
                  </div>
                  <Progress value={module.completionRate} className="h-2" />
                  <div className="flex items-center justify-between text-xs">
                    <span>{module.completionRate}% Complete</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{module.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {currentModule && (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{currentModule.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{currentModule.description}</p>
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(currentModule.difficultyLevel)}>
                        {currentModule.difficultyLevel}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{currentModule.totalDuration}</div>
                        <div className="text-sm text-muted-foreground">Total Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{currentModule.tutorials.length}</div>
                        <div className="text-sm text-muted-foreground">Lessons</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{currentModule.enrolledStudents.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-2xl font-bold text-primary">{currentModule.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Learning Objectives
                      </h4>
                      <ul className="space-y-2">
                        {currentModule.tutorials.slice(0, 3).map((tutorial, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tutorial.objectives[0] || tutorial.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1">
                        Start Learning
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                      {currentModule.certificationAvailable && (
                        <Button variant="outline" className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Get Certified
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <div className="space-y-4">
                  {currentModule.tutorials.map((tutorial, index) => (
                    <Card key={tutorial.id} className="glass-card">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {getTypeIcon(tutorial.type)}
                                <h4 className="font-medium">{tutorial.title}</h4>
                                <Badge variant="outline" className={getDifficultyColor(tutorial.difficulty)}>
                                  {tutorial.difficulty}
                                </Badge>
                                {tutorial.completed && (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                )}
                                {tutorial.locked && (
                                  <Lock className="h-4 w-4 text-muted-foreground" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{tutorial.description}</p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{tutorial.duration}</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {tutorial.topics.slice(0, 3).map((topic, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant={tutorial.completed ? "outline" : "default"}
                            disabled={tutorial.locked}
                          >
                            {tutorial.completed ? "Review" : tutorial.locked ? "Locked" : "Start"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentModule.practicalProjects.map((project, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          Project {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">View Details</Button>
                          <Button size="sm" variant="outline">Start Project</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-center">Overall Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Progress value={currentModule.completionRate} className="h-24 w-24 rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">{currentModule.completionRate}%</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {currentModule.tutorials.filter(t => t.completed).length} of {currentModule.tutorials.length} lessons completed
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-center">Time Invested</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24h 30m</div>
                      <p className="text-muted-foreground">Total learning time</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-center">Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex justify-center gap-2 mb-4">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <Award className="h-8 w-8 text-gray-400" />
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-muted-foreground">1 of 3 badges earned</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialSystem;
