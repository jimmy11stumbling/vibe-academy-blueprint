
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Bubble Fundamentals',
      description: 'Master the basics of Bubble development. Build your first web application from scratch.',
      level: 'Beginner',
      duration: '8 hours',
      students: 2450,
      rating: 4.9,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
      topics: ['Database Design', 'UI/UX', 'Workflows', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Advanced Bubble Development',
      description: 'Take your Bubble skills to the next level with advanced features and optimization techniques.',
      level: 'Advanced',
      duration: '12 hours',
      students: 1230,
      rating: 4.8,
      price: '$99',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      topics: ['API Integrations', 'Custom States', 'Performance', 'Plugins']
    },
    {
      id: 3,
      title: 'Webflow Mastery',
      description: 'Create stunning, responsive websites with Webflow. Perfect for designers and developers.',
      level: 'Intermediate',
      duration: '10 hours',
      students: 1850,
      rating: 4.7,
      price: '$79',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=225&fit=crop',
      topics: ['CMS', 'Interactions', 'E-commerce', 'SEO']
    },
    {
      id: 4,
      title: 'Airtable & Automation',
      description: 'Build powerful databases and automate workflows with Airtable and Zapier.',
      level: 'Beginner',
      duration: '6 hours',
      students: 980,
      rating: 4.6,
      price: '$59',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop',
      topics: ['Database Design', 'Formulas', 'Automations', 'Integrations']
    },
    {
      id: 5,
      title: 'Glide Mobile Apps',
      description: 'Turn spreadsheets into beautiful mobile apps without coding.',
      level: 'Beginner',
      duration: '5 hours',
      students: 1420,
      rating: 4.8,
      price: '$49',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop',
      topics: ['App Design', 'Data Sources', 'User Authentication', 'Publishing']
    },
    {
      id: 6,
      title: 'Complete No-Code Stack',
      description: 'Learn to integrate multiple no-code tools to build complex applications.',
      level: 'Advanced',
      duration: '20 hours',
      students: 650,
      rating: 4.9,
      price: '$199',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=225&fit=crop',
      topics: ['System Architecture', 'Tool Integration', 'Project Management', 'Client Delivery']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your no-code journey with our most loved courses, designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="text-2xl font-bold hero-gradient bg-clip-text text-transparent">
                    {course.price}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {course.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.topics.length - 3} more
                    </Badge>
                  )}
                </div>
                <Button className="w-full hero-gradient text-white hover:opacity-90">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
