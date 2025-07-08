
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: 'Welcome to Vibe Coders!',
        description: 'You\'ve successfully subscribed to our newsletter.',
      });
      setEmail('');
    }, 1000);
  };

  const benefits = [
    'Weekly no-code tips and tutorials',
    'Early access to new courses',
    'Exclusive community events',
    'Industry news and trends',
    'Free templates and resources'
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-border/50 text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thanks for subscribing! Check your email for a welcome message and your first no-code resource pack.
              </p>
              <Button 
                onClick={() => setIsSubscribed(false)}
                variant="outline"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card border-border/50 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Stay in the Loop
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Get the latest no-code insights, course updates, and exclusive resources 
                  delivered straight to your inbox every week.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="hero-gradient text-white hover:opacity-90 group"
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>

                <div className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe at any time.
                </div>
              </div>

              {/* Right Content - Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
                <h3 className="text-lg font-semibold mb-6">What you'll receive:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-sm font-medium mb-1">Join 25,000+ subscribers</div>
                  <div className="text-xs text-muted-foreground">
                    "The best no-code newsletter I've ever subscribed to!" - Sarah M.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
