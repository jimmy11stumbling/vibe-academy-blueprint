
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code, 
  Eye,
  Monitor,
  Smartphone,
  Tablet,
  MousePointer,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  code: string;
  platform: string;
  duration: number;
  result: string;
}

const demoSteps: DemoStep[] = [
  {
    id: 'lovable-chat',
    title: 'Chat-Driven Development',
    description: 'Create a todo app using natural language with Lovable',
    code: `User: "Create a todo app with the ability to add, edit, and delete tasks. Include a counter for completed tasks."

AI Response: I'll create a beautiful todo app for you with all the features you requested.

Generated Components:
- TodoApp.tsx (Main component)
- TodoItem.tsx (Individual task)
- AddTodoForm.tsx (Add new tasks)
- TaskCounter.tsx (Progress tracking)`,
    platform: 'Lovable 2.0',
    duration: 30000,
    result: 'Complete todo application with modern UI, task management, and real-time updates'
  },
  {
    id: 'cursor-ai-assist',
    title: 'AI-Powered Code Completion',
    description: 'Watch Cursor predict and complete complex code patterns',
    code: `// Starting to type a React component
function UserProfile({ user }) {
  // Cursor predicts the entire component structure
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio
  });

  // AI suggests error handling, form validation, and best practices
  const handleSubmit = async (e) => {
    e.preventDefault();
    // AI completes the submit logic
  };`,
    platform: 'Cursor',
    duration: 25000,
    result: 'Fully functional user profile component with validation and error handling'
  },
  {
    id: 'replit-collab',
    title: 'Real-Time Collaboration',
    description: 'Multiple developers coding together in Replit',
    code: `// Developer 1 creates the base structure
class GameEngine {
  constructor() {
    this.players = [];
    this.gameState = 'waiting';
  }

// Developer 2 adds player management (simultaneously)
  addPlayer(player) {
    this.players.push(player);
    this.broadcast('player-joined', player);
  }

// Developer 3 implements game logic (in real-time)
  startGame() {
    if (this.players.length >= 2) {
      this.gameState = 'active';
      this.initializeGame();
    }
  }
}`,
    platform: 'Replit',
    duration: 35000,
    result: 'Collaborative multiplayer game engine built by multiple developers simultaneously'
  }
];

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState('desktop');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (demoSteps[currentStep].duration / 100));
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentDemo = demoSteps[currentStep];

  const getDeviceClass = () => {
    switch (selectedDevice) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      default:
        return 'w-full';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Interactive Platform Demos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the power of AI-assisted development platforms through interactive demonstrations
        </p>
      </div>

      <Tabs defaultValue="live-demo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="live-demo">Live Demo</TabsTrigger>
          <TabsTrigger value="comparison">Side-by-Side</TabsTrigger>
          <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="live-demo" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Demo Steps Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="font-semibold">Demo Steps</h3>
              {demoSteps.map((step, index) => (
                <Card 
                  key={step.id}
                  className={`cursor-pointer transition-all ${
                    currentStep === index ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                  }`}
                  onClick={() => handleStepChange(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                        currentStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{step.title}</h4>
                        <Badge variant="outline" className="text-xs mt-1">
                          {step.platform}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Demo Area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Demo Controls */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        {currentDemo.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">{currentDemo.description}</p>
                    </div>
                    <Badge variant="outline">{currentDemo.platform}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Demo Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center gap-4">
                    <Button onClick={handlePlay} variant="outline">
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button onClick={handleReset} variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>

                    {/* Device Selector */}
                    <div className="flex items-center gap-2 ml-auto">
                      <Button
                        size="sm"
                        variant={selectedDevice === 'desktop' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('desktop')}
                      >
                        <Monitor className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={selectedDevice === 'tablet' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('tablet')}
                      >
                        <Tablet className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={selectedDevice === 'mobile' ? 'default' : 'outline'}
                        onClick={() => setSelectedDevice('mobile')}
                      >
                        <Smartphone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code and Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Code Panel */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Code className="h-5 w-5" />
                      Code Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-auto max-h-96">
                      <pre className="whitespace-pre-wrap">{currentDemo.code}</pre>
                    </div>
                  </CardContent>
                </Card>

                {/* Preview Panel */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Eye className="h-5 w-5" />
                      Live Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`bg-muted rounded-lg p-4 min-h-96 flex items-center justify-center ${getDeviceClass()}`}>
                      <div className="text-center space-y-4">
                        {progress < 100 ? (
                          <>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                            <p className="text-muted-foreground">Generating application...</p>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                            <div>
                              <h3 className="font-semibold">Demo Complete!</h3>
                              <p className="text-sm text-muted-foreground mt-1">{currentDemo.result}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps */}
              {progress >= 100 && (
                <Card className="glass-card border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-green-700 dark:text-green-300">
                          Ready to try {currentDemo.platform}?
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Start building your own applications with this powerful platform
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Tutorial
                        </Button>
                        <Button size="sm">
                          Start Building
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Platform Comparison Demo</h3>
            <p className="text-muted-foreground">
              See how different platforms approach the same development task
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demoSteps.map((demo, index) => (
              <Card key={demo.id} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">{demo.platform}</CardTitle>
                  <Badge variant="outline">{demo.title}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted rounded p-3 font-mono text-xs">
                    <pre className="whitespace-pre-wrap overflow-auto max-h-32">
                      {demo.code.substring(0, 200)}...
                    </pre>
                  </div>
                  <Button size="sm" className="w-full">
                    <Play className="h-3 w-3 mr-2" />
                    Run Demo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Video Tutorials</h3>
            <p className="text-muted-foreground">
              In-depth video guides for mastering each platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoSteps.map((demo, index) => (
              <Card key={demo.id} className="glass-card">
                <CardContent className="p-0">
                  <div className="bg-muted aspect-video rounded-t-lg flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-4 space-y-3">
                    <h4 className="font-semibold">{demo.title}</h4>
                    <p className="text-sm text-muted-foreground">{demo.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{demo.platform}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(demo.duration / 1000)}s
                      </span>
                    </div>
                    <Button size="sm" className="w-full">
                      <Play className="h-3 w-3 mr-2" />
                      Watch Tutorial
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

export default InteractiveDemo;
