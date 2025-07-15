import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  Target, 
  Search,
  Filter,
  Grid,
  List,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { completeAcademyModules } from '@/data/completeAcademyData';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extract all modules from all platforms
  const allModules = Object.entries(completeAcademyModules).flatMap(([platform, modules]) => 
    modules.map(module => ({ ...module, platformName: platform }))
  );

  // Featured FREE courses
  const freeCourses = [
    {
      id: 'app-planning-fundamentals',
      title: 'App Planning & Strategy Fundamentals',
      description: 'Master the essential skill of planning and strategizing full-stack applications before development. Learn to create comprehensive project blueprints that work for any no-code platform.',
      instructor: 'NoCode Academy',
      duration: '3 hours',
      students: '12.5K',
      rating: 4.9,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 8,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
      topics: ['Project Scoping', 'User Journey Mapping', 'Feature Prioritization', 'Technical Architecture', 'MVP Planning'],
      objectives: [
        'Define clear project scope and requirements',
        'Create comprehensive user stories and workflows',
        'Design scalable application architecture',
        'Plan development phases and milestones',
        'Choose the right no-code platform for your project'
      ]
    },
    {
      id: 'master-blueprint-creation',
      title: 'Master Blueprint Creation',
      description: 'Learn to create detailed technical blueprints for full-stack applications. This course covers database design, API planning, UI/UX wireframing, and integration strategies.',
      instructor: 'NoCode Academy',
      duration: '4 hours',
      students: '8.9K',
      rating: 4.8,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 10,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop',
      topics: ['Database Schema Design', 'API Architecture', 'UI/UX Wireframing', 'Integration Planning', 'Deployment Strategy'],
      objectives: [
        'Design efficient database schemas',
        'Plan RESTful API structures',
        'Create detailed UI/UX wireframes',
        'Map integration points and data flows',
        'Develop deployment and scaling strategies'
      ]
    },
    {
      id: 'ai-prompt-engineering',
      title: 'AI Prompt Engineering for No-Code Development',
      description: 'Master the essential skill of prompt engineering to effectively communicate with AI platforms and achieve optimal results for complex full-stack development.',
      instructor: 'NoCode Academy',
      duration: '2.5 hours',
      students: '6.1K',
      rating: 4.7,
      level: 'Beginner',
      type: 'FREE Fundamentals',
      modules: 5,
      price: 'FREE',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop',
      topics: ['Prompt Structure & Clarity', 'Context Setting', 'Iterative Refinement', 'Platform-Specific Prompts', 'Advanced Techniques'],
      objectives: [
        'Write clear and effective prompts',
        'Provide proper context for AI understanding',
        'Use iterative refinement techniques',
        'Adapt prompts for different platforms',
        'Apply advanced prompt engineering strategies'
      ]
    }
  ];

  const filteredModules = allModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty === selectedDifficulty;
    const matchesPlatform = selectedPlatform === 'all' || module.platformName === selectedPlatform;

    return matchesSearch && matchesDifficulty && matchesPlatform;
  });

  const platforms = ['all', ...new Set(allModules.map(m => m.platformName))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Master <span className="hero-gradient bg-clip-text text-transparent">No-Code Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive courses and tutorials to help you become proficient with modern no-code platforms
            </p>
          </div>

          {/* FREE Fundamentals Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="hero-gradient bg-clip-text text-transparent">FREE</span> Fundamentals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential skills for building full-stack applications on any no-code platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {course.type}
                      </Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>

                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.slice(0, 3).map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {course.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/academy" className="flex-1">
                        <Button className="w-full hero-gradient text-white">
                          <Play className="h-4 w-4 mr-2" />
                          Start FREE Course
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform-Specific Courses */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Platform-Specific Courses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dive into specific no-code platforms and master their unique capabilities
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Platforms" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map(platform => (
                    <SelectItem key={platform} value={platform}>
                      {platform === 'all' ? 'All Platforms' : platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map((module) => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{module.platformName}</Badge>
                      <Badge variant="outline" className={
                        module.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {module.difficulty}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {module.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {module.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {module.lessons.length} lessons
                      </span>
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {module.learningObjectives.length} objectives
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Learning Objectives:</p>
                      <div className="space-y-1">
                        {module.learningObjectives.slice(0, 2).map((objective, index) => (
                          <div key={index} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 mr-2 mt-0.5 text-green-500" />
                            {objective}
                          </div>
                        ))}
                        {module.learningObjectives.length > 2 && (
                          <div className="text-sm text-muted-foreground">
                            +{module.learningObjectives.length - 2} more objectives
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/academy/module/${module.id}`} className="flex-1">
                        <Button className="w-full hero-gradient text-white">
                          <Play className="h-4 w-4 mr-2" />
                          Start Module
                        </Button>
                      </Link>
                      <Link to={`/academy/module/${module.id}`}>
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;