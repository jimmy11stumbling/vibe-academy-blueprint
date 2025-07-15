
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Star, Play, Search, Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'web-apps', label: 'Web Applications' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'automation', label: 'Automation' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'ai', label: 'AI Integration' },
    { value: 'databases', label: 'Databases' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Bubble Bootcamp',
      description: 'Master Bubble from basics to advanced features. Build 5 real-world applications including a marketplace and SaaS platform.',
      instructor: 'Sarah Johnson',
      instructorAvatar: 'SJ',
      instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      level: 'beginner',
      category: 'web-apps',
      duration: '12 hours',
      students: 2847,
      rating: 4.9,
      reviews: 356,
      price: 149,
      originalPrice: 299,
      isPopular: true,
      isBestseller: true,
      tags: ['Bubble', 'Web Apps', 'Database'],
      lastUpdated: 'December 2024'
    },
    {
      id: 2,
      title: 'Webflow Masterclass',
      description: 'Design and develop stunning websites with Webflow. Learn responsive design, CMS, and e-commerce integration.',
      instructor: 'Mike Chen',
      instructorAvatar: 'MC',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
      level: 'intermediate',
      category: 'web-apps',
      duration: '8 hours',
      students: 1923,
      rating: 4.8,
      reviews: 234,
      price: 99,
      originalPrice: 199,
      isPopular: false,
      isBestseller: false,
      tags: ['Webflow', 'Design', 'CMS'],
      lastUpdated: 'November 2024'
    },
    {
      id: 3,
      title: 'Airtable & Zapier Automation',
      description: 'Automate your workflows with powerful integrations. Build custom business processes without code.',
      instructor: 'Emma Davis',
      instructorAvatar: 'ED',
      instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      level: 'beginner',
      category: 'automation',
      duration: '6 hours',
      students: 1456,
      rating: 4.7,
      reviews: 189,
      price: 79,
      originalPrice: 159,
      isPopular: false,
      isBestseller: false,
      tags: ['Airtable', 'Zapier', 'Automation'],
      lastUpdated: 'October 2024'
    },
    {
      id: 4,
      title: 'No-Code Mobile Apps',
      description: 'Build native mobile apps using Glide and FlutterFlow. Deploy to iOS and Android app stores.',
      instructor: 'Alex Rodriguez',
      instructorAvatar: 'AR',
      instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
      level: 'intermediate',
      category: 'mobile',
      duration: '10 hours',
      students: 987,
      rating: 4.8,
      reviews: 156,
      price: 129,
      originalPrice: 259,
      isPopular: true,
      isBestseller: false,
      tags: ['Mobile', 'Glide', 'FlutterFlow'],
      lastUpdated: 'December 2024'
    },
    {
      id: 5,
      title: 'AI-Powered No-Code Apps',
      description: 'Integration AI capabilities into your no-code applications. Use GPT, image recognition, and more.',
      instructor: 'Dr. Lisa Park',
      instructorAvatar: 'LP',
      instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      level: 'advanced',
      category: 'ai',
      duration: '9 hours',
      students: 743,
      rating: 4.9,
      reviews: 98,
      price: 199,
      originalPrice: 399,
      isPopular: false,
      isBestseller: true,
      tags: ['AI', 'OpenAI', 'Machine Learning'],
      lastUpdated: 'December 2024'
    },
    {
      id: 6,
      title: 'E-commerce with No-Code',
      description: 'Build complete online stores using Shopify, Webflow Ecommerce, and payment integrations.',
      instructor: 'Tom Wilson',
      instructorAvatar: 'TW',
      instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      level: 'intermediate',
      category: 'e-commerce',
      duration: '11 hours',
      students: 1678,
      rating: 4.6,
      reviews: 267,
      price: 139,
      originalPrice: 279,
      isPopular: false,
      isBestseller: false,
      tags: ['E-commerce', 'Shopify', 'Payments'],
      lastUpdated: 'November 2024'
    },
    {
      id: 7,
      title: 'Advanced Database Design',
      description: 'Master complex database relationships, optimization, and data modeling for scalable applications.',
      instructor: 'Jennifer Lee',
      instructorAvatar: 'JL',
      instructorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
      level: 'advanced',
      category: 'databases',
      duration: '7 hours',
      students: 567,
      rating: 4.8,
      reviews: 87,
      price: 119,
      originalPrice: 239,
      isPopular: false,
      isBestseller: false,
      tags: ['Database', 'Data Modeling', 'Optimization'],
      lastUpdated: 'September 2024'
    },
    {
      id: 8,
      title: 'Notion Workspace Mastery',
      description: 'Transform your productivity with advanced Notion techniques, templates, and automation.',
      instructor: 'Ryan Taylor',
      instructorAvatar: 'RT',
      instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
      level: 'beginner',
      category: 'automation',
      duration: '5 hours',
      students: 2134,
      rating: 4.7,
      reviews: 312,
      price: 69,
      originalPrice: 139,
      isPopular: true,
      isBestseller: false,
      tags: ['Notion', 'Productivity', 'Templates'],
      lastUpdated: 'October 2024'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
      default:
        return b.students - a.students;
    }
  });

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group relative">
      {course.isBestseller && (
        <div className="absolute -top-3 left-4 z-10">
          <Badge className="bg-orange-500 text-white">Bestseller</Badge>
        </div>
      )}
      {course.isPopular && !course.isBestseller && (
        <div className="absolute -top-3 left-4 z-10">
          <Badge className="hero-gradient text-white">Popular</Badge>
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
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </CardTitle>
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

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {course.rating} ({course.reviews})
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {course.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${course.price}</span>
            {course.originalPrice > course.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <Link to={`/course/${course.id}`}>
            <Button size="sm" className="hero-gradient text-white hover:opacity-90">
              View Course
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">No-Code Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the latest no-code tools and build amazing applications. 
              Learn from industry experts with hands-on projects.
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {sortedCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Courses Grid */}
          {sortedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {sortedCourses.length > 0 && sortedCourses.length >= 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Courses
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Courses;
