
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Users, Star, ArrowRight, Heart, Share2 } from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: '15,000+', label: 'Active Members' },
    { icon: MessageCircle, value: '2,500+', label: 'Daily Messages' },
    { icon: Star, value: '4.9/5', label: 'Community Rating' },
    { icon: Heart, value: '98%', label: 'Helpful Responses' }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Alex Chen',
      avatar: 'AC',
      avatarImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      role: 'Senior Developer',
      time: '2 hours ago',
      content: 'Just launched my first no-code SaaS using Bubble! The community tutorials were incredibly helpful. Revenue hit $1K in the first week! 🚀',
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ['Success Story', 'Bubble', 'SaaS']
    },
    {
      id: 2,
      author: 'Sarah Miller',
      avatar: 'SM',
      avatarImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      role: 'Product Manager',
      time: '5 hours ago',
      content: 'Looking for feedback on my marketplace app built with Webflow + Airtable. The integration challenges were worth it - now processing 100+ orders daily!',
      likes: 18,
      comments: 12,
      shares: 5,
      tags: ['Feedback', 'Webflow', 'Marketplace']
    },
    {
      id: 3,
      author: 'Marcus Johnson',
      avatar: 'MJ',
      avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      role: 'Entrepreneur',
      time: '1 day ago',
      content: 'The monthly community challenge pushed me to build something I never thought possible. My project management tool now has 500+ users!',
      likes: 31,
      comments: 15,
      shares: 7,
      tags: ['Challenge', 'Project Management', 'Growth']
    }
  ];

  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Community</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join a Thriving
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              No-Code Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of no-code enthusiasts, share your projects, 
            get feedback, and learn from others building amazing applications without code.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 glass-card rounded-lg border border-border/50">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Latest from the Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPosts.map((post) => (
              <Card key={post.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.avatarImage} alt={post.author} />
                      <AvatarFallback className="hero-gradient text-white text-sm">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm">{post.author}</h4>
                        <Badge variant="secondary" className="text-xs">{post.role}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
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
                        <MessageCircle className="h-3 w-3" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="h-3 w-3" />
                        {post.shares}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
            <p className="text-muted-foreground text-sm">
              Get help anytime from our active community members and expert mentors.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Networking</h4>
            <p className="text-muted-foreground text-sm">
              Connect with like-minded builders and potential collaborators for your projects.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Showcase</h4>
            <p className="text-muted-foreground text-sm">
              Share your projects and get valuable feedback from the community.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="hero-gradient text-white hover:opacity-90 group">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Free to join • 15,000+ active members • Expert mentorship available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
