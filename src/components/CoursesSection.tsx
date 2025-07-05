
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'No-Code Fundamentals',
      description: 'Start your journey with the basics of no-code development. Perfect for complete beginners.',
      level: 'Beginner',
      duration: '4 weeks',
      students: '2.5k',
      rating: 4.9,
      price: 'Free',
      image: '/placeholder.svg',
    },
    {
      title: 'Advanced Bubble Development',
      description: 'Master complex Bubble.io applications with advanced workflows and database design.',
      level: 'Advanced',
      duration: '8 weeks',
      students: '1.2k',
      rating: 4.8,
      price: '$299',
      image: '/placeholder.svg',
    },
    {
      title: 'Webflow Mastery',
      description: 'Create stunning, responsive websites with Webflow. From design to deployment.',
      level: 'Intermediate',
      duration: '6 weeks',
      students: '1.8k',
      rating: 4.9,
      price: '$199',
      image: '/placeholder.svg',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Advanced':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive course library designed to take you 
            from beginner to professional no-code developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                    {course.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <Button className="w-full hero-gradient text-white hover:opacity-90">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
