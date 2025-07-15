import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Clock, Users, Star, BookOpen, CheckCircle } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Free fundamental courses data
  const fundamentalCourses = [
    {
      id: '1',
      title: 'App Planning & Strategy Fundamentals',
      description: 'Master the art of planning and strategizing your full-stack application before you build',
      duration: '2.5 hours',
      level: 'Beginner',
      rating: 4.9,
      students: 15420,
      instructor: 'Sarah Chen',
      thumbnail: '/placeholder.svg',
      modules: [
        {
          title: 'Understanding Your App Vision',
          lessons: [
            'Defining Your App\'s Core Purpose',
            'Identifying Target Users and Use Cases',
            'Market Research for No-Code Apps',
            'Competitive Analysis Techniques'
          ]
        },
        {
          title: 'Feature Planning & Prioritization',
          lessons: [
            'MVP vs Full Feature Planning',
            'User Story Mapping for No-Code',
            'Feature Prioritization Matrix',
            'Creating Development Roadmaps'
          ]
        },
        {
          title: 'Technical Planning Fundamentals',
          lessons: [
            'Choosing the Right No-Code Platform',
            'Database Structure Planning',
            'User Flow Design',
            'Integration Planning'
          ]
        }
      ],
      projects: [
        'Create a comprehensive app plan document',
        'Design user personas and journey maps',
        'Build a feature prioritization matrix',
        'Develop a technical requirements checklist'
      ]
    },
    {
      id: '2',
      title: 'Master Blueprint Architecture',
      description: 'Learn to create detailed blueprints that serve as the foundation for any full-stack application',
      duration: '3 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 12850,
      instructor: 'Marcus Rodriguez',
      thumbnail: '/placeholder.svg',
      modules: [
        {
          title: 'Blueprint Fundamentals',
          lessons: [
            'What Makes a Great App Blueprint',
            'Blueprint vs Wireframe vs Mockup',
            'Essential Blueprint Components',
            'Industry Standard Practices'
          ]
        },
        {
          title: 'Database Design & Architecture',
          lessons: [
            'Entity Relationship Modeling',
            'No-Code Database Best Practices',
            'Data Flow Planning',
            'Security Considerations'
          ]
        },
        {
          title: 'Frontend Architecture Planning',
          lessons: [
            'Component Hierarchy Design',
            'Navigation Structure Planning',
            'Responsive Design Considerations',
            'State Management Planning'
          ]
        },
        {
          title: 'Integration & API Planning',
          lessons: [
            'Third-Party Service Integration',
            'API Endpoint Planning',
            'Authentication Flow Design',
            'Error Handling Strategies'
          ]
        }
      ],
      projects: [
        'Create a complete database schema',
        'Design component architecture diagrams',
        'Build integration mapping documents',
        'Develop deployment strategy blueprints'
      ]
    },
    {
      id: '3',
      title: 'Prompt Engineering for No-Code Development',
      description: 'Master the art of communicating with AI-powered no-code platforms to build exactly what you envision',
      duration: '2 hours',
      level: 'Beginner',
      rating: 4.7,
      students: 18600,
      instructor: 'Dr. Emily Watson',
      thumbnail: '/placeholder.svg',
      modules: [
        {
          title: 'Prompt Engineering Fundamentals',
          lessons: [
            'Understanding AI-Powered No-Code Platforms',
            'Anatomy of Effective Prompts',
            'Common Prompting Mistakes to Avoid',
            'Platform-Specific Prompt Strategies'
          ]
        },
        {
          title: 'Platform-Specific Prompting',
          lessons: [
            'Lovable 2.0 Chat-Driven Development',
            'Cursor Codebase-Aware Prompting',
            'Replit Agent Communication',
            'Bolt WebContainer Instructions'
          ]
        },
        {
          title: 'Advanced Prompting Techniques',
          lessons: [
            'Iterative Refinement Strategies',
            'Context Management',
            'Debugging Through Prompts',
            'Optimization and Performance Prompts'
          ]
        },
        {
          title: 'Full-Stack Prompting Workflows',
          lessons: [
            'Frontend Development Prompts',
            'Backend Logic Prompts',
            'Database Integration Prompts',
            'Deployment and Testing Prompts'
          ]
        }
      ],
      projects: [
        'Build a prompt library for each platform',
        'Create platform-specific prompt templates',
        'Develop debugging prompt strategies',
        'Build a complete app using only prompts'
      ]
    }
  ];

  const course = fundamentalCourses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
              <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist.</p>
              <Link to="/courses">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/courses" className="hover:text-foreground">Courses</Link>
          <span>/</span>
          <span>Fundamentals</span>
          <span>/</span>
          <span className="text-foreground">{course.title}</span>
        </div>

        {/* Back Button */}
        <Link to="/courses">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="mb-2">FREE COURSE</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{course.description}</p>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>By {course.instructor}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Module {moduleIndex + 1}: {module.title}</h3>
                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center gap-2 text-sm">
                            <Play className="h-3 w-3 text-muted-foreground" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practical Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Practical Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.projects.map((project, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                  <p className="text-sm text-muted-foreground">Full lifetime access</p>
                </div>

                <Button className="w-full mb-4" size="lg">
                  <Play className="h-4 w-4 mr-2" />
                  Start Course
                </Button>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modules:</span>
                    <span className="font-medium">{course.modules.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.modules.slice(0, 3).map((module, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                      <span>{module.title}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                    <span>Build real-world projects</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-3 w-3 text-green-500 mt-1" />
                    <span>Get lifetime access to materials</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;