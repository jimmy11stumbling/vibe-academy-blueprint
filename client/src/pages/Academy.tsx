import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play, 
  Search,
  Award,
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
  Crown,
  Rocket,
  GraduationCap,
  Code,
  Brain,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  allAcademyModules, 
  foundationModules, 
  getModulesByCategory, 
  getFreeModules,
  AcademyModule 
} from '@/data/academyModules';

const Academy = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'foundation', name: 'Foundation', icon: Target },
    { id: 'platform-specific', name: 'Platform-Specific', icon: Code },
    { id: 'advanced', name: 'Advanced', icon: Brain },
    { id: 'specialization', name: 'Specialization', icon: Crown }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredModules = allAcademyModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const freeModules = getFreeModules();
  const stats = {
    totalCourses: allAcademyModules.length,
    freeCourses: freeModules.length,
    totalStudents: allAcademyModules.reduce((sum, module) => sum + module.students, 0),
    avgRating: (allAcademyModules.reduce((sum, module) => sum + module.rating, 0) / allAcademyModules.length).toFixed(1)
  };

  const ModuleCard = ({ module }: { module: AcademyModule }) => (
    <Card key={module.id} className="glass-card hover:border-primary/20 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
              module.category === 'foundation' ? 'from-green-400 to-green-600' :
              module.category === 'platform-specific' ? 'from-blue-400 to-blue-600' :
              module.category === 'advanced' ? 'from-purple-400 to-purple-600' :
              'from-orange-400 to-orange-600'
            } flex items-center justify-center text-white`}>
              {module.category === 'foundation' ? <Target className="h-6 w-6" /> :
               module.category === 'platform-specific' ? <Code className="h-6 w-6" /> :
               module.category === 'advanced' ? <Brain className="h-6 w-6" /> :
               <Crown className="h-6 w-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={module.price === 'free' ? 'default' : 'secondary'} className="text-xs">
                  {module.price === 'free' ? 'FREE' : 'PREMIUM'}
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">
                  {module.difficulty}
                </Badge>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                {module.title}
              </h3>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{module.rating}</span>
            </div>
            <div className="text-xs text-muted-foreground">{module.students.toLocaleString()} students</div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {module.description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{module.lessons.length} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{module.instructor.split(',')[0]}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            What you'll learn
          </h4>
          <ul className="space-y-1">
            {module.learningObjectives.slice(0, 3).map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{objective}</span>
              </li>
            ))}
            {module.learningObjectives.length > 3 && (
              <li className="text-xs text-muted-foreground ml-5">
                +{module.learningObjectives.length - 3} more objectives
              </li>
            )}
          </ul>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex gap-2">
          <Button className="flex-1" asChild>
            <Link to={`/academy/course/${module.id}`}>
              <Play className="h-4 w-4 mr-2" />
              {module.price === 'free' ? 'Start Free' : 'View Course'}
            </Link>
          </Button>
          {module.certification && (
            <Button variant="outline" size="sm">
              <Award className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Academy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Master NoCode
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Development
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive courses and hands-on tutorials to master no-code and AI-powered development platforms. 
            Start with free foundation courses and advance to platform-specific expertise.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.totalCourses}</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.freeCourses}</div>
              <div className="text-sm text-muted-foreground">Free Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{(stats.totalStudents / 1000).toFixed(1)}K</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.avgRating}</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Free Foundation Courses Highlight */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Crown className="h-4 w-4" />
              FREE Foundation Courses
            </div>
            <h2 className="text-2xl font-bold mb-2">Start Your Journey</h2>
            <p className="text-muted-foreground">
              Master the fundamentals with our comprehensive free courses. Build a solid foundation before diving into platform-specific training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foundationModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-background to-muted/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
                  <IconComponent className="h-3 w-3" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {category.name === 'All Courses' ? 'All Courses' : `${category.name} Courses`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredModules.length} course{filteredModules.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>

              {filteredModules.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or browse a different category.
                  </p>
                  <Button onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Learning Paths Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Structured Learning Paths
              </CardTitle>
              <p className="text-muted-foreground">
                Follow curated learning paths designed to take you from beginner to expert in specific areas.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Foundation Track</h3>
                      <p className="text-sm text-muted-foreground">3 courses • Free</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Essential skills for planning, documenting, and selecting the right no-code platform.
                  </p>
                  <Progress value={33} className="mb-2" />
                  <p className="text-xs text-muted-foreground mb-4">1 of 3 courses completed</p>
                  <Button size="sm" className="w-full">Continue Learning</Button>
                </div>

                <div className="border rounded-lg p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Development Track</h3>
                      <p className="text-sm text-muted-foreground">5 courses • Premium</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master AI-powered platforms like Lovable, Cursor, and Claude for rapid development.
                  </p>
                  <Progress value={0} className="mb-2" />
                  <p className="text-xs text-muted-foreground mb-4">Not started</p>
                  <Button size="sm" className="w-full" variant="outline">View Track</Button>
                </div>

                <div className="border rounded-lg p-6 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full-Stack Mastery</h3>
                      <p className="text-sm text-muted-foreground">8 courses • Premium</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete mastery of full-stack development across multiple no-code platforms.
                  </p>
                  <Progress value={0} className="mb-2" />
                  <p className="text-xs text-muted-foreground mb-4">Prerequisites required</p>
                  <Button size="sm" className="w-full" variant="outline">View Requirements</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of developers who have transformed their careers with our comprehensive no-code education platform. 
                Start with free courses and unlock premium content as you advance.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/academy/course/project-planning-fundamentals">
                    <Rocket className="h-4 w-4 mr-2" />
                    Start Free Course
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/platforms">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Explore Platforms
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academy;