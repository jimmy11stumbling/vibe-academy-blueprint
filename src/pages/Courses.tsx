
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Star, ArrowRight, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Bubble Fundamentals',
      description: 'Master the basics of Bubble development. Build your first web application from scratch.',
      level: 'Beginner',
      category: 'bubble',
      duration: '8 hours',
      students: 2450,
      rating: 4.9,
      price: 'Free',
      originalPrice: '$79',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
      topics: ['Database Design', 'UI/UX', 'Workflows', 'Responsive Design'],
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Bubble Development',
      description: 'Take your Bubble skills to the next level with advanced features and optimization techniques.',
      level: 'Advanced',
      category: 'bubble',
      duration: '12 hours',
      students: 1230,
      rating: 4.8,
      price: '$99',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      topics: ['API Integrations', 'Custom States', 'Performance', 'Plugins'],
      featured: false
    },
    {
      id: 3,
      title: 'Webflow Mastery',
      description: 'Create stunning, responsive websites with Webflow. Perfect for designers and developers.',
      level: 'Intermediate',
      category: 'webflow',
      duration: '10 hours',
      students: 1850,
      rating: 4.7,
      price: '$79',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=225&fit=crop',
      topics: ['CMS', 'Interactions', 'E-commerce', 'SEO'],
      featured: true
    },
    {
      id: 4,
      title: 'Airtable & Automation',
      description: 'Build powerful databases and automate workflows with Airtable and Zapier.',
      level: 'Beginner',
      category: 'automation',
      duration: '6 hours',
      students: 980,
      rating: 4.6,
      price: '$59',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop',
      topics: ['Database Design', 'Formulas', 'Automations', 'Integrations'],
      featured: false
    },
    {
      id: 5,
      title: 'Glide Mobile Apps',
      description: 'Turn spreadsheets into beautiful mobile apps without coding.',
      level: 'Beginner',
      category: 'mobile',
      duration: '5 hours',
      students: 1420,
      rating: 4.8,
      price: '$49',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop',
      topics: ['App Design', 'Data Sources', 'User Authentication', 'Publishing'],
      featured: false
    },
    {
      id: 6,
      title: 'Complete No-Code Stack',
      description: 'Learn to integrate multiple no-code tools to build complex applications.',
      level: 'Advanced',
      category: 'integration',
      duration: '20 hours',
      students: 650,
      rating: 4.9,
      price: '$199',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=225&fit=crop',
      topics: ['System Architecture', 'Tool Integration', 'Project Management', 'Client Delivery'],
      featured: true
    },
    {
      id: 7,
      title: 'Notion Workspace Design',
      description: 'Create powerful workspaces and databases with Notion for personal and team productivity.',
      level: 'Beginner',
      category: 'productivity',
      duration: '4 hours',
      students: 1680,
      rating: 4.7,
      price: '$39',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=225&fit=crop',
      topics: ['Database Setup', 'Templates', 'Automation', 'Team Collaboration'],
      featured: false
    },
    {
      id: 8,
      title: 'Zapier Automation Mastery',
      description: 'Connect your apps and automate workflows to save time and reduce manual work.',
      level: 'Intermediate',
      category: 'automation',
      duration: '7 hours',
      students: 920,
      rating: 4.6,
      price: '$69',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      topics: ['Triggers', 'Actions', 'Multi-step Zaps', 'Error Handling'],
      featured: false
    }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'bubble', label: 'Bubble' },
    { value: 'webflow', label: 'Webflow' },
    { value: 'automation', label: 'Automation' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'integration', label: 'Integration' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const featuredCourses = filteredCourses.filter(course => course.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group cursor-pointer">
      <div 
        className="aspect-video bg-muted rounded-t-lg overflow-hidden"
        onClick={() => navigate(`/course/${course.id}`)}
      >
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
          <div className="text-right">
            <div className="text-2xl font-bold hero-gradient bg-clip-text text-transparent">
              {course.price}
            </div>
            {course.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                {course.originalPrice}
              </div>
            )}
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
        <Button 
          className="w-full hero-gradient text-white hover:opacity-90"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          View Course
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
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
            <h1 className="text-4xl font-bold mb-4">All Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master no-code development with our comprehensive course library. 
              From beginner basics to advanced techniques.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
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
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
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
          </div>

          {/* Featured Courses */}
          {featuredCourses.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                Featured Courses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          )}

          {/* All Courses */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {searchQuery || selectedLevel !== 'all' || selectedCategory !== 'all' ? 'Search Results' : 'All Courses'}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredCourses.length} courses)
              </span>
            </h2>
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No courses found matching your criteria.</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('all');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Courses;
