
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Check, ArrowRight, Bell, Zap, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
  };

  const benefits = [
    {
      icon: Bell,
      title: 'Platform Updates',
      description: 'Be the first to know about new platform releases and major updates.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Weekly analysis of trends and shifts in the no-code development landscape.'
    },
    {
      icon: Zap,
      title: 'Expert Tips',
      description: 'Actionable insights and best practices from platform experts.'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the Community!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            You're now subscribed to our newsletter. Check your inbox for a welcome email 
            with exclusive resources and platform insights.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubscribed(false)}
          >
            Subscribe Another Email
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Newsletter</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Platform Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get weekly updates on platform developments, new features, pricing changes, 
            and exclusive analysis delivered straight to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">12,000+ subscribers</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Join developers, CTOs, and founders who rely on our insights to make 
                informed platform decisions.
              </p>
            </div>
          </div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Subscribe Now</h3>
                <p className="text-muted-foreground">
                  Get our weekly newsletter with platform updates and insights.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base group" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe to Newsletter
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
                <br />
                No spam, only valuable insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
