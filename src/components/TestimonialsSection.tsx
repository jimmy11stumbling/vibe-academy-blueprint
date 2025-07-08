
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager at TechCorp',
      avatar: 'SC',
      avatarImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'Vibe Coders completely transformed my career. I went from having zero technical skills to building full-scale applications in just 3 months. The instructors are amazing and the community is incredibly supportive.',
      project: 'Built an e-commerce platform'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Freelance No-Code Developer',
      avatar: 'MR',
      avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'The hands-on approach and real-world projects made all the difference. I\'m now running my own no-code agency and earning 3x what I made in my previous job. This platform is a game-changer.',
      project: 'Launched NoCode Agency'
    },
    {
      name: 'Emma Thompson',
      role: 'Startup Founder',
      avatar: 'ET',
      avatarImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'I was able to build and launch my startup\'s MVP without hiring expensive developers. The courses are comprehensive and the support is outstanding. Highly recommended for any entrepreneur.',
      project: 'Launched SaaS Platform'
    },
    {
      name: 'David Kim',
      role: 'Digital Marketing Manager',
      avatar: 'DK',
      avatarImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'As a marketer, learning no-code tools opened up so many possibilities. I can now create landing pages, automate workflows, and build custom solutions for my clients. The ROI has been incredible.',
      project: 'Automated Client Workflows'
    },
    {
      name: 'Lisa Wang',
      role: 'UX Designer',
      avatar: 'LW',
      avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'The perfect blend of design and development. I can now bring my designs to life without depending on developers. The transition from designer to builder has been seamless.',
      project: 'Built Design Portfolio App'
    },
    {
      name: 'Alex Johnson',
      role: 'Small Business Owner',
      avatar: 'AJ',
      avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: 'Running a small business, I needed cost-effective solutions. These courses taught me how to build exactly what I needed without breaking the bank. My business operations are now fully automated.',
      project: 'Automated Business Operations'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our students have transformed their careers and built amazing applications 
            using no-code tools and our comprehensive training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} />
                    <AvatarFallback className="hero-gradient text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <div className="text-sm text-primary font-medium">
                  ✨ {testimonial.project}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
