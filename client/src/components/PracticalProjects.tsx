
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  ExternalLink, 
  GitHub, 
  Play, 
  CheckCircle, 
  Clock, 
  Users,
  Star,
  Zap,
  Database,
  Smartphone,
  Globe,
  ShoppingCart,
  MessageSquare,
  FileText,
  Calculator,
  Calendar
} from 'lucide-react';

interface PracticalProject {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  platforms: string[];
  skills: string[];
  type: 'web-app' | 'mobile-app' | 'automation' | 'e-commerce' | 'social' | 'productivity';
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  completed: boolean;
}

const PracticalProjects = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const projects: PracticalProject[] = [
    {
      id: 'todo-app-lovable',
      title: 'Advanced Todo Application',
      description: 'A full-featured task management app with user authentication, categories, and real-time collaboration',
      difficulty: 'beginner',
      estimatedTime: '4 hours',
      platforms: ['Lovable 2.0'],
      skills: ['Database Design', 'User Authentication', 'Real-time Updates', 'Responsive Design'],
      type: 'web-app',
      features: [
        'User registration and login',
        'Task creation and management',
        'Categories and tags',
        'Due dates and reminders',
        'Real-time collaboration',
        'Mobile responsive design'
      ],
      technologies: ['React', 'Supabase', 'Authentication', 'Real-time Database'],
      completed: false
    },
    {
      id: 'blog-platform-cursor',
      title: 'Personal Blog Platform',
      description: 'A complete blogging platform with CMS capabilities, SEO optimization, and comment system',
      difficulty: 'intermediate',
      estimatedTime: '8 hours',
      platforms: ['Cursor', 'Lovable 2.0'],
      skills: ['Content Management', 'SEO', 'Database Relations', 'User Interface Design'],
      type: 'web-app',
      features: [
        'Rich text editor',
        'Post scheduling',
        'Comment system',
        'SEO optimization',
        'Image management',
        'Admin dashboard'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Rich Text Editor'],
      completed: false
    },
    {
      id: 'ecommerce-store-bolt',
      title: 'E-commerce Store',
      description: 'Complete online store with product catalog, shopping cart, and payment integration',
      difficulty: 'advanced',
      estimatedTime: '12 hours',
      platforms: ['Bolt', 'Base44'],
      skills: ['E-commerce Logic', 'Payment Integration', 'Inventory Management', 'Security'],
      type: 'e-commerce',
      features: [
        'Product catalog with search',
        'Shopping cart functionality',
        'Payment processing',
        'Order management',
        'Customer accounts',
        'Admin dashboard'
      ],
      technologies: ['React', 'Express', 'Stripe', 'Database'],
      completed: false
    },
    {
      id: 'social-media-app-replit',
      title: 'Social Media Dashboard',
      description: 'A social media management tool with post scheduling, analytics, and multi-platform support',
      difficulty: 'intermediate',
      estimatedTime: '10 hours',
      platforms: ['Replit', 'Windsurf'],
      skills: ['API Integration', 'Data Visualization', 'Real-time Updates', 'Social Media APIs'],
      type: 'social',
      features: [
        'Multi-platform posting',
        'Post scheduling',
        'Analytics dashboard',
        'Content calendar',
        'Team collaboration',
        'Performance metrics'
      ],
      technologies: ['React', 'Node.js', 'Social Media APIs', 'Charts'],
      completed: false
    },
    {
      id: 'mobile-expense-tracker-rork',
      title: 'Mobile Expense Tracker',
      description: 'Native mobile app for tracking expenses with categorization and financial insights',
      difficulty: 'advanced',
      estimatedTime: '15 hours',
      platforms: ['Rork'],
      skills: ['Mobile Development', 'Data Visualization', 'Local Storage', 'Financial Calculations'],
      type: 'mobile-app',
      features: [
        'Expense categorization',
        'Receipt photo capture',
        'Financial insights',
        'Budget tracking',
        'Offline functionality',
        'Data export'
      ],
      technologies: ['React Native', 'Mobile Storage', 'Camera API', 'Charts'],
      completed: false
    },
    {
      id: 'ai-chatbot-claude',
      title: 'AI Customer Service Chatbot',
      description: 'Intelligent chatbot with natural language processing and knowledge base integration',
      difficulty: 'advanced',
      estimatedTime: '6 hours',
      platforms: ['Claude Code', 'Gemini CLI'],
      skills: ['AI Integration', 'Natural Language Processing', 'Knowledge Management', 'Conversation Design'],
      type: 'productivity',
      features: [
        'Natural language understanding',
        'Knowledge base integration',
        'Multi-language support',
        'Conversation history',
        'Admin dashboard',
        'Analytics and reporting'
      ],
      technologies: ['AI APIs', 'Natural Language Processing', 'Database', 'Chat Interface'],
      completed: false
    },
    {
      id: 'ui-component-library-v0',
      title: 'Component Library',
      description: 'Reusable UI component library with documentation and interactive examples',
      difficulty: 'intermediate',
      estimatedTime: '8 hours',
      platforms: ['V0', 'Cursor'],
      skills: ['Component Design', 'Documentation', 'Design Systems', 'Accessibility'],
      type: 'web-app',
      features: [
        'Reusable components',
        'Interactive documentation',
        'Design system tokens',
        'Accessibility features',
        'Code examples',
        'NPM publishing'
      ],
      technologies: ['React', 'Storybook', 'Design Tokens', 'Accessibility'],
      completed: false
    }
  ];

  const projectTypes = [
    { id: 'all', name: 'All Projects', icon: <Globe className="h-4 w-4" /> },
    { id: 'web-app', name: 'Web Apps', icon: <Globe className="h-4 w-4" /> },
    { id: 'mobile-app', name: 'Mobile Apps', icon: <Smartphone className="h-4 w-4" /> },
    { id: 'e-commerce', name: 'E-commerce', icon: <ShoppingCart className="h-4 w-4" /> },
    { id: 'social', name: 'Social Media', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'productivity', name: 'Productivity', icon: <Calendar className="h-4 w-4" /> }
  ];

  const platforms = [
    'all', 'Lovable 2.0', 'Cursor', 'Replit', 'Bolt', 'Windsurf', 'Claude Code', 'Gemini CLI', 'Base44', 'V0', 'Rork'
  ];

  const difficulties = [
    'all', 'beginner', 'intermediate', 'advanced'
  ];

  const filteredProjects = projects.filter(project => {
    const matchesType = selectedType === 'all' || project.type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    const matchesPlatform = selectedPlatform === 'all' || project.platforms.includes(selectedPlatform);
    return matchesType && matchesDifficulty && matchesPlatform;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'web-app': return <Globe className="h-4 w-4" />;
      case 'mobile-app': return <Smartphone className="h-4 w-4" />;
      case 'e-commerce': return <ShoppingCart className="h-4 w-4" />;
      case 'social': return <MessageSquare className="h-4 w-4" />;
      case 'productivity': return <Calendar className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  const ProjectCard = ({ project }: { project: PracticalProject }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {getTypeIcon(project.type)}
            <div>
              <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
              <div className="flex gap-2">
                <Badge className={getDifficultyColor(project.difficulty)}>
                  {project.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {project.type}
                </Badge>
              </div>
            </div>
          </div>
          {project.completed && (
            <CheckCircle className="h-6 w-6 text-green-500" />
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {project.estimatedTime}
          </span>
          <span className="flex items-center gap-1">
            <Code className="h-3 w-3" />
            {project.skills.length} skills
          </span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Platforms:</h4>
          <div className="flex flex-wrap gap-1">
            {project.platforms.map((platform, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {platform}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-muted-foreground">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 hero-gradient text-white">
            <Play className="h-4 w-4 mr-2" />
            Start Project
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4" />
          </Button>
          {project.demoUrl && (
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Practical Projects</h2>
        <p className="text-muted-foreground">
          Build real-world applications that demonstrate full-stack development skills
        </p>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">All Projects</TabsTrigger>
          <TabsTrigger value="challenges">Weekly Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          {/* Filters */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {projectTypes.map(type => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.icon}
                  <span className="ml-2">{type.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty === 'all' ? 'All Levels' : difficulty}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <Button
                  key={platform}
                  variant={selectedPlatform === platform ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform === 'all' ? 'All Platforms' : platform}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-6">
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Weekly Challenges</h3>
            <p className="text-muted-foreground">
              New coding challenges released every week to test your skills
            </p>
            <Button className="mt-4 hero-gradient text-white">
              <Zap className="h-4 w-4 mr-2" />
              Coming Soon
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PracticalProjects;
