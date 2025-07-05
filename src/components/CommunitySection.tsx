
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarContent, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Freelance No-Code Developer',
      avatar: 'SC',
      content: 'Vibe Coders Academy transformed my career. I went from zero coding knowledge to building complex apps in just 6 months!',
      likes: 24,
      comments: 8,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Startup Founder',
      avatar: 'MR',
      content: 'The community support here is incredible. Every question gets answered quickly by both instructors and fellow students.',
      likes: 31,
      comments: 12,
    },
    {
      name: 'Emma Thompson',
      role: 'Product Manager',
      avatar: 'ET',
      content: 'I built my first MVP using what I learned here. Now my startup has raised $2M in funding. Thank you Vibe Coders!',
      likes: 45,
      comments: 18,
    },
  ];

  const stats = [
    { label: 'Active Members', value: '12,000+' },
    { label: 'Projects Shared', value: '3,500+' },
    { label: 'Success Stories', value: '800+' },
    { label: 'Expert Mentors', value: '50+' },
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow no-code builders, share your projects, 
            and get support from our amazing community of creators.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="hero-gradient text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <Heart className="h-3 w-3" />
                      {testimonial.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="h-3 w-3" />
                      {testimonial.comments}
                    </button>
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="h-3 w-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Join the Community?</h3>
            <p className="text-muted-foreground">
              Start your no-code journey today and connect with thousands of builders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90 px-8">
                Join Community
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Browse Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
