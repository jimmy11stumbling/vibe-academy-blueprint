import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  BookOpen, 
  Video, 
  Code, 
  Download,
  ExternalLink,
  Star,
  Clock,
  User,
  Filter,
  Bookmark,
  Share,
  Play
} from 'lucide-react';

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const resources = {
    tutorials: [
      {
        id: 1,
        title: 'Getting Started with Lovable 2.0',
        description: 'Complete beginner guide to building your first app with chat-driven development',
        category: 'tutorial',
        difficulty: 'beginner',
        duration: '15 min',
        author: 'Lovable Team',
        rating: 4.8,
        views: '12.5K',
        type: 'video',
        tags: ['lovable', 'beginners', 'full-stack'],
        thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
      },
      {
        id: 2,
        title: 'Mastering Cursor IDE: AI-Powered Development',
        description: 'Advanced techniques for leveraging AI in professional development workflows',
        category: 'tutorial',
        difficulty: 'advanced',
        duration: '32 min',
        author: 'Dev Academy',
        rating: 4.9,
        views: '8.3K',
        type: 'video',
        tags: ['cursor', 'ai', 'productivity'],
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
      },
      {
        id: 3,
        title: 'Bolt Full-Stack Development Guide',
        description: 'Build complete applications entirely in the browser with WebContainer technology',
        category: 'tutorial',
        difficulty: 'intermediate',
        duration: '28 min',
        author: 'StackBlitz',
        rating: 4.7,
        views: '15.2K',
        type: 'video',
        tags: ['bolt', 'full-stack', 'webcontainer'],
        thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop'
      }
    ],
    documentation: [
      {
        id: 4,
        title: 'No-Code Platform Architecture Guide',
        description: 'Deep dive into the technical architecture patterns of modern no-code platforms',
        category: 'documentation',
        difficulty: 'advanced',
        readTime: '45 min',
        author: 'Platform Research',
        rating: 4.6,
        downloads: '2.1K',
        type: 'guide',
        tags: ['architecture', 'technical', 'patterns'],
        format: 'PDF'
      },
      {
        id: 5,
        title: 'AI Model Integration Best Practices',
        description: 'Comprehensive guide to integrating AI models in development tools',
        category: 'documentation',
        difficulty: 'intermediate',
        readTime: '30 min',
        author: 'AI Dev Community',
        rating: 4.8,
        downloads: '3.5K',
        type: 'guide',
        tags: ['ai', 'integration', 'best-practices'],
        format: 'PDF'
      },
      {
        id: 6,
        title: 'Platform Security Framework',
        description: 'Security considerations and implementation guidelines for no-code platforms',
        category: 'documentation',
        difficulty: 'advanced',
        readTime: '25 min',
        author: 'Security Labs',
        rating: 4.9,
        downloads: '1.8K',
        type: 'whitepaper',
        tags: ['security', 'compliance', 'enterprise'],
        format: 'PDF'
      }
    ],
    codeExamples: [
      {
        id: 7,
        title: 'React Component Library Starter',
        description: 'Pre-built components optimized for no-code platform integration',
        category: 'code',
        difficulty: 'intermediate',
        language: 'TypeScript',
        author: 'Open Source',
        rating: 4.5,
        forks: '234',
        stars: '1.2K',
        type: 'repository',
        tags: ['react', 'components', 'typescript'],
        lastUpdated: '2 days ago'
      },
      {
        id: 8,
        title: 'AI Agent Integration Templates',
        description: 'Ready-to-use templates for integrating AI agents into development workflows',
        category: 'code',
        difficulty: 'advanced',
        language: 'Python',
        author: 'AI Collective',
        rating: 4.7,
        forks: '89',
        stars: '567',
        type: 'repository',
        tags: ['ai', 'templates', 'automation'],
        lastUpdated: '1 week ago'
      },
      {
        id: 9,
        title: 'WebContainer Implementation Example',
        description: 'Example implementation of browser-based development environment',
        category: 'code',
        difficulty: 'advanced',
        language: 'JavaScript',
        author: 'WebDev Labs',
        rating: 4.4,
        forks: '156',
        stars: '892',
        type: 'repository',
        tags: ['webcontainer', 'browser', 'runtime'],
        lastUpdated: '5 days ago'
      }
    ],
    tools: [
      {
        id: 10,
        title: 'Platform Performance Analyzer',
        description: 'Tool to analyze and compare performance metrics across different no-code platforms',
        category: 'tool',
        difficulty: 'intermediate',
        platform: 'Web',
        author: 'DevTools Inc',
        rating: 4.3,
        downloads: '5.7K',
        type: 'web-app',
        tags: ['performance', 'analytics', 'comparison'],
        price: 'Free'
      },
      {
        id: 11,
        title: 'Code Generation Optimizer',
        description: 'Optimize AI-generated code for production deployment and performance',
        category: 'tool',
        difficulty: 'advanced',
        platform: 'CLI',
        author: 'CodeOpt',
        rating: 4.6,
        downloads: '3.2K',
        type: 'cli-tool',
        tags: ['optimization', 'ai', 'production'],
        price: '$29/month'
      },
      {
        id: 12,
        title: 'Integration Testing Suite',
        description: 'Automated testing framework for no-code platform integrations',
        category: 'tool',
        difficulty: 'intermediate',
        platform: 'Node.js',
        author: 'TestLab',
        rating: 4.8,
        downloads: '1.9K',
        type: 'framework',
        tags: ['testing', 'automation', 'integration'],
        price: 'Open Source'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Resources', count: 12 },
    { id: 'tutorial', name: 'Tutorials', count: 3 },
    { id: 'documentation', name: 'Documentation', count: 3 },
    { id: 'code', name: 'Code Examples', count: 3 },
    { id: 'tool', name: 'Tools', count: 3 }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const allResources = [
    ...resources.tutorials,
    ...resources.documentation,
    ...resources.codeExamples,
    ...resources.tools
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'guide': case 'whitepaper': return <BookOpen className="h-4 w-4" />;
      case 'repository': return <Code className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTimeDisplay = (resource: any) => {
    if ('duration' in resource && resource.duration) {
      return resource.duration;
    }
    if ('readTime' in resource && resource.readTime) {
      return resource.readTime;
    }
    return null;
  };

  const ResourceCard = ({ resource }: { resource: any }) => {
    const timeDisplay = getTimeDisplay(resource);

    return (
      <Card className="glass-card hover:border-primary/20 transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {getTypeIcon(resource.type)}
              <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                {resource.difficulty}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{resource.rating}</span>
            </div>
          </div>
          <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{resource.description}</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{resource.author}</span>
              </div>
              {timeDisplay && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{timeDisplay}</span>
                </div>
              )}
            </div>
            {resource.views && (
              <span>{resource.views} views</span>
            )}
            {resource.downloads && (
              <span>{resource.downloads} downloads</span>
            )}
            {resource.stars && (
              <span>{resource.stars} stars</span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              {resource.type === 'video' && <Play className="h-3 w-3 mr-1" />}
              {resource.type === 'repository' && <Code className="h-3 w-3 mr-1" />}
              {(resource.type === 'guide' || resource.type === 'whitepaper') && <Download className="h-3 w-3 mr-1" />}
              {resource.type === 'video' ? 'Watch' : 
               resource.type === 'repository' ? 'View Code' : 'Download'}
            </Button>
            <Button size="sm" variant="outline">
              <Bookmark className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="outline">
              <Share className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Resource Library</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive collection of tutorials, documentation, code examples, and tools 
          for no-code platform development
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background text-sm"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background text-sm"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty.id} value={difficulty.id}>
                {difficulty.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredResources.length} of {allResources.length} resources
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-6">
          <div className="space-y-4">
            {filteredResources.map(resource => {
              const timeDisplay = getTimeDisplay(resource);
              
              return (
                <Card key={resource.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getTypeIcon(resource.type)}
                          <h3 className="text-lg font-semibold">{resource.title}</h3>
                          <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                            {resource.difficulty}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{resource.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{resource.author}</span>
                          </div>
                          {timeDisplay && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{timeDisplay}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm">
                          {resource.type === 'video' ? 'Watch' : 
                           resource.type === 'repository' ? 'View Code' : 'Download'}
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            No resources found matching your criteria. Try adjusting your search or filters.
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceLibrary;
