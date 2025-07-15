
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  CheckCircle, 
  Clock, 
  BookOpen,
  Code,
  Video,
  Monitor,
  Volume2,
  VolumeX,
  Maximize,
  Settings
} from 'lucide-react';
import { Tutorial } from '@/types/tutorial';

interface TutorialPreviewProps {
  tutorial: Tutorial;
  onStart: () => void;
  onComplete: () => void;
}

const TutorialPreview = ({ tutorial, onStart, onComplete }: TutorialPreviewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'interactive': return <Monitor className="h-4 w-4" />;
      case 'hands-on': return <Code className="h-4 w-4" />;
      case 'theory': return <BookOpen className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
  };

  return (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                {getTypeIcon(tutorial.type)}
                {tutorial.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className={getDifficultyColor(tutorial.difficulty)}>
                  {tutorial.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {tutorial.duration}
                </div>
              </div>
            </div>
            {tutorial.completed && (
              <CheckCircle className="h-6 w-6 text-green-500" />
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">{tutorial.description}</p>

          {/* Video/Content Player */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              {tutorial.type === 'video' ? (
                <div className="text-center">
                  <Video className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Video Preview</p>
                </div>
              ) : tutorial.type === 'interactive' ? (
                <div className="text-center">
                  <Monitor className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive Tutorial</p>
                </div>
              ) : (
                <div className="text-center">
                  <Code className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Hands-on Exercise</p>
                </div>
              )}
            </div>

            {/* Player Controls */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-lg p-4">
              <div className="space-y-3">
                <Progress value={progress} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={togglePlayPause}>
                      {isPlaying ? (
                        <Pause className="h-4 w-4 text-white" />
                      ) : (
                        <Play className="h-4 w-4 text-white" />
                      )}
                    </Button>
                    <Button size="sm" variant="ghost">
                      <SkipBack className="h-4 w-4 text-white" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <SkipForward className="h-4 w-4 text-white" />
                    </Button>
                    <span className="text-white text-sm ml-2">
                      {Math.floor(progress * 0.6)}:00 / {tutorial.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={toggleMute}>
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-white" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1">
                      {[0.5, 1, 1.25, 1.5, 2].map((speed) => (
                        <Button
                          key={speed}
                          size="sm"
                          variant={playbackSpeed === speed ? "default" : "ghost"}
                          onClick={() => handleSpeedChange(speed)}
                          className="text-xs"
                        >
                          {speed}x
                        </Button>
                      ))}
                    </div>
                    <Button size="sm" variant="ghost">
                      <Settings className="h-4 w-4 text-white" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Maximize className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="objectives">Objectives</TabsTrigger>
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What you'll learn</h4>
                <p className="text-muted-foreground">{tutorial.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prerequisites</h4>
                {tutorial.prerequisites && tutorial.prerequisites.length > 0 ? (
                  <ul className="space-y-1">
                    {tutorial.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No prerequisites required</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="objectives" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Learning Objectives</h4>
                <ul className="space-y-2">
                  {tutorial.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Topics Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {tutorial.topics.map((topic, index) => (
                    <Badge key={index} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Additional Resources</h4>
                <div className="space-y-2">
                  <div className="p-3 border rounded-md">
                    <h5 className="font-medium">Documentation</h5>
                    <p className="text-sm text-muted-foreground">Official platform documentation</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <h5 className="font-medium">Code Examples</h5>
                    <p className="text-sm text-muted-foreground">Sample code and templates</p>
                  </div>
                  <div className="p-3 border rounded-md">
                    <h5 className="font-medium">Community Forum</h5>
                    <p className="text-sm text-muted-foreground">Ask questions and get help</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-4">
            <Button onClick={onStart} className="flex-1">
              {tutorial.completed ? 'Review Tutorial' : 'Start Tutorial'}
              <Play className="h-4 w-4 ml-2" />
            </Button>
            {progress === 100 && !tutorial.completed && (
              <Button onClick={onComplete} variant="outline">
                Mark Complete
                <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TutorialPreview;
