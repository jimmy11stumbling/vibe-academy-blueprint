
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Vibe Coders transformed how I think about app development. I built my entire startup\'s platform without writing a single line of code. The courses are incredibly detailed and practical.',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Fortune 500',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The no-code revolution is real, and Vibe Coders is leading it. I\'ve been able to prototype and validate ideas faster than ever before. Highly recommended for anyone in product.',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a designer, I always wanted to bring my ideas to life without depending on developers. Vibe Coders made that possible. The design-to-app workflow is seamless.',
      featured: true
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Business Analyst',
      company: 'Global Corp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I was skeptical about no-code at first, but the results speak for themselves. I\'ve automated countless business processes and even built customer-facing applications.',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Entrepreneur',
      company: 'E-commerce Startup',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The community aspect is what sets Vibe Coders apart. Getting help from fellow learners and instructors has been invaluable in my no-code journey.',
      featured: false
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Marketing Director',
      company: 'SaaS Company',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'We\'ve built internal tools, landing pages, and even our customer portal using what I learned from Vibe Coders. The ROI has been incredible.',
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  const TestimonialCard = ({ testimonial, featured = false }: { testimonial: typeof testimonials[0], featured?: boolean }) => (
    <Card className={`glass-card border-border/50 ${featured ? 'lg:col-span-2' : ''} hover:border-primary/20 transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className={`text-muted-foreground leading-relaxed mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className={featured ? 'h-12 w-12' : 'h-10 w-10'}>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="hero-gradient text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className={`font-semibold ${featured ? 'text-base' : 'text-sm'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-muted-foreground ${featured ? 'text-sm' : 'text-xs'}`}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students
            <span className="hero-gradient bg-clip-text text-transparent"> Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful no-code developers who have transformed 
            their careers and businesses with our comprehensive courses.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              featured={true} 
            />
          ))}
        </div>

        {/* Regular Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularTestimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground mb-8">Trusted by professionals from</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-lg font-bold">Google</div>
            <div className="text-lg font-bold">Microsoft</div>
            <div className="text-lg font-bold">Amazon</div>
            <div className="text-lg font-bold">Meta</div>
            <div className="text-lg font-bold">Apple</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
