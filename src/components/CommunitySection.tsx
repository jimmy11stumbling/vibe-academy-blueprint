
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  Calendar,
  BookOpen,
  Zap
} from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { label: 'Active Members', value: '12K+', icon: Users },
    { label: 'Monthly Discussions', value: '2.5K+', icon: MessageSquare },
    { label: 'Platform Reviews', value: '500+', icon: BookOpen },
    { label: 'Weekly Events', value: '8+', icon: Calendar }
  ];

  const communityChannels = [
    {
      name: 'Discord Community',
      description: 'Join our active Discord server for real-time discussions, platform updates, and peer support.',
      members: '8.5K',
      icon: MessageSquare,
      link: '#',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
    },
    {
      name: 'GitHub Repository',
      description: 'Contribute to our open-source analysis tools and access all research data and methodologies.',
      stars: '2.1K',
      icon: Github,
      link: '#',
      color: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
    },
    {
      name: 'Twitter Updates',
      description: 'Follow us for the latest platform news, analysis updates, and industry insights.',
      followers: '15K',
      icon: Twitter,
      link: '#',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    },
    {
      name: 'LinkedIn Network',
      description: 'Connect with professionals and stay updated on enterprise platform adoption trends.',
      connections: '5K',
      icon: Linkedin,
      link: '#',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Platform Comparison Workshop',
      date: 'Jan 25, 2025',
      time: '2:00 PM EST',
      type: 'Workshop',
      description: 'Deep dive into selecting the right platform for your project needs.'
    },
    {
      title: 'AI Development Trends 2025',
      date: 'Feb 1, 2025',
      time: '3:00 PM EST',
      type: 'Webinar',
      description: 'Explore emerging trends in AI-powered development tools.'
    },
    {
      title: 'Community Q&A Session',
      date: 'Feb 8, 2025',
      time: '1:00 PM EST',
      type: 'Q&A',
      description: 'Open discussion with platform experts and community members.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Community</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Developer Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of developers, share insights, and stay updated 
            on the latest developments in AI-powered development platforms.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center glass-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Community Channels */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              {communityChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card key={index} className="glass-card hover:border-primary/20 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${channel.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{channel.name}</CardTitle>
                            <div className="text-sm text-muted-foreground">
                              {channel.members && `${channel.members} members`}
                              {channel.stars && `${channel.stars} stars`}
                              {channel.followers && `${channel.followers} followers`}
                              {channel.connections && `${channel.connections} connections`}
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="group-hover:border-primary/50">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{channel.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{event.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <Badge variant="secondary">{event.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <Button size="sm" className="w-full">
                      <Zap className="h-3 w-3 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              <Calendar className="h-4 w-4 mr-2" />
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
