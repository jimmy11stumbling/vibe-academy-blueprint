
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Eye, Heart, MessageCircle, Star, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A complete dashboard for managing online stores built with Bubble and Zapier integration.',
      creator: 'Sarah Chen',
      avatar: 'SC',
      image: '/placeholder.svg',
      tags: ['Bubble', 'Zapier', 'E-commerce'],
      views: 1234,
      likes: 89,
      comments: 23,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates using Airtable and Glide.',
      creator: 'Marcus Rodriguez',
      avatar: 'MR',
      image: '/placeholder.svg',
      tags: ['Glide', 'Airtable', 'Productivity'],
      views: 967,
      likes: 54,
      comments: 18,
      rating: 4.6,
      featured: false
    },
    {
      id: 3,
      title: 'Event Booking Platform',
      description: 'Full-featured event booking system with payments integration using Webflow and Memberstack.',
      creator: 'Emma Thompson',
      avatar: 'ET',
      image: '/placeholder.svg',
      tags: ['Webflow', 'Memberstack', 'Events'],
      views: 1567,
      likes: 127,
      comments: 45,
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Complete LMS with course creation, student tracking, and progress analytics.',
      creator: 'David Kim',
      avatar: 'DK',
      image: '/placeholder.svg',
      tags: ['Notion', 'Zapier', 'Education'],
      views: 892,
      likes: 76,
      comments: 32,
      rating: 4.7,
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Personal fitness tracker with workout plans and progress monitoring.',
      creator: 'Lisa Wang',
      avatar: 'LW',
      image: '/placeholder.svg',
      tags: ['Glide', 'Google Sheets', 'Health'],
      views: 743,
      likes: 91,
      comments: 27,
      rating: 4.5,
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Ordering System',
      description: 'Complete restaurant ordering and management system with real-time updates.',
      creator: 'Alex Johnson',
      avatar: 'AJ',
      image: '/placeholder.svg',
      tags: ['Bubble', 'Stripe', 'Restaurant'],
      views: 1123,
      likes: 103,
      comments: 39,
      rating: 4.8,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

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

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs hero-gradient text-white">
                              {project.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{project.creator}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
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
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {project.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {project.comments}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <Card key={project.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs hero-gradient text-white">
                              {project.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{project.creator}</span>
                        </div>
                      </div>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
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
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {project.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {project.comments}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
