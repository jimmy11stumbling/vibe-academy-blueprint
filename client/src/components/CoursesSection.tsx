
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, BookOpen, Video, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'No-Code Platform Mastery',
      description: 'Complete guide to understanding and leveraging modern no-code development platforms for rapid application development.',
      instructor: 'AI Development Team',
      duration: '8 hours',
      students: '2.5K',
      rating: 4.9,
      level: 'Beginner to Advanced',
      type: 'Interactive Course',
      modules: 12,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      topics: ['Platform Overview', 'AI Integration', 'Deployment Strategies', 'Best Practices']
    },
    {
      id: 2,
      title: 'AI-Powered Development Workflow',
      description: 'Learn to integrate AI tools into your development process for maximum productivity and code quality.',
      instructor: 'Tech Innovation Lab',
      duration: '6 hours',
      students: '1.8K',
      rating: 4.8,
      level: 'Intermediate',
      type: 'Hands-on Workshop',
      modules: 8,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      topics: ['AI Assistants', 'Code Generation', 'Testing Automation', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'Platform Architecture Deep Dive',
      description: 'Technical analysis of how leading no-code platforms are built and how to make architectural decisions.',
      instructor: 'Platform Architecture Group',
      duration: '10 hours',
      students: '950',
      rating: 4.7,
      level: 'Advanced',
      type: 'Technical Analysis',
      modules: 15,
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop',
      topics: ['System Design', 'Scalability', 'Security', 'Integration Patterns']
    }
  ];

  const getLevelColor = (level: string) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
    if (level.includes('Intermediate')) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
    if (level.includes('Advanced')) return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
    return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Learning</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master No-Code
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Development
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courses and tutorials to help you become proficient with 
            modern AI-powered development platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="glass-card hover:border-primary/20 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="mb-2">
                    {course.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  By {course.instructor}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{course.modules} modules</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group" asChild>
                  <Link to={`/courses/${course.id}`}>
                    <Video className="h-4 w-4 mr-2" />
                    Start Learning
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/courses">
              <Code className="h-4 w-4 mr-2" />
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
