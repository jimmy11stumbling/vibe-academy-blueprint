
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'No-Code Fundamentals',
      description: 'Master the basics of no-code development with hands-on projects',
      level: 'Beginner',
      duration: '6 weeks',
      students: '2.1K',
      rating: '4.9',
      modules: 12,
      image: '🚀',
      skills: ['Bubble', 'Zapier', 'Airtable'],
      price: 'Free',
      color: 'from-primary to-accent',
    },
    {
      title: 'Advanced Web Apps',
      description: 'Build complex applications with advanced no-code tools',
      level: 'Intermediate',
      duration: '8 weeks',
      students: '1.5K',
      rating: '4.8',
      modules: 16,
      image: '⚡',
      skills: ['Webflow', 'Bubble', 'Integromat'],
      price: '$49',
      color: 'from-accent to-warning',
    },
    {
      title: 'Mobile App Development',
      description: 'Create native mobile apps without coding',
      level: 'Intermediate',
      duration: '10 weeks',
      students: '980',
      rating: '4.7',
      modules: 20,
      image: '📱',
      skills: ['Adalo', 'Glide', 'FlutterFlow'],
      price: '$79',
      color: 'from-primary to-success',
    },
  ];

  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Popular Courses
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Start Your Journey with
            <span className="block hero-gradient bg-clip-text text-transparent">
              Proven Learning Paths
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose from our carefully crafted courses designed to take you from beginner to professional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group glass-card hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl opacity-20 absolute -top-4 -right-4 transform rotate-12">
                    {course.image}
                  </span>
                  <span className="text-4xl z-10">{course.image}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {course.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>{course.modules} interactive modules</span>
                </div>

                <Button className="w-full hero-gradient text-white hover:opacity-90 group-hover:scale-105 transition-all duration-200">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
