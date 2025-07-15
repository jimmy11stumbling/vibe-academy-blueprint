import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Heart, 
  Eye,
  GitBranch,
  Calendar,
  User,
  Zap
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PracticalProjects } from '@/components/PracticalProjects';
import ProjectShowcase from '@/components/ProjectShowcase';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 45 },
    { id: 'saas', name: 'SaaS', count: 12 },
    { id: 'ecommerce', name: 'E-commerce', count: 8 },
    { id: 'marketplace', name: 'Marketplace', count: 6 },
    { id: 'portfolio', name: 'Portfolio', count: 10 },
    { id: 'dashboard', name: 'Dashboard', count: 9 }
  ];

  const projects = [
    {
      id: 1,
      title: 'TaskFlow - Project Management SaaS',
      description: 'A comprehensive project management platform built with Bubble, featuring team collaboration, time tracking, and advanced reporting.',
      creator: 'Sarah Johnson',
      creatorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
      category: 'saas',
      tools: ['Bubble', 'Stripe', 'SendGrid'],
      rating: 4.9,
      views: 2847,
      likes: 234,
      liveUrl: 'https://taskflow-demo.app',
      createdAt: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'EcoStore - Sustainable Shopping',
      description: 'An eco-friendly e-commerce platform showcasing sustainable products with integrated carbon footprint tracking.',
      creator: 'Mike Chen',
      creatorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      category: 'ecommerce',
      tools: ['Webflow', 'Shopify', 'Airtable'],
      rating: 4.7,
      views: 1923,
      likes: 187,
      liveUrl: 'https://ecostore-demo.com',
      createdAt: '2024-02-03',
      featured: false
    },
    {
      id: 3,
      title: 'SkillShare Marketplace',
      description: 'A peer-to-peer learning marketplace where users can teach and learn various skills from each other.',
      creator: 'Emma Davis',
      creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
      category: 'marketplace',
      tools: ['Bubble', 'Zoom API', 'PayPal'],
      rating: 4.8,
      views: 1654,
      likes: 203,
      liveUrl: 'https://skillshare-demo.net',
      createdAt: '2024-01-28',
      featured: true
    },
    {
      id: 4,
      title: 'Analytics Dashboard Pro',
      description: 'A powerful analytics dashboard template with real-time data visualization and customizable widgets.',
      creator: 'Alex Rodriguez',
      creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      category: 'dashboard',
      tools: ['Retool', 'Chart.js', 'PostgreSQL'],
      rating: 4.6,
      views: 1342,
      likes: 156,
      liveUrl: 'https://analytics-demo.io',
      createdAt: '2024-02-10',
      featured: false
    },
    {
      id: 5,
      title: 'Creative Portfolio Template',
      description: 'A stunning portfolio template for designers and creatives with smooth animations and responsive design.',
      creator: 'Lisa Wang',
      creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
      category: 'portfolio',
      tools: ['Webflow', 'Lottie', 'CMS'],
      rating: 4.9,
      views: 2156,
      likes: 298,
      liveUrl: 'https://creative-portfolio-demo.com',
      createdAt: '2024-01-20',
      featured: true
    },
    {
      id: 6,
      title: 'FoodDelivery App',
      description: 'A complete food delivery platform with restaurant management, order tracking, and payment integration.',
      creator: 'Tom Wilson',
      creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=450&fit=crop',
      category: 'marketplace',
      tools: ['Glide', 'Google Maps', 'Stripe'],
      rating: 4.5,
      views: 1834,
      likes: 167,
      liveUrl: 'https://fooddelivery-demo.app',
      createdAt: '2024-02-15',
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community
            <span className="hero-gradient bg-clip-text text-transparent"> Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing no-code applications built by our community members. 
            Get inspired and learn from real-world implementations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                    <Badge className="absolute top-3 left-3 hero-gradient text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={project.creatorAvatar} alt={project.creator} />
                        <AvatarFallback className="text-xs hero-gradient text-white">
                          {project.creator.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{project.creator}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {project.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {project.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {project.likes}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
        <Tabs defaultValue="showcase" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="showcase">Showcase</TabsTrigger>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="showcase" className="space-y-6">
            <ProjectShowcase />
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === 'all' ? 'All Projects' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-muted-foreground ml-2">({filteredProjects.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 hero-gradient text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={project.creatorAvatar} alt={project.creator} />
                      <AvatarFallback className="text-xs hero-gradient text-white">
                        {project.creator.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{project.creator}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {project.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {project.likes}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </TabsContent>
          <TabsContent value="beginner" className="space-y-6">
            Content for Beginner projects goes here.
          </TabsContent>
          <TabsContent value="intermediate" className="space-y-6">
            Content for Intermediate projects goes here.
          </TabsContent>
          <TabsContent value="advanced" className="space-y-6">
            Content for Advanced projects goes here.
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;