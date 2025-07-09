import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, ArrowRight, Star, Users, BookOpen, Terminal, Code, Zap, Activity, Wifi, Download, Upload, GitBranch, Database, Layers, FileText, CheckCircle, Clock, Cpu } from 'lucide-react';
const HeroSection = () => {
  const [buildProgress, setBuildProgress] = useState(0);
  const [currentCommand, setCurrentCommand] = useState('');
  const [cliOutput, setCliOutput] = useState<string[]>([]);
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [liveCode, setLiveCode] = useState('');
  const [isBuilding, setIsBuilding] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [filesUpdated, setFilesUpdated] = useState(0);
  const [currentStep, setCurrentStep] = useState('Initializing...');
  const stats = [{
    icon: Users,
    value: '25,000+',
    label: 'Students'
  }, {
    icon: BookOpen,
    value: '200+',
    label: 'Courses'
  }, {
    icon: Star,
    value: '4.9/5',
    label: 'Rating'
  }];
  const commands = ['npm create no-code-app@latest', 'cd no-code-app', 'npm install --stream', 'npm run dev --hot-reload', 'git add . && git commit -m "feat: streaming updates"', 'npm run build --watch', 'npm run deploy --live'];
  const codeSteps = ['import { NoCodeBuilder } from "@/components/Builder"', 'const [components, setComponents] = useState([])', 'const handleDragDrop = (component) => {', '  setComponents([...components, component])', '  streamUpdate("component-added", component)', '}', 'return <NoCodeBuilder onUpdate={handleDragDrop} />'];
  const buildSteps = ['Initializing build system...', 'Installing dependencies...', 'Compiling TypeScript...', 'Optimizing components...', 'Generating build files...', 'Running tests...', 'Deploying to production...', 'Build complete! 🚀'];
  const logMessages = ['✅ Component library loaded', '🔄 Hot reload enabled', '📦 Bundle size: 234KB', '⚡ Performance score: 98/100', '🔒 Security scan passed', '🌐 CDN cache updated', '📊 Analytics connected', '🚀 Deployment successful'];
  useEffect(() => {
    const intervals = [];

    // Simulate typing commands
    let commandIndex = 0;
    let charIndex = 0;
    const commandInterval = setInterval(() => {
      if (commandIndex < commands.length) {
        const command = commands[commandIndex];
        if (charIndex < command.length) {
          setCurrentCommand(command.slice(0, charIndex + 1));
          charIndex++;
        } else {
          // Command complete, add to output and move to next
          setCliOutput(prev => [...prev, `$ ${command}`]);
          commandIndex++;
          charIndex = 0;
          setCurrentCommand('');

          // Add some output for the command
          setTimeout(() => {
            const outputs = {
              'npm create no-code-app@latest': ['Creating new no-code app...', '✅ Project initialized'],
              'cd no-code-app': ['Navigating to project directory...'],
              'npm install --stream': ['📦 Installing packages...', '⬇️  React ^18.3.1', '⬇️  TypeScript ^5.0.0', '✅ Dependencies installed'],
              'npm run dev --hot-reload': ['🔥 Starting development server...', '🌐 Local: http://localhost:3000', '🔄 Hot reload active'],
              'git add . && git commit -m "feat: streaming updates"': ['📝 Staging changes...', '✅ Changes committed'],
              'npm run build --watch': ['🔨 Building for production...', '📊 Analyzing bundle...', '✅ Build successful'],
              'npm run deploy --live': ['🚀 Deploying to production...', '🌐 Live at: https://app.example.com', '✅ Deployment complete']
            };
            const commandOutputs = outputs[command] || ['✅ Command executed'];
            commandOutputs.forEach((output, index) => {
              setTimeout(() => {
                setCliOutput(prev => [...prev, output]);
              }, index * 800);
            });
          }, 500);
        }
      } else {
        // Reset cycle
        commandIndex = 0;
        setCliOutput([]);
        setCurrentCommand('');
      }
    }, 100);
    intervals.push(commandInterval);

    // Simulate code typing
    let codeIndex = 0;
    let codeCharIndex = 0;
    const codeInterval = setInterval(() => {
      if (codeIndex < codeSteps.length) {
        const line = codeSteps[codeIndex];
        if (codeCharIndex < line.length) {
          const currentCode = codeSteps.slice(0, codeIndex).join('\n') + (codeIndex > 0 ? '\n' : '') + line.slice(0, codeCharIndex + 1);
          setLiveCode(currentCode);
          codeCharIndex++;
        } else {
          codeIndex++;
          codeCharIndex = 0;
        }
      } else {
        // Reset
        codeIndex = 0;
        codeCharIndex = 0;
        setLiveCode('');
      }
    }, 150);
    intervals.push(codeInterval);

    // Build progress simulation
    const buildInterval = setInterval(() => {
      setBuildProgress(prev => {
        const next = prev + Math.random() * 15;
        return next > 100 ? 0 : next;
      });
    }, 2000);
    intervals.push(buildInterval);

    // Deploy progress
    const deployInterval = setInterval(() => {
      setDeployProgress(prev => {
        const next = prev + Math.random() * 12;
        return next > 100 ? 0 : next;
      });
    }, 1800);
    intervals.push(deployInterval);

    // Files updated counter
    const filesInterval = setInterval(() => {
      setFilesUpdated(prev => (prev + 1) % 50);
    }, 3000);
    intervals.push(filesInterval);

    // Build steps
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      setCurrentStep(buildSteps[stepIndex]);
      stepIndex = (stepIndex + 1) % buildSteps.length;
    }, 2500);
    intervals.push(stepInterval);

    // Toggle building state
    const buildingInterval = setInterval(() => {
      setIsBuilding(prev => !prev);
    }, 8000);
    intervals.push(buildingInterval);
    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 Join 25,000+ No-Code Builders
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Build Apps
              <span className="hero-gradient bg-clip-text text-transparent block">
                Without Code
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transform your ideas into powerful applications using the latest no-code tools. 
              Learn from experts, build real projects, and launch your dream startup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90 group px-8">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group px-8">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {stats.map((stat, index) => <div key={index} className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right Content - Interactive Streaming Platform */}
          <div className="relative">
            {/* Main Platform Interface */}
            <div className="relative glass-card rounded-2xl p-6 border border-border/50 bg-background/80">
              {/* Platform Header with Live Metrics */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live Stream</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cpu className="h-3 w-3 text-blue-500" />
                    <span>{Math.round(buildProgress)}% CPU</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Database className="h-3 w-3 text-purple-500" />
                    <span>{filesUpdated} files</span>
                  </div>
                </div>
              </div>

              {/* Live Build Status */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 mb-4 border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {isBuilding ? 'Building App...' : 'Deployment Ready'}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">{Math.round(buildProgress)}%</div>
                </div>
                <Progress value={buildProgress} className="mb-2" />
                <div className="text-xs text-muted-foreground">{currentStep}</div>
                
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span className="text-green-600 dark:text-green-400">Components: OK</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-blue-500" />
                    <span className="text-blue-600 dark:text-blue-400">Build: {Math.round(deployProgress)}%</span>
                  </div>
                </div>
              </div>

              {/* Interactive Streaming CLI */}
              <div className="bg-black/95 rounded-lg p-3 mb-4 font-mono text-xs border border-green-500/30 max-h-32 overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">Streaming CLI</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-green-400 text-xs">LIVE</span>
                  </div>
                </div>
                <div className="space-y-1 max-h-24 overflow-y-auto">
                  {cliOutput.slice(-6).map((line, index) => <div key={index} className={`${line.startsWith('$') ? 'text-cyan-400' : line.includes('✅') ? 'text-green-400' : line.includes('📦') || line.includes('⬇️') ? 'text-blue-400' : line.includes('🔥') ? 'text-red-400' : line.includes('🚀') ? 'text-purple-400' : 'text-gray-300'}`}>
                      {line}
                    </div>)}
                  {currentCommand && <div className="text-cyan-400 flex items-center">
                      <span>$ {currentCommand}</span>
                      <span className="ml-1 animate-pulse">|</span>
                    </div>}
                </div>
              </div>

              {/* Live Code Editor */}
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg p-3 mb-4 border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code className="h-3 w-3 text-primary" />
                    <span className="text-xs font-medium">{activeFile}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-orange-600 dark:text-orange-400">Editing</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GitBranch className="h-3 w-3" />
                    <span>main</span>
                  </div>
                </div>
                <div className="bg-black/20 rounded p-2 font-mono text-xs max-h-24 overflow-hidden">
                  <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {liveCode}
                    <span className="animate-pulse text-primary">|</span>
                  </pre>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Upload className="h-3 w-3 text-green-500 animate-pulse" />
                    <span className="text-green-600 dark:text-green-400">Auto-saved</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-yellow-500" />
                    <span className="text-yellow-600 dark:text-yellow-400">Hot reload</span>
                  </div>
                </div>
              </div>

              {/* Real-time Logs */}
              <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg p-3 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-3 w-3 text-blue-500" />
                  <span className="text-xs font-medium">Live Activity Feed</span>
                </div>
                <div className="space-y-1 text-xs max-h-16 overflow-hidden">
                  {logMessages.slice(0, 3).map((message, index) => <div key={index} className="flex items-center gap-2 animate-fade-in">
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">{message}</span>
                      <span className="ml-auto text-xs text-muted-foreground">now</span>
                    </div>)}
                </div>
              </div>
            </div>

            {/* Enhanced Floating Indicators */}
            <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 border border-green-500/30 ">
              <div className="flex items-center gap-2 text-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="font-medium text-green-600 dark:text-green-400">Building Live</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-3 border border-blue-500/30">
              <div className="flex items-center gap-2 text-sm">
                <Download className="h-4 w-4 text-blue-500 animate-bounce" />
                <span className="font-medium text-blue-600 dark:text-blue-400">Auto-Deploy</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 glass-card rounded-lg p-2 border border-purple-500/30">
              <div className="flex items-center gap-1 text-xs">
                <FileText className="h-3 w-3 text-purple-500 animate-pulse" />
                <span className="text-purple-600 dark:text-purple-400">{filesUpdated} files</span>
              </div>
            </div>

            <div className="absolute top-1/4 -left-6 glass-card rounded-lg p-2 border border-orange-500/30">
              <div className="flex items-center gap-1 text-xs">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="text-orange-600 dark:text-orange-400">Syncing</span>
              </div>
            </div>

            {/* New Real-time Performance Indicator */}
            <div className="absolute bottom-1/4 -right-6 glass-card rounded-lg p-2 border border-cyan-500/30">
              <div className="flex items-center gap-1 text-xs">
                <Wifi className="h-3 w-3 text-cyan-500 animate-pulse" />
                <span className="text-cyan-600 dark:text-cyan-400">{Math.round(buildProgress)}ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by developers from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Google</div>
            <div className="text-lg font-semibold">Microsoft</div>
            <div className="text-lg font-semibold">Netflix</div>
            <div className="text-lg font-semibold">Spotify</div>
            <div className="text-lg font-semibold">Uber</div>
            <div className="text-lg font-semibold">Airbnb</div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;