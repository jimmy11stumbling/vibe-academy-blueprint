
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eye, Heart, MessageCircle, Star, ExternalLink, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedProjects, setLikedProjects] = useState<number[]>([]);

  const handleViewProject = (projectId: number, title: string) => {
    console.log(`Viewing project ${projectId}: ${title}`);
    window.open(`/project/${projectId}`, '_blank');
  };

  const handleLikeProject = (projectId: number) => {
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A complete dashboard for managing online stores built with Bubble and Zapier integration.',
      creator: 'Sarah Chen',
      avatar: 'SC',
      avatarImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      tags: ['Bubble', 'Zapier', 'E-commerce'],
      views: 1234,
      likes: 89,
      comments: 23,
      rating: 4.8,
      featured: true,
      category: 'business'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates using Airtable and Glide.',
      creator: 'Marcus Rodriguez',
      avatar: 'MR',
      avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
      tags: ['Glide', 'Airtable', 'Productivity'],
      views: 967,
      likes: 54,
      comments: 18,
      rating: 4.6,
      featured: false,
      category: 'productivity'
    },
    {
      id: 3,
      title: 'Event Booking Platform',
      description: 'Full-featured event booking system with payments integration using Webflow and Memberstack.',
      creator: 'Emma Thompson',
      avatar: 'ET',
      avatarImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop',
      tags: ['Webflow', 'Memberstack', 'Events'],
      views: 1567,
      likes: 127,
      comments: 45,
      rating: 4.9,
      featured: true,
      category: 'business'
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Complete LMS with course creation, student tracking, and progress analytics.',
      creator: 'David Kim',
      avatar: 'DK',
      avatarImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
      tags: ['Notion', 'Zapier', 'Education'],
      views: 892,
      likes: 76,
      comments: 32,
      rating: 4.7,
      featured: false,
      category: 'education'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Personal fitness tracker with workout plans and progress monitoring.',
      creator: 'Lisa Wang',
      avatar: 'LW',
      avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
      tags: ['Glide', 'Google Sheets', 'Health'],
      views: 743,
      likes: 91,
      comments: 27,
      rating: 4.5,
      featured: false,
      category: 'health'
    },
    {
      id: 6,
      title: 'Restaurant Ordering System',
      description: 'Complete restaurant ordering and management system with real-time updates.',
      creator: 'Alex Johnson',
      avatar: 'AJ',
      avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=450&fit=crop',
      tags: ['Bubble', 'Stripe', 'Restaurant'],
      views: 1123,
      likes: 103,
      comments: 39,
      rating: 4.8,
      featured: true,
      category: 'business'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'business', label: 'Business' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'education', label: 'Education' },
    { value: 'health', label: 'Health & Fitness' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={project.avatarImage} alt={project.creator} />
                <AvatarFallback className="text-xs hero-gradient text-white">
                  {project.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{project.creator}</span>
            </div>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {project.views}
            </span>
            <button
              onClick={() => handleLikeProject(project.id)}
              className={`flex items-center gap-1 hover:text-red-500 transition-colors bg-transparent border-none cursor-pointer ${
                likedProjects.includes(project.id) ? 'text-red-500' : ''
              }`}
            >
              <Heart className={`h-3 w-3 ${likedProjects.includes(project.id) ? 'fill-current' : ''}`} />
              {project.likes + (likedProjects.includes(project.id) ? 1 : 0)}
            </button>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {project.comments}
            </span>
          </div>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 text-xs"
            onClick={() => handleViewProject(project.id, project.title)}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            View
          </Button>
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
            <h1 className="text-4xl font-bold mb-4">Community Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore amazing no-code projects built by our community members. 
              Get inspired and learn from real implementations.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
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

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* All Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {searchQuery || selectedCategory !== 'all' ? 'Search Results' : 'All Projects'}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({filteredProjects.length} projects)
              </span>
            </h2>
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
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

export default Projects;
