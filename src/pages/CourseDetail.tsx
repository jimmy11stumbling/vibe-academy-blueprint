
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Download, 
  Certificate, 
  CheckCircle, 
  PlayCircle,
  FileText,
  Award,
  Globe,
  Smartphone,
  Code
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [enrolledLessons, setEnrolledLessons] = useState<number[]>([]);

  // Mock course data - in real app this would come from API
  const course = {
    id: 1,
    title: 'Complete Bubble Bootcamp',
    subtitle: 'Master No-Code Web App Development',
    description: 'Build powerful web applications without writing a single line of code. This comprehensive course takes you from absolute beginner to advanced Bubble developer.',
    longDescription: 'In this intensive bootcamp, you\'ll learn everything you need to know about Bubble, the world\'s most popular no-code platform. We\'ll start with the fundamentals and work our way up to building complex, real-world applications that you can actually deploy and monetize.',
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'SJ',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior No-Code Developer with 5+ years experience building applications for Fortune 500 companies.',
      rating: 4.9,
      students: 15420,
      courses: 12
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    level: 'Beginner to Advanced',
    duration: '12 hours',
    students: 2847,
    rating: 4.9,
    reviews: 356,
    price: 149,
    originalPrice: 299,
    language: 'English',
    lastUpdated: 'December 2024',
    features: [
      'Lifetime access to course materials',
      'Certificate of completion',
      'Direct instructor support',
      '30-day money-back guarantee',
      'Mobile and desktop access',
      'Downloadable resources'
    ],
    skills: [
      'Bubble fundamentals',
      'Database design',
      'User authentication',
      'API integrations',
      'Responsive design',
      'App deployment'
    ],
    curriculum: [
      {
        id: 1,
        title: 'Introduction to Bubble',
        lessons: [
          { id: 1, title: 'Welcome to the Course', duration: '5:30', type: 'video', isPreview: true },
          { id: 2, title: 'Setting up your Bubble Account', duration: '8:15', type: 'video', isPreview: false },
          { id: 3, title: 'Understanding the Interface', duration: '12:45', type: 'video', isPreview: false },
          { id: 4, title: 'Your First App', duration: '15:30', type: 'practical', isPreview: false }
        ]
      },
      {
        id: 2,
        title: 'Design Fundamentals',
        lessons: [
          { id: 5, title: 'Elements and Styling', duration: '18:20', type: 'video', isPreview: false },
          { id: 6, title: 'Responsive Design Principles', duration: '22:10', type: 'video', isPreview: false },
          { id: 7, title: 'Building Your First Page', duration: '25:45', type: 'practical', isPreview: false },
          { id: 8, title: 'Design Challenge', duration: '30:00', type: 'assignment', isPreview: false }
        ]
      },
      {
        id: 3,
        title: 'Database & Data Types',
        lessons: [
          { id: 9, title: 'Understanding Databases', duration: '16:30', type: 'video', isPreview: false },
          { id: 10, title: 'Creating Data Types', duration: '20:15', type: 'video', isPreview: false },
          { id: 11, title: 'Data Relationships', duration: '24:20', type: 'video', isPreview: false },
          { id: 12, title: 'Database Project', duration: '35:00', type: 'project', isPreview: false }
        ]
      },
      {
        id: 4,
        title: 'User Authentication',
        lessons: [
          { id: 13, title: 'Sign Up & Login Flows', duration: '19:45', type: 'video', isPreview: false },
          { id: 14, title: 'User Profiles', duration: '17:30', type: 'video', isPreview: false },
          { id: 15, title: 'Privacy & Security', duration: '14:20', type: 'video', isPreview: false },
          { id: 16, title: 'Auth Implementation', duration: '28:15', type: 'practical', isPreview: false }
        ]
      },
      {
        id: 5,
        title: 'Advanced Features',
        lessons: [
          { id: 17, title: 'API Integrations', duration: '26:30', type: 'video', isPreview: false },
          { id: 18, title: 'Workflows & Logic', duration: '32:45', type: 'video', isPreview: false },
          { id: 19, title: 'Payment Integration', duration: '24:15', type: 'video', isPreview: false },
          { id: 20, title: 'Final Project', duration: '60:00', type: 'project', isPreview: false }
        ]
      }
    ]
  };

  const handleEnrollLesson = (lessonId: number) => {
    setEnrolledLessons(prev => [...prev, lessonId]);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="h-4 w-4" />;
      case 'practical': return <Code className="h-4 w-4" />;
      case 'assignment': return <FileText className="h-4 w-4" />;
      case 'project': return <Award className="h-4 w-4" />;
      default: return <PlayCircle className="h-4 w-4" />;
    }
  };

  const totalLessons = course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = enrolledLessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Info */}
              <div className="lg:col-span-2">
                <Badge variant="secondary" className="mb-4">{course.level}</Badge>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.subtitle}</p>
                <p className="text-lg leading-relaxed mb-6">{course.description}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>{course.language}</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4 p-4 glass-card rounded-lg border border-border/50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                    <AvatarFallback className="hero-gradient text-white">
                      {course.instructor.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>{course.instructor.rating} ⭐ instructor rating</span>
                      <span>{course.instructor.students.toLocaleString()} students</span>
                      <span>{course.instructor.courses} courses</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Preview Card */}
              <div className="lg:col-span-1">
                <Card className="glass-card border-border/50 sticky top-24">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Play className="h-6 w-6 mr-2" />
                        Preview Course
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold">${course.price}</span>
                        <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        50% Off Limited Time
                      </Badge>
                    </div>

                    <Button size="lg" className="w-full hero-gradient text-white hover:opacity-90 mb-4">
                      Enroll Now
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mb-4">
                      30-day money-back guarantee
                    </p>

                    {/* What's Included */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">This course includes:</h4>
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="curriculum" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Course Curriculum</h2>
                <div className="text-sm text-muted-foreground">
                  {totalLessons} lessons • {course.duration} total
                </div>
              </div>

              {/* Progress */}
              {enrolledLessons.length > 0 && (
                <Card className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Your Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {completedLessons}/{totalLessons} lessons completed
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {Math.round(progressPercentage)}% complete
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Sections */}
              <div className="space-y-4">
                {course.curriculum.map((section) => (
                  <Card key={section.id} className="glass-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {section.lessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {getLessonIcon(lesson.type)}
                            <div>
                              <h4 className="font-medium">{lesson.title}</h4>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{lesson.duration}</span>
                                <Badge variant="outline" className="text-xs">
                                  {lesson.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {enrolledLessons.includes(lesson.id) && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                            {lesson.isPreview ? (
                              <Button size="sm" variant="outline">
                                Preview
                              </Button>
                            ) : (
                              <Button 
                                size="sm" 
                                onClick={() => handleEnrollLesson(lesson.id)}
                                disabled={enrolledLessons.includes(lesson.id)}
                              >
                                {enrolledLessons.includes(lesson.id) ? 'Completed' : 'Start'}
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-lg leading-relaxed mb-6">{course.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
                    <div className="space-y-2">
                      {course.skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration} on-demand video</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <span>Access on mobile and TV</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Certificate className="h-4 w-4 text-muted-foreground" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Instructor Tab */}
            <TabsContent value="instructor" className="space-y-6">
              <Card className="glass-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                      <AvatarFallback className="hero-gradient text-white text-xl">
                        {course.instructor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                      <p className="text-lg text-muted-foreground mb-4">{course.instructor.bio}</p>
                      
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{course.instructor.rating}</div>
                          <div className="text-sm text-muted-foreground">Instructor Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{course.instructor.students.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{course.instructor.courses}</div>
                          <div className="text-sm text-muted-foreground">Courses</div>
                        </div>
                      </div>
                      
                      <Button variant="outline">View Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                  <div className="text-center p-6 glass-card rounded-lg border border-border/50">
                    <div className="text-4xl font-bold mb-2">{course.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">{course.reviews} reviews</div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    {/* Sample reviews - in real app these would come from API */}
                    {[
                      {
                        id: 1,
                        name: 'John Smith',
                        rating: 5,
                        date: '2 weeks ago',
                        comment: 'Excellent course! Sarah explains everything clearly and the projects are very practical. I built my first app and it\'s already live!'
                      },
                      {
                        id: 2,
                        name: 'Maria Garcia',
                        rating: 5,
                        date: '1 month ago',
                        comment: 'Best no-code course I\'ve taken. The curriculum is well-structured and I love the hands-on approach. Highly recommended!'
                      },
                      {
                        id: 3,
                        name: 'David Chen',
                        rating: 4,
                        date: '2 months ago',
                        comment: 'Great content and instructor. Could use more advanced topics but perfect for beginners to intermediate level.'
                      }
                    ].map((review) => (
                      <Card key={review.id} className="glass-card border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
