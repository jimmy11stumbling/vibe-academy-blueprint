import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp, 
  User, 
  Star,
  Play,
  CheckCircle,
  Target,
  Calendar,
  Award,
  Code,
  Users,
  Activity,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userStats, setUserStats] = useState({
    coursesCompleted: 12,
    coursesInProgress: 3,
    totalCourses: 45,
    certificatesEarned: 8,
    studyStreak: 7,
    totalStudyTime: 142,
    skillLevel: 'Intermediate',
    nextMilestone: 'Advanced Developer'
  });

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      type: 'course_completed',
      title: 'Completed "Lovable 2.0 Fundamentals"',
      timestamp: '2 hours ago',
      platform: 'Lovable 2.0',
      points: 150
    },
    {
      id: 2,
      type: 'certificate_earned',
      title: 'Earned "No-Code Expert" Certificate',
      timestamp: '1 day ago',
      platform: 'General',
      points: 500
    },
    {
      id: 3,
      type: 'project_completed',
      title: 'Built E-commerce Dashboard',
      timestamp: '2 days ago',
      platform: 'Cursor',
      points: 300
    },
    {
      id: 4,
      type: 'lesson_completed',
      title: 'Completed "AI-Powered Development Workflow"',
      timestamp: '3 days ago',
      platform: 'Windsurf',
      points: 75
    }
  ]);

  const [currentCourses, setCurrentCourses] = useState([
    {
      id: 'windsurf-advanced',
      title: 'Advanced Windsurf Development',
      platform: 'Windsurf',
      progress: 75,
      nextLesson: 'Cascade AI Optimization',
      estimatedTime: '45 min',
      difficulty: 'Advanced'
    },
    {
      id: 'cursor-mastery',
      title: 'Cursor IDE Mastery',
      platform: 'Cursor',
      progress: 60,
      nextLesson: 'AI Pair Programming',
      estimatedTime: '30 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'replit-collaboration',
      title: 'Replit Team Collaboration',
      platform: 'Replit',
      progress: 40,
      nextLesson: 'Real-time Code Sharing',
      estimatedTime: '25 min',
      difficulty: 'Beginner'
    }
  ]);

  const [upcomingDeadlines, setUpcomingDeadlines] = useState([
    {
      id: 1,
      title: 'Complete Bolt Full-Stack Project',
      dueDate: '2024-01-20',
      priority: 'high',
      type: 'project'
    },
    {
      id: 2,
      title: 'Submit Claude Code Portfolio',
      dueDate: '2024-01-25',
      priority: 'medium',
      type: 'assignment'
    },
    {
      id: 3,
      title: 'Take V0 Certification Exam',
      dueDate: '2024-01-30',
      priority: 'low',
      type: 'exam'
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_completed': return CheckCircle;
      case 'certificate_earned': return Award;
      case 'project_completed': return Code;
      case 'lesson_completed': return BookOpen;
      default: return Activity;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Developer!</h1>
          <p className="text-muted-foreground">
            Continue your journey to master no-code development platforms
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                  <p className="text-2xl font-bold">{userStats.coursesCompleted}</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Study Streak</p>
                  <p className="text-2xl font-bold">{userStats.studyStreak} days</p>
                </div>
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                  <p className="text-2xl font-bold">{userStats.certificatesEarned}</p>
                </div>
                <Award className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <p className="text-2xl font-bold">{userStats.totalStudyTime}h</p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Learning Progress */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Learning Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{Math.round((userStats.coursesCompleted / userStats.totalCourses) * 100)}%</span>
                      </div>
                      <Progress value={(userStats.coursesCompleted / userStats.totalCourses) * 100} className="h-2" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{userStats.coursesCompleted}</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{userStats.coursesInProgress}</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-600">{userStats.totalCourses - userStats.coursesCompleted - userStats.coursesInProgress}</p>
                        <p className="text-xs text-muted-foreground">Not Started</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Current Courses */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Continue Learning
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/academy">View All</Link>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentCourses.map((course) => (
                      <div key={course.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h4 className="font-medium">{course.title}</h4>
                            <Badge variant="outline">{course.platform}</Badge>
                          </div>
                          <Badge variant="secondary">{course.difficulty}</Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-1" />
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-sm text-muted-foreground">
                            Next: {course.nextLesson} • {course.estimatedTime}
                          </div>
                          <Button size="sm" asChild>
                            <Link to={`/academy/course/${course.id}`}>
                              <Play className="h-3 w-3 mr-1" />
                              Continue
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Activities */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => {
                      const IconComponent = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-start gap-3">
                          <IconComponent className="h-4 w-4 mt-1 text-primary" />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{activity.title}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{activity.timestamp}</span>
                              <span>•</span>
                              <span className="text-primary">+{activity.points} pts</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Upcoming Deadlines */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className={`p-3 rounded-lg border ${getPriorityColor(deadline.priority)}`}>
                        <h4 className="font-medium text-sm">{deadline.title}</h4>
                        <p className="text-xs mt-1">Due: {new Date(deadline.dueDate).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Skill Level */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5" />
                      Skill Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{userStats.skillLevel}</div>
                      <p className="text-sm text-muted-foreground">Current Level</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to {userStats.nextMilestone}</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <Button className="w-full" size="sm">
                      <Rocket className="h-3 w-3 mr-1" />
                      Level Up
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>My Learning Path</CardTitle>
                <p className="text-muted-foreground">Track your progress across all platforms</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentCourses.map((course) => (
                    <Card key={course.id} className="border">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <Badge variant="outline" className="mt-1">{course.platform}</Badge>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <Button className="w-full" size="sm" asChild>
                            <Link to={`/academy/course/${course.id}`}>Continue Learning</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>My Projects</CardTitle>
                <p className="text-muted-foreground">Showcase your built applications</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Projects Yet</h3>
                  <p className="text-muted-foreground mb-4">Start building amazing applications with no-code platforms</p>
                  <Button asChild>
                    <Link to="/projects">
                      <Rocket className="h-4 w-4 mr-2" />
                      Start Building
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 mt-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Achievements & Certificates</CardTitle>
                <p className="text-muted-foreground">Your learning milestones and certifications</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(userStats.certificatesEarned)].map((_, index) => (
                    <Card key={index} className="border bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                      <CardContent className="p-4 text-center">
                        <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <h4 className="font-medium">Certificate #{index + 1}</h4>
                        <p className="text-sm text-muted-foreground">Platform Mastery</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;