import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search,
  Filter,
  Plus,
  Code,
  ExternalLink,
  Star,
  Clock,
  Users,
  Play,
  GitBranch,
  Rocket,
  Zap,
  FileText,
  Eye,
  Download,
  Share2,
  Heart,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  platform: string;
  category: 'web-app' | 'mobile-app' | 'automation' | 'e-commerce' | 'social' | 'productivity';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  technologies: string[];
  features: string[];
  status: 'template' | 'in-progress' | 'completed' | 'featured';
  rating: number;
  likes: number;
  views: number;
  comments: number;
  demoUrl?: string;
  githubUrl?: string;
  createdAt: string;
  author: string;
  thumbnail?: string;
}

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'lovable-todo-advanced',
      title: 'Advanced Todo Application',
      description: 'Feature-rich todo app with real-time collaboration, categories, due dates, and analytics',
      platform: 'Lovable 2.0',
      category: 'productivity',
      difficulty: 'intermediate',
      estimatedTime: '4 hours',
      technologies: ['React', 'TypeScript', 'Real-time Updates', 'Local Storage'],
      features: [
        'Real-time collaboration',
        'Task categories and tags',
        'Due date reminders',
        'Progress analytics',
        'Dark/light theme',
        'Drag & drop interface'
      ],
      status: 'featured',
      rating: 4.8,
      likes: 234,
      views: 1250,
      comments: 45,
      demoUrl: 'https://demo.lovable-todo.com',
      createdAt: '2024-01-10',
      author: 'Lovable Team'
    },
    {
      id: 'cursor-dashboard',
      title: 'Business Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization and advanced filtering',
      platform: 'Cursor',
      category: 'web-app',
      difficulty: 'advanced',
      estimatedTime: '8 hours',
      technologies: ['React', 'D3.js', 'Chart.js', 'API Integration'],
      features: [
        'Real-time data updates',
        'Interactive charts',
        'Advanced filtering',
        'Export functionality',
        'Mobile responsive',
        'Multi-user support'
      ],
      status: 'template',
      rating: 4.9,
      likes: 345,
      views: 2100,
      comments: 67,
      demoUrl: 'https://demo.cursor-dashboard.com',
      createdAt: '2024-01-08',
      author: 'AI Development Team'
    },
    {
      id: 'replit-game',
      title: 'Multiplayer Snake Game',
      description: 'Real-time multiplayer snake game with leaderboards and custom rooms',
      platform: 'Replit',
      category: 'web-app',
      difficulty: 'intermediate',
      estimatedTime: '6 hours',
      technologies: ['JavaScript', 'WebSockets', 'Canvas API', 'Node.js'],
      features: [
        'Real-time multiplayer',
        'Custom game rooms',
        'Global leaderboard',
        'Power-ups and obstacles',
        'Responsive controls',
        'Chat system'
      ],
      status: 'completed',
      rating: 4.6,
      likes: 189,
      views: 890,
      comments: 32,
      demoUrl: 'https://replit.com/@demo/snake-game',
      createdAt: '2024-01-05',
      author: 'Game Dev Community'
    },
    {
      id: 'windsurf-ecommerce',
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration and inventory management',
      platform: 'Windsurf',
      category: 'e-commerce',
      difficulty: 'advanced',
      estimatedTime: '12 hours',
      technologies: ['React', 'Stripe API', 'Database', 'Authentication'],
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment processing',
        'User accounts',
        'Order tracking',
        'Admin dashboard'
      ],
      status: 'template',
      rating: 4.7,
      likes: 456,
      views: 3200,
      comments: 89,
      demoUrl: 'https://demo.windsurf-store.com',
      createdAt: '2024-01-03',
      author: 'E-commerce Experts'
    },
    {
      id: 'bolt-blog',
      title: 'Full-Stack Blog Platform',
      description: 'Complete blogging platform with user authentication, comments, and rich text editor',
      platform: 'Bolt',
      category: 'web-app',
      difficulty: 'advanced',
      estimatedTime: '10 hours',
      technologies: ['Full-Stack', 'Database', 'Authentication', 'Rich Text Editor'],
      features: [
        'User authentication',
        'Rich text editor',
        'Comment system',
        'Tag-based filtering',
        'SEO optimization',
        'Social sharing'
      ],
      status: 'featured',
      rating: 4.8,
      likes: 567,
      views: 4100,
      comments: 123,
      demoUrl: 'https://demo.bolt-blog.com',
      createdAt: '2024-01-01',
      author: 'Full-Stack Team'
    },
    {
      id: 'claude-chatbot',
      title: 'AI Customer Service Bot',
      description: 'Intelligent chatbot with natural language processing and knowledge base integration',
      platform: 'Claude Code',
      category: 'productivity',
      difficulty: 'advanced',
      estimatedTime: '6 hours',
      technologies: ['AI Integration', 'Natural Language Processing', 'Knowledge Base'],
      features: [
        'Natural language understanding',
        'Knowledge base integration',
        'Multi-language support',
        'Conversation history',
        'Admin dashboard',
        'Analytics reporting'
      ],
      status: 'template',
      rating: 4.9,
      likes: 432,
      views: 2800,
      comments: 76,
      createdAt: '2023-12-28',
      author: 'AI Solutions Team'
    },
    {
      id: 'rork-fitness',
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app for workout tracking with health data integration',
      platform: 'Rork',
      category: 'mobile-app',
      difficulty: 'advanced',
      estimatedTime: '15 hours',
      technologies: ['React Native', 'Health APIs', 'Local Storage', 'Charts'],
      features: [
        'Workout logging',
        'Progress tracking',
        'Health data sync',
        'Custom workouts',
        'Social features',
        'Offline functionality'
      ],
      status: 'in-progress',
      rating: 4.5,
      likes: 298,
      views: 1650,
      comments: 54,
      createdAt: '2023-12-25',
      author: 'Mobile Dev Team'
    },
    {
      id: 'v0-components',
      title: 'UI Component Library',
      description: 'Comprehensive React component library with Storybook documentation',
      platform: 'V0',
      category: 'productivity',
      difficulty: 'intermediate',
      estimatedTime: '8 hours',
      technologies: ['React', 'Storybook', 'TypeScript', 'Design System'],
      features: [
        'Reusable components',
        'Interactive documentation',
        'Design system tokens',
        'Accessibility features',
        'NPM publishing',
        'Theme customization'
      ],
      status: 'completed',
      rating: 4.7,
      likes: 389,
      views: 2400,
      comments: 91,
      demoUrl: 'https://storybook.v0-components.com',
      createdAt: '2023-12-20',
      author: 'Design System Team'
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Code },
    { id: 'web-app', name: 'Web Apps', icon: Code },
    { id: 'mobile-app', name: 'Mobile Apps', icon: Users },
    { id: 'e-commerce', name: 'E-commerce', icon: TrendingUp },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'social', name: 'Social', icon: Users },
    { id: 'automation', name: 'Automation', icon: Rocket }
  ];

  const platforms = [
    'all', 'Lovable 2.0', 'Cursor', 'Replit', 'Windsurf', 'Bolt', 
    'Claude Code', 'Gemini CLI', 'Base44', 'V0', 'Rork'
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'all' || project.platform === selectedPlatform;
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'likes':
        return b.likes - a.likes;
      case 'views':
        return b.views - a.views;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'featured':
      default:
        const statusOrder = { featured: 4, completed: 3, template: 2, 'in-progress': 1 };
        return statusOrder[b.status] - statusOrder[a.status];
    }
  });

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'featured':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">⭐ Featured</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-300">✅ Completed</Badge>;
      case 'template':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300">📋 Template</Badge>;
      case 'in-progress':
        return <Badge className="bg-orange-100 text-orange-800 border-orange-300">🚧 In Progress</Badge>;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-50 border-green-200';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'advanced': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="glass-card hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-0">
        {/* Project Thumbnail */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 h-48 rounded-t-lg flex items-center justify-center relative overflow-hidden">
          <div className="text-center space-y-2">
            <Code className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <Badge variant="outline">{project.platform}</Badge>
          </div>
          
          {/* Status badge overlay */}
          <div className="absolute top-4 right-4">
            {getStatusBadge(project.status)}
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.demoUrl && (
              <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                <Eye className="h-3 w-3 mr-1" />
                Demo
              </Button>
            )}
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Play className="h-3 w-3 mr-1" />
              Start
            </Button>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            
            <div className="flex items-center justify-between">
              <Badge variant="outline" className={getDifficultyColor(project.difficulty)}>
                {project.difficulty}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {project.estimatedTime}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Technologies:</p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                {project.rating}
              </div>
              <div className="flex items-center">
                <Heart className="h-3 w-3 mr-1" />
                {project.likes}
              </div>
              <div className="flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                {project.views}
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <GitBranch className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="h-3 w-3" />
              </Button>
              <Button size="sm" className="hero-gradient text-white">
                <Play className="h-3 w-3 mr-1" />
                Start Building
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Project Gallery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Amazing
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore real-world projects built with no-code platforms. Get inspired, 
            learn from examples, and start building your own applications.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, or platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background text-foreground"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background text-foreground"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>
                  {platform === 'all' ? 'All Platforms' : platform}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background text-foreground"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="likes">Most Liked</option>
              <option value="views">Most Viewed</option>
              <option value="newest">Newest</option>
            </select>

            <Button className="hero-gradient text-white">
              <Plus className="h-4 w-4 mr-2" />
              Submit Project
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{projects.length}</p>
              <p className="text-sm text-muted-foreground">Total Projects</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{platforms.length - 1}</p>
              <p className="text-sm text-muted-foreground">Platforms</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{projects.filter(p => p.status === 'featured').length}</p>
              <p className="text-sm text-muted-foreground">Featured</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{projects.reduce((sum, p) => sum + p.views, 0).toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              {sortedProjects.map((project) => (
                <Card key={project.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="h-8 w-8 text-primary" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>
                          {getStatusBadge(project.status)}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{project.platform}</Badge>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {project.rating}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {project.estimatedTime}
                          </span>
                          <Badge className={getDifficultyColor(project.difficulty)}>
                            {project.difficulty}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {project.technologies.slice(0, 4).map((tech, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3 mr-1" />
                              Preview
                            </Button>
                            <Button size="sm" className="hero-gradient text-white">
                              <Play className="h-3 w-3 mr-1" />
                              Start Building
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="glass-card mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8 text-center">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to Build Your Own Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of developers creating amazing applications with no-code platforms. 
              Start your journey today and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient text-white">
                <Plus className="h-4 w-4 mr-2" />
                Start New Project
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/academy">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn First
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;