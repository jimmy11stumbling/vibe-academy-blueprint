
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award,
  CheckCircle, 
  Lock, 
  Download,
  MessageCircle,
  ThumbsUp,
  Share2
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [enrolledModules, setEnrolledModules] = useState<number[]>([1, 2]);
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);

  // Mock course data
  const course = {
    id: parseInt(id || '1'),
    title: 'Complete No-Code Web Development',
    description: 'Master the art of building powerful web applications without writing a single line of code. Learn Bubble, Webflow, Airtable and more.',
    instructor: 'Sarah Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    instructorBio: 'Senior No-Code Developer with 8+ years of experience building scalable applications.',
    rating: 4.9,
    reviews: 234,
    students: 1250,
    duration: '12 hours',
    lessons: 45,
    level: 'Beginner to Advanced',
    price: 99,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    tags: ['No-Code', 'Web Development', 'Bubble', 'Webflow'],
    lastUpdated: '2024-01-15',
    language: 'English',
    captions: true,
    certificate: true,
    enrolled: false
  };

  const modules = [
    {
      id: 1,
      title: 'Introduction to No-Code',
      lessons: 8,
      duration: '2 hours',
      description: 'Get started with no-code fundamentals',
      locked: false,
      lessons_detail: [
        { id: 1, title: 'What is No-Code?', duration: '15 min', completed: true },
        { id: 2, title: 'No-Code vs Traditional Coding', duration: '20 min', completed: true },
        { id: 3, title: 'Choosing the Right Platform', duration: '25 min', completed: true },
        { id: 4, title: 'Setting Up Your Workspace', duration: '18 min', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Bubble Fundamentals',
      lessons: 12,
      duration: '3 hours',
      description: 'Master Bubble.io for web app development',
      locked: false,
      lessons_detail: [
        { id: 5, title: 'Bubble Interface Overview', duration: '22 min', completed: false },
        { id: 6, title: 'Creating Your First App', duration: '35 min', completed: false },
        { id: 7, title: 'Database Design', duration: '28 min', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Advanced Webflow',
      lessons: 15,
      duration: '4 hours',
      description: 'Build responsive websites with Webflow',
      locked: true,
      lessons_detail: []
    }
  ];

  const reviews = [
    {
      id: 1,
      user: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Excellent course! The instructor explains everything clearly and the projects are very practical.',
      date: '2024-01-10',
      helpful: 24
    },
    {
      id: 2,
      user: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'This course completely changed my approach to web development. Highly recommended!',
      date: '2024-01-08',
      helpful: 18
    }
  ];

  const handleEnrollment = () => {
    console.log('Enrolling in course:', course.id);
    // Enrollment logic would go here
  };

  const toggleLessonComplete = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Link to="/courses" className="text-primary hover:underline text-sm">
                  ← Back to Courses
                </Link>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-2">
                      ${course.price}
                      <span className="text-lg text-muted-foreground line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <Badge variant="destructive" className="mb-4">
                      50% OFF - Limited Time
                    </Badge>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full hero-gradient text-white hover:opacity-90 mb-4"
                    onClick={handleEnrollment}
                  >
                    Enroll Now
                  </Button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration} total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>Downloadable resources</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{course.instructor}</div>
                      <div className="text-sm text-muted-foreground">Instructor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Content Tabs */}
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="mt-8">
              <div className="space-y-6">
                {modules.map((module) => (
                  <Card key={module.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {module.locked ? (
                              <Lock className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <Play className="h-5 w-5 text-primary" />
                            )}
                            {module.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{module.description}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>{module.lessons} lessons</div>
                          <div>{module.duration}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    {!module.locked && module.lessons_detail.length > 0 && (
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          {module.lessons_detail.map((lesson) => (
                            <div 
                              key={lesson.id}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => toggleLessonComplete(lesson.id)}
                                  className="flex-shrink-0"
                                >
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : (
                                    <Play className="h-5 w-5 text-muted-foreground hover:text-primary" />
                                  )}
                                </button>
                                <span className={lesson.completed ? 'line-through text-muted-foreground' : ''}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                      <AvatarFallback className="text-2xl">SC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                      <p className="text-muted-foreground mb-4">{course.instructorBio}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold">4.9</div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">1,250</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">12</div>
                          <div className="text-sm text-muted-foreground">Courses</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">5+</div>
                          <div className="text-sm text-muted-foreground">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Student Reviews</h3>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.user} />
                            <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">{review.user}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground mb-3">{review.comment}</p>
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="text-sm">{review.helpful}</span>
                              </button>
                              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                                <MessageCircle className="h-4 w-4" />
                                <span className="text-sm">Reply</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Is this course suitable for complete beginners?</h4>
                      <p className="text-muted-foreground">Yes! This course is designed for complete beginners with no prior coding experience. We start from the very basics and gradually build up to more advanced concepts.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How long do I have access to the course?</h4>
                      <p className="text-muted-foreground">You have lifetime access to the course content, including all future updates and additions.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Do I get a certificate upon completion?</h4>
                      <p className="text-muted-foreground">Yes, you'll receive a certificate of completion that you can add to your LinkedIn profile or resume.</p>
                    </div>
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

export default CourseDetail;
