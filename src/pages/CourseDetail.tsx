
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, Users, Star, ArrowRight, Play, BookOpen, CheckCircle, 
  Download, Share2, Heart, MessageCircle, ChevronLeft 
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);

  // Mock course data - in real app, fetch based on ID
  const course = {
    id: 1,
    title: 'Bubble Fundamentals',
    description: 'Master the basics of Bubble development and build your first web application from scratch. This comprehensive course covers everything from database design to deploying your app.',
    level: 'Beginner',
    duration: '8 hours',
    students: 2450,
    rating: 4.9,
    reviews: 156,
    price: 'Free',
    originalPrice: '$79',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    instructor: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      title: 'Senior No-Code Developer',
      students: 12500,
      courses: 8
    },
    curriculum: [
      {
        title: 'Getting Started',
        lessons: [
          { title: 'Introduction to Bubble', duration: '5:30', completed: true },
          { title: 'Setting up your account', duration: '3:20', completed: true },
          { title: 'Understanding the interface', duration: '8:45', completed: false }
        ]
      },
      {
        title: 'Database Design',
        lessons: [
          { title: 'Data types and structures', duration: '12:15', completed: false },
          { title: 'Creating your first database', duration: '15:30', completed: false },
          { title: 'Relationships and privacy rules', duration: '18:20', completed: false }
        ]
      },
      {
        title: 'Building Your App',
        lessons: [
          { title: 'Page design basics', duration: '20:10', completed: false },
          { title: 'Responsive design', duration: '25:45', completed: false },
          { title: 'Workflows and actions', duration: '22:30', completed: false }
        ]
      }
    ],
    features: [
      'Lifetime access',
      'Mobile and desktop friendly',
      'Certificate of completion',
      'Direct instructor support',
      'Project files included',
      'Community access'
    ],
    requirements: [
      'Basic computer skills',
      'Internet connection',
      'No prior coding experience needed'
    ]
  };

  const totalLessons = course.curriculum.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.curriculum.reduce((acc, module) => 
    acc + module.lessons.filter(lesson => lesson.completed).length, 0
  );
  const progress = (completedLessons / totalLessons) * 100;

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In real app, handle enrollment logic
  };

  const handleLessonClick = (moduleIndex: number, lessonIndex: number) => {
    if (isEnrolled) {
      setCurrentLesson(moduleIndex * 10 + lessonIndex); // Simple lesson tracking
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/courses')}
            className="mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Header */}
              <div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating} ({course.reviews} reviews)
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {totalLessons} lessons
                  </span>
                </div>
              </div>

              {/* Progress (if enrolled) */}
              {isEnrolled && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{completedLessons} of {totalLessons} lessons completed</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Course Content Tabs */}
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum" className="space-y-4">
                  {course.curriculum.map((module, moduleIndex) => (
                    <Card key={moduleIndex}>
                      <CardHeader>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div 
                              key={lessonIndex}
                              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                                isEnrolled ? 'hover:bg-muted/50' : 'opacity-60'
                              }`}
                              onClick={() => handleLessonClick(moduleIndex, lessonIndex)}
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : isEnrolled ? (
                                  <Play className="h-5 w-5 text-primary" />
                                ) : (
                                  <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                                )}
                                <span className={lesson.completed ? 'line-through text-muted-foreground' : ''}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{course.instructor.name}</h3>
                          <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">{course.instructor.students.toLocaleString()}</span>
                              <span className="text-muted-foreground"> students</span>
                            </div>
                            <div>
                              <span className="font-medium">{course.instructor.courses}</span>
                              <span className="text-muted-foreground"> courses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="text-center py-8 text-muted-foreground">
                    Reviews feature coming soon...
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Course Materials</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Download className="h-5 w-5 text-primary" />
                              <span>Project Files & Templates</span>
                            </div>
                            <Badge variant="outline">ZIP</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Download className="h-5 w-5 text-primary" />
                              <span>Cheat Sheets & References</span>
                            </div>
                            <Badge variant="outline">PDF</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enrollment Card */}
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
                      {course.price}
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {course.originalPrice}
                      </div>
                    )}
                  </div>

                  {!isEnrolled ? (
                    <Button 
                      className="w-full hero-gradient text-white hover:opacity-90 mb-4"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="w-full mb-4" variant="outline">
                      Continue Learning
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  )}

                  <div className="flex gap-2 mb-6">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <h4 className="font-semibold">This course includes:</h4>
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
