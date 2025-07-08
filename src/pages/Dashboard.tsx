
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Star, 
  Play, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Calendar,
  Users,
  Target,
  Award,
  Zap
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Loading from '@/components/Loading';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (loading) {
    return <Loading fullScreen text="Loading Dashboard..." />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h1>
            <Button className="hero-gradient text-white">Sign In</Button>
          </div>
        </div>
      </div>
    );
  }

  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete Bubble Development',
      instructor: 'Sarah Johnson',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      nextLesson: 'Advanced Database Relations',
      estimatedTime: '45 min',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Webflow Masterclass',
      instructor: 'Mike Chen',
      progress: 40,
      totalLessons: 18,
      completedLessons: 7,
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop',
      nextLesson: 'Responsive Design Principles',
      estimatedTime: '30 min',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Airtable for Business',
      instructor: 'Emily Davis',
      progress: 90,
      totalLessons: 12,
      completedLessons: 11,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      nextLesson: 'Automation with Zapier',
      estimatedTime: '25 min',
      difficulty: 'Advanced'
    }
  ];

  const achievements = [
    { icon: Trophy, title: 'First Course Complete', earned: true },
    { icon: Star, title: '5-Star Rating', earned: true },
    { icon: Target, title: 'Goal Achiever', earned: true },
    { icon: Zap, title: 'Quick Learner', earned: false },
    { icon: Users, title: 'Community Helper', earned: false },
    { icon: Award, title: 'Expert Level', earned: false }
  ];

  const stats = [
    { label: 'Courses Enrolled', value: '3', icon: BookOpen },
    { label: 'Hours Learned', value: '47', icon: Clock },
    { label: 'Certificates', value: '1', icon: Award },
    { label: 'Projects Built', value: '5', icon: Target }
  ];

  const recentActivity = [
    {
      type: 'course_progress',
      title: 'Completed "Database Design" lesson',
      course: 'Complete Bubble Development',
      time: '2 hours ago',
      icon: CheckCircle
    },
    {
      type: 'achievement',
      title: 'Earned "Goal Achiever" badge',
      time: '1 day ago',
      icon: Trophy
    },
    {
      type: 'course_start',
      title: 'Started "Webflow Masterclass"',
      time: '3 days ago',
      icon: Play
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} alt={user.fullName} />
                <AvatarFallback className="hero-gradient text-white text-xl">
                  {user.fullName?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome back, {user.fullName || 'Student'}!</h1>
                <p className="text-muted-foreground">Continue your no-code learning journey</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Continue Learning */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <Card key={course.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold mb-1">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {course.difficulty}
                              </Badge>
                            </div>
                            <div className="mb-3">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">
                                Next: {course.nextLesson}
                              </div>
                              <Button size="sm" className="hero-gradient text-white">
                                Continue
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Recent Activity */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                <Card className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                          <div className="p-2 rounded-full bg-primary/10">
                            <activity.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            {activity.course && (
                              <p className="text-sm text-muted-foreground">{activity.course}</p>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Next lesson:</span>
                          <span className="ml-1 font-medium">{course.nextLesson}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Estimated time: {course.estimatedTime}
                        </div>
                      </div>
                      
                      <Button className="w-full hero-gradient text-white">
                        Continue Learning
                        <Play className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`glass-card border-border/50 ${achievement.earned ? 'bg-primary/5 border-primary/20' : 'opacity-60'}`}>
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        achievement.earned ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        <achievement.icon className={`h-8 w-8 ${
                          achievement.earned ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      {achievement.earned ? (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          Locked
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Learning Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 pb-6 border-b border-border/50 last:border-0 last:pb-0">
                        <div className="p-3 rounded-full bg-primary/10">
                          <activity.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{activity.title}</h4>
                          {activity.course && (
                            <p className="text-sm text-muted-foreground mb-2">{activity.course}</p>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
