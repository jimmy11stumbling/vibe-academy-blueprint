import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, Trophy, Clock, Target, TrendingUp, 
  CheckCircle, Star, Award, Users, Calendar 
} from 'lucide-react';

interface LearningStats {
  totalModulesCompleted: number;
  totalModulesAvailable: number;
  totalTimeSpent: number;
  certificationsEarned: number;
  currentStreak: number;
  skillsAcquired: string[];
  recentActivity: Array<{
    type: 'lesson' | 'exercise' | 'certification' | 'project';
    title: string;
    platform: string;
    date: string;
  }>;
}

const mockStats: LearningStats = {
  totalModulesCompleted: 12,
  totalModulesAvailable: 24,
  totalTimeSpent: 4800, // minutes
  certificationsEarned: 3,
  currentStreak: 7,
  skillsAcquired: [
    'Chat-driven Development',
    'AI-Assisted Coding',
    'WebContainer Technology',
    'Mobile Development',
    'UI Component Design',
    'Full-stack Architecture'
  ],
  recentActivity: [
    {
      type: 'certification',
      title: 'Bolt WebContainer Specialist',
      platform: 'Bolt',
      date: '2024-01-15'
    },
    {
      type: 'lesson',
      title: 'Advanced V0 UI Patterns',
      platform: 'V0',
      date: '2024-01-14'
    },
    {
      type: 'project',
      title: 'Real-time Collaboration Platform',
      platform: 'Bolt',
      date: '2024-01-12'
    },
    {
      type: 'exercise',
      title: 'Claude CLI Refactoring',
      platform: 'Claude Code',
      date: '2024-01-10'
    }
  ]
};

const platformProgress = [
  { platform: 'Lovable 2.0', completed: 8, total: 10, icon: '🚀' },
  { platform: 'Cursor', completed: 5, total: 6, icon: '🎯' },
  { platform: 'Bolt', completed: 6, total: 6, icon: '⚡' },
  { platform: 'Claude Code', completed: 4, total: 8, icon: '🤖' },
  { platform: 'Gemini CLI', completed: 3, total: 5, icon: '💎' },
  { platform: 'Base44', completed: 2, total: 7, icon: '🧱' },
  { platform: 'V0', completed: 4, total: 6, icon: '🎨' },
  { platform: 'Rork', completed: 1, total: 8, icon: '📱' },
  { platform: 'Windsurf', completed: 0, total: 4, icon: '🏢' },
  { platform: 'Replit', completed: 7, total: 8, icon: '🔄' }
];

const upcomingDeadlines = [
  {
    title: 'Gemini CLI Advanced Project',
    platform: 'Gemini CLI',
    dueDate: '2024-01-20',
    type: 'Final Project'
  },
  {
    title: 'Base44 Enterprise Certification',
    platform: 'Base44',
    dueDate: '2024-01-25',
    type: 'Certification Exam'
  },
  {
    title: 'Rork Mobile App Deployment',
    platform: 'Rork',
    dueDate: '2024-02-01',
    type: 'Project Submission'
  }
];

export default function LearningDashboard() {
  const overallProgress = (mockStats.totalModulesCompleted / mockStats.totalModulesAvailable) * 100;
  const hoursSpent = Math.round(mockStats.totalTimeSpent / 60);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="h-4 w-4" />;
      case 'exercise': return <Target className="h-4 w-4" />;
      case 'certification': return <Trophy className="h-4 w-4" />;
      case 'project': return <Star className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Progress</p>
                <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time Spent</p>
                <p className="text-2xl font-bold">{hoursSpent}h</p>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Across all platforms</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Certifications</p>
                <p className="text-2xl font-bold">{mockStats.certificationsEarned}</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Professional certificates</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold">{mockStats.currentStreak} days</p>
              </div>
              <Award className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformProgress.map((platform) => {
                  const progress = (platform.completed / platform.total) * 100;
                  return (
                    <div key={platform.platform} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{platform.icon}</span>
                          <span className="font-medium">{platform.platform}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {platform.completed}/{platform.total}
                          </span>
                          {platform.completed === platform.total && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStats.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded">
                    <div className="p-2 bg-muted rounded">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.platform} • {activity.date}
                      </p>
                    </div>
                    <Badge variant="outline">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Acquired</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {mockStats.skillsAcquired.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="justify-center p-2">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted rounded">
                <h4 className="font-medium mb-2">Skill Development Recommendations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Continue with mobile development to complete Rork certification</li>
                  <li>• Explore enterprise features in Windsurf for business applications</li>
                  <li>• Practice advanced UI patterns in V0 for design expertise</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4" />
                      <div>
                        <p className="font-medium">{deadline.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {deadline.platform} • {deadline.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{deadline.dueDate}</p>
                      <Badge variant="outline" size="sm">
                        Due Soon
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded">
                <h4 className="font-medium">Complete Gemini CLI Module</h4>
                <p className="text-sm text-muted-foreground">2 lessons remaining • Est. 2 hours</p>
                <Button size="sm" className="mt-2">Continue Learning</Button>
              </div>
              <div className="p-3 border rounded">
                <h4 className="font-medium">Start Base44 Enterprise Features</h4>
                <p className="text-sm text-muted-foreground">New module available • Est. 4 hours</p>
                <Button size="sm" variant="outline" className="mt-2">Start Module</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}