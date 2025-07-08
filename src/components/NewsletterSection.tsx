
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, Gift, Zap, BookOpen, Users } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Successfully subscribed! Check your email for a welcome message.');
    setEmail('');
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Free Resources',
      description: 'Weekly templates, tools, and exclusive content'
    },
    {
      icon: Zap,
      title: 'Latest Updates',
      description: 'Be first to know about new courses and features'
    },
    {
      icon: BookOpen,
      title: 'Learning Tips',
      description: 'Expert insights and no-code best practices'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Connect with fellow no-code enthusiasts'
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Newsletter</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the
              <span className="hero-gradient bg-clip-text text-transparent"> No-Code Curve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get weekly insights, exclusive resources, and early access to new courses. 
              Join 25,000+ no-code enthusiasts who trust our newsletter.
            </p>
          </div>

          {/* Newsletter Signup Card */}
          <Card className="glass-card border-border/50 mb-12">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Never Miss an Update</h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter and get a free no-code starter kit worth $99
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    className="hero-gradient text-white hover:opacity-90 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                  />
                ))}
              </div>
              <span>Join 25,000+ subscribers who love our weekly newsletter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
