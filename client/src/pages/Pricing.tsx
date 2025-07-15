
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, X, Star, Zap, Crown, Users } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Star,
      description: 'Perfect for beginners exploring no-code development',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { name: 'Access to 5 beginner courses', included: true },
        { name: 'Community forum access', included: true },
        { name: 'Basic project templates', included: true },
        { name: 'Email support', included: true },
        { name: 'Course completion certificates', included: false },
        { name: 'Advanced courses', included: false },
        { name: '1-on-1 mentorship', included: false },
        { name: 'Priority support', included: false }
      ],
      popular: false,
      cta: 'Start Free'
    },
    {
      name: 'Pro',
      icon: Zap,
      description: 'Ideal for serious learners and professionals',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { name: 'Access to all courses', included: true },
        { name: 'Community forum access', included: true },
        { name: 'Premium project templates', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Course completion certificates', included: true },
        { name: 'Advanced courses & workshops', included: true },
        { name: 'Monthly group mentorship', included: true },
        { name: '1-on-1 mentorship sessions', included: false }
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For teams and organizations scaling no-code',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Team management dashboard', included: true },
        { name: 'Custom learning paths', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'White-label courses', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Unlimited 1-on-1 mentorship', included: true },
        { name: 'Custom integrations', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What happens if I cancel my subscription?',
      answer: 'You\'ll continue to have access to your plan features until the end of your billing period. After that, you\'ll be moved to the free Starter plan.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no setup fees or hidden costs. You only pay the monthly or annual subscription fee.'
    },
    {
      question: 'Can I get a custom plan for my organization?',
      answer: 'Yes, we offer custom enterprise plans for large organizations. Contact our sales team to discuss your specific needs.'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return 'Free';
    const price = isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice;
    return `$${Math.round(price)}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0 || !isAnnual) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.annualPrice;
    return `Save $${savings}`;
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your no-code learning journey. 
            Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`text-sm ${isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`glass-card relative ${
                plan.popular 
                  ? 'border-primary/50 ring-2 ring-primary/20' 
                  : 'border-border/50'
              } hover:border-primary/20 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="hero-gradient text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.popular ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <plan.icon className={`h-6 w-6 ${
                      plan.popular ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{getPrice(plan)}</span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  {getSavings(plan) && (
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      {getSavings(plan)}
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'hero-gradient text-white hover:opacity-90' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${
                        feature.included 
                          ? 'bg-green-100 dark:bg-green-900' 
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        {feature.included ? (
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        ) : (
                          <X className="h-3 w-3 text-gray-400" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included ? '' : 'text-muted-foreground'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="text-center mb-16">
          <Card className="glass-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                  <p className="text-muted-foreground">
                    We work with large organizations to create tailored learning experiences.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Custom</div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Dedicated Support</div>
                </div>
              </div>
              
              <Button size="lg" className="hero-gradient text-white hover:opacity-90">
                Contact Sales Team
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground mb-8">Trusted by thousands of learners worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Google</div>
            <div className="text-lg font-semibold">Microsoft</div>
            <div className="text-lg font-semibold">Stripe</div>
            <div className="text-lg font-semibold">Shopify</div>
            <div className="text-lg font-semibold">Notion</div>
            <div className="text-lg font-semibold">Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
