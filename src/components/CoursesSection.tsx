
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Users, Star, Play, BookOpen, Award } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Bubble Bootcamp',
      description: 'Master Bubble from basics to advanced features. Build 5 real-world applications including a marketplace and SaaS platform.',
      instructor: 'Sarah Johnson',
      instructorAvatar: 'SJ',
      instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      level: 'Beginner to Advanced',
      duration: '12 hours',
      students: 2847,
      rating: 4.9,
      reviews: 356,
      price: '$149',
      originalPrice: '$299',
      isPopular: true,
      tags: ['Bubble', 'Web Apps', 'Database']
    },
    {
      id: 2,
      title: 'Webflow Masterclass',
      description: 'Design and develop stunning websites with Webflow. Learn responsive design, CMS, and e-commerce integration.',
      instructor: 'Mike Chen',
      instructorAvatar: 'MC',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
      level: 'Intermediate',
      duration: '8 hours',
      students: 1923,
      rating: 4.8,
      reviews: 234,
      price: '$99',
      originalPrice: '$199',
      isPopular: false,
      tags: ['Webflow', 'Design', 'CMS']
    },
    {
      id: 3,
      title: 'Airtable & Zapier Automation',
      description: 'Automate your workflows with powerful integrations. Build custom business processes without code.',
      instructor: 'Emma Davis',
      instructorAvatar: 'ED',
      instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      level: 'Beginner',
      duration: '6 hours',
      students: 1456,
      rating: 4.7,
      reviews: 189,
      price: '$79',
      originalPrice: '$159',
      isPopular: false,
      tags: ['Airtable', 'Zapier', 'Automation']
    },
    {
      id: 4,
      title: 'No-Code Mobile Apps',
      description: 'Build native mobile apps using Glide and FlutterFlow. Deploy to iOS and Android app stores.',
      instructor: 'Alex Rodriguez',
      instructorAvatar: 'AR',
      instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
      level: 'Intermediate',
      duration: '10 hours',
      students: 987,
      rating: 4.8,
      reviews: 156,
      price: '$129',
      originalPrice: '$259',
      isPopular: true,
      tags: ['Mobile', 'Glide', 'FlutterFlow']
    },
    {
      id: 5,
      title: 'AI-Powered No-Code Apps',
      description: 'Integration AI capabilities into your no-code applications. Use GPT, image recognition, and more.',
      instructor: 'Dr. Lisa Park',
      instructorAvatar: 'LP',
      instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      level: 'Advanced',
      duration: '9 hours',
      students: 743,
      rating: 4.9,
      reviews: 98,
      price: '$199',
      originalPrice: '$399',
      isPopular: false,
      tags: ['AI', 'OpenAI', 'Machine Learning']
    },
    {
      id: 6,
      title: 'E-commerce with No-Code',
      description: 'Build complete online stores using Shopify, Webflow Ecommerce, and payment integrations.',
      instructor: 'Tom Wilson',
      instructorAvatar: 'TW',
      instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      level: 'Beginner to Intermediate',
      duration: '11 hours',
      students: 1678,
      rating: 4.6,
      reviews: 267,
      price: '$139',
      originalPrice: '$279',
      isPopular: false,
      tags: ['E-commerce', 'Shopify', 'Payments']
    }
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Courses</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Master No-Code with
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Expert-Led Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn from industry experts and build real-world applications. 
            Our comprehensive courses take you from beginner to professional no-code developer.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group relative">
              {course.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="hero-gradient text-white">Most Popular</Badge>
                </div>
              )}
              
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Play className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={course.instructorImage} alt={course.instructor} />
                    <AvatarFallback className="text-xs hero-gradient text-white">
                      {course.instructorAvatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{course.instructor}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.level}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {course.rating} ({course.reviews})
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="hero-gradient text-white hover:opacity-90">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Stats */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Courses
            <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
