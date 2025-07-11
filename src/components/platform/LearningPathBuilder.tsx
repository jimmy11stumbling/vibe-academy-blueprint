
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  Star, 
  Target,
  ArrowRight,
  BookOpen,
  Award,
  Plus,
  X
} from 'lucide-react';
import { TutorialModule } from '@/types/tutorial';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  modules: TutorialModule[];
  totalDuration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedCompletion: string;
  skills: string[];
}

interface LearningPathBuilderProps {
  platformName: string;
  availableModules: TutorialModule[];
}

const LearningPathBuilder = ({ platformName, availableModules }: LearningPathBuilderProps) => {
  const [selectedModules, setSelectedModules] = useState<TutorialModule[]>([]);
  const [pathTitle, setPathTitle] = useState('');
  const [customPaths, setCustomPaths] = useState<LearningPath[]>([]);

  const suggestedPaths: LearningPath[] = [
    {
      id: 'beginner-path',
      title: `${platformName} Beginner Journey`,
      description: 'Perfect for newcomers to start their journey with solid fundamentals',
      modules: availableModules.filter(m => m.difficultyLevel === 'beginner'),
      totalDuration: availableModules
        .filter(m => m.difficultyLevel === 'beginner')
        .reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0) + ' hours',
      difficulty: 'beginner',
      estimatedCompletion: '2-4 weeks',
      skills: ['Platform Basics', 'First Projects', 'Best Practices']
    },
    {
      id: 'professional-path',
      title: `Professional ${platformName} Development`,
      description: 'Comprehensive path for professional developers seeking mastery',
      modules: availableModules,
      totalDuration: availableModules
        .reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0) + ' hours',
      difficulty: 'intermediate',
      estimatedCompletion: '6-8 weeks',
      skills: ['Advanced Features', 'Production Ready', 'Enterprise Skills']
    },
    {
      id: 'certification-path',
      title: `${platformName} Certification Track`,
      description: 'Focused path to earn professional certification',
      modules: availableModules.filter(m => m.certificationAvailable),
      totalDuration: availableModules
        .filter(m => m.certificationAvailable)
        .reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0) + ' hours',
      difficulty: 'advanced',
      estimatedCompletion: '4-6 weeks',
      skills: ['Certification Ready', 'Professional Validation', 'Career Advancement']
    }
  ].filter(path => path.modules.length > 0);

  const addModuleToPath = (module: TutorialModule) => {
    if (!selectedModules.find(m => m.id === module.id)) {
      setSelectedModules([...selectedModules, module]);
    }
  };

  const removeModuleFromPath = (moduleId: string) => {
    setSelectedModules(selectedModules.filter(m => m.id !== moduleId));
  };

  const createCustomPath = () => {
    if (pathTitle && selectedModules.length > 0) {
      const totalHours = selectedModules.reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0);
      const avgDifficulty = selectedModules.reduce((acc, m) => {
        const difficultyScore = m.difficultyLevel === 'beginner' ? 1 : m.difficultyLevel === 'intermediate' ? 2 : 3;
        return acc + difficultyScore;
      }, 0) / selectedModules.length;
      
      const difficulty = avgDifficulty <= 1.5 ? 'beginner' : avgDifficulty <= 2.5 ? 'intermediate' : 'advanced';
      
      const newPath: LearningPath = {
        id: `custom-${Date.now()}`,
        title: pathTitle,
        description: 'Custom learning path tailored to your goals',
        modules: [...selectedModules],
        totalDuration: totalHours + ' hours',
        difficulty,
        estimatedCompletion: totalHours < 20 ? '2-3 weeks' : totalHours < 40 ? '4-6 weeks' : '6-8 weeks',
        skills: selectedModules.flatMap(m => m.tutorials.flatMap(t => t.topics)).slice(0, 5)
      };
      
      setCustomPaths([...customPaths, newPath]);
      setSelectedModules([]);
      setPathTitle('');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Learning Path Builder</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from suggested paths or create your own customized learning journey
        </p>
      </div>

      {/* Suggested Paths */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Suggested Learning Paths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedPaths.map((path) => (
            <Card key={path.id} className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                    <Badge variant="outline" className={getDifficultyColor(path.difficulty)}>
                      {path.difficulty}
                    </Badge>
                  </div>
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{path.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{path.totalDuration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-green-500" />
                    <span>{path.modules.length} modules</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Estimated completion:</span>
                    <span className="font-medium">{path.estimatedCompletion}</span>
                  </div>
                </div>

                <Button className="w-full">
                  Start Learning Path
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Path Builder */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Build Custom Path</h3>
        
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Create Your Own Learning Path</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Path Title</label>
              <input
                type="text"
                value={pathTitle}
                onChange={(e) => setPathTitle(e.target.value)}
                placeholder="Enter your learning path title"
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            {selectedModules.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Selected Modules ({selectedModules.length})</h4>
                <div className="space-y-2">
                  {selectedModules.map((module, index) => (
                    <div key={module.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground">
                          {index + 1}.
                        </span>
                        <div>
                          <div className="font-medium">{module.title}</div>
                          <div className="text-sm text-muted-foreground">{module.totalDuration}</div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeModuleFromPath(module.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-muted/50 rounded-md">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Total Duration: </span>
                      {selectedModules.reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0)} hours
                    </div>
                    <div>
                      <span className="font-medium">Modules: </span>
                      {selectedModules.length}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={createCustomPath}
                  disabled={!pathTitle}
                  className="w-full"
                >
                  Create Learning Path
                </Button>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-3">Available Modules</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableModules.map((module) => (
                  <Card key={module.id} className="cursor-pointer hover:border-primary/50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium mb-1">{module.title}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {module.totalDuration}
                            </div>
                            <Badge variant="outline" className={getDifficultyColor(module.difficultyLevel)}>
                              {module.difficultyLevel}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addModuleToPath(module)}
                          disabled={selectedModules.some(m => m.id === module.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Custom Paths */}
      {customPaths.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Your Custom Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customPaths.map((path) => (
              <Card key={path.id} className="glass-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <Badge variant="outline" className={getDifficultyColor(path.difficulty)}>
                        {path.difficulty}
                      </Badge>
                    </div>
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{path.totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-green-500" />
                      <span>{path.modules.length} modules</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    Continue Path
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPathBuilder;
