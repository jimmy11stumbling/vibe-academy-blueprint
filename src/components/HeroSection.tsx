
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Star, Users, BookOpen, Terminal, Code, Zap } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Students' },
    { icon: BookOpen, value: '200+', label: 'Courses' },
    { icon: Star, value: '4.9/5', label: 'Rating' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 overflow-hidden">
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
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - No-Code Platform Visual */}
          <div className="relative">
            {/* Main Platform Interface */}
            <div className="relative glass-card rounded-2xl p-6 border border-border/50 bg-background/80">
              {/* Platform Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Live Building
                </div>
              </div>

              {/* Visual Builder Interface */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 rounded bg-primary/20"></div>
                  <div className="text-xs font-medium">Visual Builder</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="h-8 bg-background/50 rounded border-2 border-dashed border-primary/30 flex items-center justify-center">
                    <span className="text-xs text-primary">Button</span>
                  </div>
                  <div className="h-8 bg-background/50 rounded border-2 border-dashed border-secondary/30 flex items-center justify-center">
                    <span className="text-xs text-secondary">Form</span>
                  </div>
                </div>
                <div className="h-4 bg-foreground/10 rounded-full w-3/4 mb-2"></div>
                <div className="h-4 bg-foreground/10 rounded-full w-1/2"></div>
              </div>

              {/* Streaming CLI */}
              <div className="bg-black/90 rounded-lg p-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">Streaming CLI</span>
                </div>
                <div className="space-y-1">
                  <div className="text-green-400">$ deploying app...</div>
                  <div className="text-blue-400">✓ Building components</div>
                  <div className="text-yellow-400">⚡ Live updates enabled</div>
                  <div className="text-green-400 flex items-center gap-1">
                    <span className="animate-pulse">●</span>
                    <span>Ready in 2.3s</span>
                  </div>
                </div>
              </div>

              {/* IDE Panel */}
              <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium">Code Preview</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-blue-600 dark:text-blue-400">function App() {</div>
                  <div className="text-gray-600 dark:text-gray-400 ml-4">return (</div>
                  <div className="text-green-600 dark:text-green-400 ml-8">&lt;NoCodeApp /&gt;</div>
                  <div className="text-gray-600 dark:text-gray-400 ml-4">)</div>
                  <div className="text-blue-600 dark:text-blue-400">}</div>
                </div>
              </div>
            </div>

            {/* Floating Status Indicators */}
            <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 border border-border/50 animate-bounce">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Building Live</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-3 border border-border/50">
              <div className="flex items-center gap-2 text-sm">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-medium">CLI Active</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 glass-card rounded-lg p-2 border border-border/50 animate-pulse">
              <div className="flex items-center gap-1 text-xs">
                <Zap className="h-3 w-3 text-yellow-500" />
                <span>Real-time</span>
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
    </section>
  );
};

export default HeroSection;
