
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Code, 
  Terminal, 
  Eye,
  Zap,
  Activity,
  Clock,
  CheckCircle,
  Upload,
  Download
} from 'lucide-react';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('lovable');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedCode, setGeneratedCode] = useState('');
  const [liveOutput, setLiveOutput] = useState('');

  const demos = {
    lovable: {
      name: 'Lovable 2.0',
      description: 'Chat-driven full-stack app generation',
      steps: [
        { title: 'Describe your app', duration: 2000, code: '// User: "Create a todo app with dark mode"' },
        { title: 'AI analyzes requirements', duration: 1500, code: 'Analyzing requirements...\n- Todo CRUD operations\n- Dark mode toggle\n- Responsive design' },
        { title: 'Generate components', duration: 3000, code: 'function TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [darkMode, setDarkMode] = useState(false);\n  \n  return (\n    <div className={darkMode ? "dark" : ""}>\n      <TodoList todos={todos} />\n    </div>\n  );\n}' },
        { title: 'Setup backend', duration: 2000, code: '-- Creating todos table\nCREATE TABLE todos (\n  id UUID PRIMARY KEY,\n  text TEXT NOT NULL,\n  completed BOOLEAN DEFAULT false\n);' },
        { title: 'Deploy app', duration: 1500, code: '✅ App deployed to https://your-app.lovable.app\n🔒 Database connected\n🎨 Styling applied' }
      ]
    },
    cursor: {
      name: 'Cursor IDE',
      description: 'AI-powered code editing and refactoring',
      steps: [
        { title: 'Open codebase', duration: 1000, code: '// Loading project files...\nsrc/\n├── components/\n├── pages/\n└── utils/' },
        { title: 'AI code analysis', duration: 2000, code: '// Cursor is analyzing your codebase...\n// Found 47 components\n// Detected React + TypeScript\n// Identified potential optimizations' },
        { title: 'Smart suggestions', duration: 2500, code: '// Suggestion: Extract reusable hook\nconst useLocalStorage = (key, defaultValue) => {\n  const [value, setValue] = useState(() => {\n    return localStorage.getItem(key) || defaultValue;\n  });\n  // ...\n};' },
        { title: 'Refactor code', duration: 2000, code: '// Applying refactoring across 12 files...\n// ✅ Extracted common logic\n// ✅ Updated imports\n// ✅ Added type definitions' },
        { title: 'Generate tests', duration: 1500, code: 'describe("TodoApp", () => {\n  it("should add new todo", () => {\n    render(<TodoApp />);\n    // Test implementation generated\n  });\n});' }
      ]
    },
    bolt: {
      name: 'Bolt',
      description: 'Full-stack development in browser',
      steps: [
        { title: 'Initialize environment', duration: 1500, code: '// Starting WebContainer...\n// Node.js runtime: ✅\n// Package manager: ✅\n// File system: ✅' },
        { title: 'Install dependencies', duration: 2500, code: 'npm install react react-dom\nnpm install @types/react\nnpm install vite\n\n✅ Dependencies installed' },
        { title: 'Generate app structure', duration: 2000, code: 'Creating files...\n├── src/App.tsx\n├── src/main.tsx\n├── index.html\n└── package.json' },
        { title: 'Run development server', duration: 1500, code: '$ npm run dev\n\n  Local:   http://localhost:5173/\n  Network: http://192.168.1.100:5173/\n\n  ready in 245ms.' },
        { title: 'Live preview', duration: 2000, code: '// App is running live in browser\n// Hot reload enabled\n// Changes reflected instantly' }
      ]
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && activeDemo) {
      const demo = demos[activeDemo as keyof typeof demos];
      const totalDuration = demo.steps.reduce((acc, step) => acc + step.duration, 0);
      
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / totalDuration) * 50;
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
      }, 50);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, activeDemo]);

  useEffect(() => {
    if (isPlaying && activeDemo) {
      const demo = demos[activeDemo as keyof typeof demos];
      let totalTime = 0;
      
      demo.steps.forEach((step, index) => {
        setTimeout(() => {
          if (currentStep <= index) {
            setCurrentStep(index);
            setGeneratedCode(step.code);
            setLiveOutput(prev => prev + `\n[${step.title}] ${new Date().toLocaleTimeString()}`);
          }
        }, totalTime);
        totalTime += step.duration;
      });
    }
  }, [isPlaying, activeDemo, currentStep]);

  const handlePlay = () => {
    if (progress >= 100) {
      handleReset();
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentStep(0);
    setGeneratedCode('');
    setLiveOutput('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Interactive Platform Demos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience how different AI development platforms work with live, interactive demonstrations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(demos).map(([key, demo]) => (
          <Button
            key={key}
            variant={activeDemo === key ? 'default' : 'outline'}
            className="h-auto p-4 flex flex-col items-start"
            onClick={() => {
              setActiveDemo(key);
              handleReset();
            }}
          >
            <div className="font-semibold">{demo.name}</div>
            <div className="text-sm opacity-80 mt-1">{demo.description}</div>
          </Button>
        ))}
      </div>

      <Card className="glass-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              {demos[activeDemo as keyof typeof demos]?.name} Demo
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={isPlaying ? handlePause : handlePlay}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button size="sm" variant="outline" onClick={handleReset}>
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="code">Generated Code</TabsTrigger>
              <TabsTrigger value="terminal">Terminal Output</TabsTrigger>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="code" className="space-y-4">
              <Card className="bg-black/95 border-green-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-sm">Live Code Generation</span>
                    </div>
                    {isPlaying && (
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs">Generating...</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap max-h-64 overflow-y-auto">
                    {generatedCode || '// Code will appear here when demo starts...'}
                    {isPlaying && <span className="animate-pulse text-green-400">|</span>}
                  </pre>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {demos[activeDemo as keyof typeof demos]?.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      index === currentStep
                        ? 'border-primary bg-primary/10'
                        : index < currentStep
                        ? 'border-green-500/30 bg-green-500/10'
                        : 'border-border bg-muted/50'
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {index < currentStep ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : index === currentStep ? (
                        <Clock className="h-4 w-4 text-primary animate-pulse" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className="text-xs font-medium">{index + 1}</span>
                    </div>
                    <div className="text-sm">{step.title}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="terminal" className="space-y-4">
              <Card className="bg-black/95 border-blue-500/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 text-sm">Terminal Output</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap max-h-64 overflow-y-auto">
                    {liveOutput || '// Terminal output will appear here...'}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="space-y-4">
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <span className="text-purple-500 text-sm">Live Preview</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Upload className="h-3 w-3 text-green-500" />
                        <span>Auto-deploy</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="h-3 w-3 text-yellow-500" />
                        <span>Hot reload</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                    {progress > 0 ? (
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                          <Code className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-lg font-semibold mb-2">App Preview</div>
                        <div className="text-sm text-muted-foreground">
                          Your {demos[activeDemo as keyof typeof demos]?.name} app is building...
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-4">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <Eye className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <div>Click Play to see the live preview</div>
                      </div>
                    )}
                    
                    {progress >= 100 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center">
                        <div className="text-center">
                          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                          <div className="text-xl font-bold text-green-600 dark:text-green-400">
                            App Ready!
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            Your application has been successfully generated and deployed
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveDemo;
