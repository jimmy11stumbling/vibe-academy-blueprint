
import React from 'react';
import Navigation from '@/components/Navigation';
import UserProfile from '@/components/UserProfile';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const upcomingDeadlines = [
    { course: 'Advanced Bubble Development', task: 'Final Project', due: '2024-01-20', daysLeft: 3 },
    { course: 'Webflow Masterclass', task: 'Portfolio Review', due: '2024-01-25', daysLeft: 8 },
    { course: 'Zapier Automation', task: 'Workflow Assignment', due: '2024-01-30', daysLeft: 13 }
  ];

  const recentActivity = [
    { type: 'completed', course: 'Bubble Basics', lesson: 'Database Design', time: '2 hours ago' },
    { type: 'started', course: 'Webflow Advanced', lesson: 'Custom Interactions', time: '1 day ago' },
    { type: 'achievement', course: 'General', lesson: 'Completed 10 courses!', time: '3 days ago' },
    { type: 'completed', course: 'Airtable Pro', lesson: 'API Integration', time: '5 days ago' }
  ];

  const recommendedCourses = [
    {
      title: 'Advanced No-Code APIs',
      instructor: 'Sarah Chen',
      duration: '8 hours',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      title: 'Mobile App Development',
      instructor: 'Marcus Rodriguez',
      duration: '12 hours',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop'
    },
    {
      title: 'E-commerce Mastery',
      instructor: 'Emma Thompson',
      duration: '15 hours',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop'
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
              <p className="text-muted-foreground mb-6">
                Please log in to access your dashboard.
              </p>
              <Button className="w-full hero-gradient text-white">
                <Link to="/">Go Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.fullName}!</h1>
            <p className="text-muted-foreground">
              Continue your no-code journey and track your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <BookOpen className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground">Courses Enrolled</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500/10 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">8</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <Award className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">156</div>
                        <div className="text-sm text-muted-foreground">Hours Learned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Continue Learning */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Continue Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop"
                      alt="Course thumbnail"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">Advanced Bubble Development</h3>
                      <p className="text-sm text-muted-foreground">Lesson 8: Advanced Workflows</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Progress value={75} className="flex-1" />
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                    </div>
                    <Button size="sm" className="hero-gradient text-white">
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'completed' ? 'bg-green-500' :
                          activity.type === 'started' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.lesson}</div>
                          <div className="text-sm text-muted-foreground">{activity.course}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Deadlines */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-medium text-sm">{deadline.task}</div>
                      <div className="text-xs text-muted-foreground">{deadline.course}</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{deadline.due}</span>
                        <Badge variant={deadline.daysLeft <= 5 ? 'destructive' : 'secondary'} className="text-xs">
                          {deadline.daysLeft} days left
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommended Courses */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recommended
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedCourses.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">{course.instructor}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{course.level}</Badge>
                          <span className="text-xs text-muted-foreground">{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    <Link to="/courses" className="flex items-center gap-2">
                      View All Courses
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
