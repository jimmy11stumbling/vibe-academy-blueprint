
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, Calendar, ExternalLink, Heart, Eye } from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, label: 'Active Members', value: '12,500+' },
    { icon: MessageSquare, label: 'Daily Messages', value: '2,000+' },
    { icon: Calendar, label: 'Weekly Events', value: '15+' },
  ];

  const recentPosts = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'SC',
      avatarImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      title: 'Just launched my first SaaS using Bubble!',
      excerpt: 'After 3 months of learning, I finally deployed my project management tool. The community support was incredible!',
      likes: 43,
      comments: 12,
      views: 234,
      tags: ['Success Story', 'Bubble', 'SaaS'],
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      author: 'Marcus Rodriguez',
      avatar: 'MR',
      avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      title: 'Need help with Webflow CMS filtering',
      excerpt: 'Working on a blog with multiple categories. Has anyone implemented advanced filtering with custom code?',
      likes: 15,
      comments: 8,
      views: 156,
      tags: ['Help Needed', 'Webflow', 'CMS'],
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      author: 'Emma Thompson',
      avatar: 'ET',
      avatarImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      title: 'Automation workflow that saved me 20 hours/week',
      excerpt: 'Built an automated lead qualification system using Airtable + Zapier. Happy to share the template!',
      likes: 67,
      comments: 23,
      views: 445,
      tags: ['Automation', 'Airtable', 'Template'],
      timeAgo: '6 hours ago'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Bubble Advanced Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      attendees: 89
    },
    {
      title: 'No-Code Career Panel',
      date: 'Dec 18, 2024',
      time: '7:00 PM EST',
      attendees: 156
    },
    {
      title: 'Monthly Project Showcase',
      date: 'Dec 22, 2024',
      time: '3:00 PM EST',
      attendees: 234
    }
  ];

  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow builders, share your projects, get help, and grow together in the world of no-code.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Community Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Recent Community Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="glass-card border-border/50 hover:border-primary/20 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={post.avatarImage} alt={post.author} />
                          <AvatarFallback className="hero-gradient text-white">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{post.author}</div>
                          <div className="text-sm text-muted-foreground">{post.timeAgo}</div>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg mt-3">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {post.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views}
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
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="glass-card border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </div>
                      <div>{event.time}</div>
                      <div className="flex items-center gap-2 pt-2">
                        <Users className="h-3 w-3" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full mt-6 hero-gradient text-white hover:opacity-90">
              Join Community
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
