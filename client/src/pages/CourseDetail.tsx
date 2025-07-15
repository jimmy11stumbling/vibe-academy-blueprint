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
  Share2,
  ArrowLeft
} from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [enrolledModules, setEnrolledModules] = useState<number[]>([1, 2]);
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);

  // Free courses data (same as in CoursesSection)
  const freeCourses = [
    {
      id: 1,
      title: 'App Planning & Strategy Fundamentals',
      description: 'Master the art of planning full-stack applications across any of the 10 no-code platforms. Learn to define requirements, user flows, and technical specifications.',
      instructor: 'NoCode Academy',
      duration: '3 hours',
      students: '5.2K',
      rating: 4.9,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 6,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      topics: ['App Requirements Analysis', 'User Story Mapping', 'Feature Prioritization', 'Technology Selection', 'Project Roadmapping']
    },
    {
      id: 2,
      title: 'Master Blueprint Creation',
      description: 'Create comprehensive blueprints for full-stack applications. Learn wireframing, database design, API planning, and system architecture for any platform.',
      instructor: 'NoCode Academy',
      duration: '4 hours',
      students: '4.8K',
      rating: 4.8,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 8,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
      topics: ['Wireframe Design', 'Database Schema Planning', 'API Architecture', 'Component Mapping', 'Integration Planning']
    },
    {
      id: 3,
      title: 'Prompt Engineering for Full-Stack Apps',
      description: 'Master the essential skill of prompt engineering to effectively communicate with AI platforms and achieve optimal results for complex full-stack development.',
      instructor: 'NoCode Academy',
      duration: '2.5 hours',
      students: '6.1K',
      rating: 4.7,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 5,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=300&fit=crop',
      topics: ['Prompt Structure & Clarity', 'Context Setting', 'Iterative Refinement', 'Platform-Specific Prompts', 'Advanced Techniques']
    }
  ];

  const course = freeCourses.find(c => c.id === parseInt(courseId || '1'));

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Course Not Found</h1>
              <Link to="/courses">
                <Button className="mt-4">Back to Courses</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

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

          <div className="mb-8">
            <Link to="/courses" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="aspect-video mb-8 rounded-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {course.type}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <p className="text-muted-foreground">By {course.instructor}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">{course.description}</p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                    <p className="text-sm text-muted-foreground">Limited time offer</p>
                  </div>

                  <Button size="lg" className="w-full mb-4 bg-green-600 hover:bg-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Start FREE Course
                  </Button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Duration</span>
                      </div>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Students</span>
                      </div>
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        <span>Rating</span>
                      </div>
                      <span>{course.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Modules</span>
                      </div>
                      <span>{course.modules}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Mobile and desktop compatible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Practical exercises</span>
                  </div>
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