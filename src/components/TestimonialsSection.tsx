
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "This analysis completely transformed how we evaluate no-code platforms. The depth of technical insight and real-world comparisons saved us months of research. We successfully migrated to Lovable 2.0 based on their recommendations.",
      platform: 'Lovable 2.0'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'Innovation Labs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The platform comparison matrix is incredibly detailed and accurate. As someone who's used 8 of the 10 platforms covered, I can confirm the analysis is spot-on. This is the definitive guide for choosing AI development tools.",
      platform: 'Cursor IDE'
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'Digital Solutions Co.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The strategic insights into platform monetization and ecosystem positioning helped us make informed decisions for our enterprise deployment. The ROI analysis alone justified our platform selection.",
      platform: 'Windsurf'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Startup Founder',
      company: 'NextGen Apps',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "As a non-technical founder, this analysis was invaluable. The clear explanations of complex technical concepts and the focus on user experience helped me choose the right platform for rapid prototyping.",
      platform: 'Base44'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Engineering Manager',
      company: 'Scale Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The security analysis section was particularly thorough. Understanding the compliance capabilities and enterprise features across platforms was crucial for our B2B product development strategy.",
      platform: 'Replit'
    },
    {
      id: 6,
      name: 'James Mitchell',
      role: 'Solutions Architect',
      company: 'Enterprise Systems',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The technical architecture deep-dives are exceptional. Understanding how WebContainers work in Bolt and the VS Code fork strategy of Cursor gave us the insights needed for our platform evaluation.",
      platform: 'Bolt'
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what developers, CTOs, and founders are saying about our 
            comprehensive platform analysis and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-card hover:border-primary/20 transition-all duration-300 relative">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-muted-foreground/30" />
                </div>
                
                <blockquote className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.platform}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5</span>
              <span>Average Rating</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div>
              <span className="font-semibold">500+</span>
              <span className="ml-1">Platform Evaluations</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div>
              <span className="font-semibold">50+</span>
              <span className="ml-1">Enterprise Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
