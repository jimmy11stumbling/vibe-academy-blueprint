
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown, Users } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      icon: Users,
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Access to 3 beginner courses',
        'Community forum access',
        'Basic project templates',
        'Email support',
        '1 project deployment'
      ],
      limitations: [
        'Limited course access',
        'No premium templates',
        'Community support only'
      ],
      popular: false,
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Pro',
      icon: Zap,
      description: 'For serious no-code builders',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Access to all 50+ courses',
        'Premium project templates',
        'Priority community support',
        'Weekly live workshops',
        'Unlimited project deployments',
        'Advanced course materials',
        'Certificate of completion',
        '1-on-1 monthly mentorship call'
      ],
      limitations: [],
      popular: true,
      buttonText: 'Start Pro Trial',
      buttonVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For teams and organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Custom learning paths',
        'Advanced analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Bulk user management',
        'Advanced reporting'
      ],
      limitations: [],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time. Changes will be reflected in your next billing cycle.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Choose Your Learning Path</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start free and upgrade as you grow. All plans include access to our community and core features.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={billingPeriod === 'monthly' ? 'font-semibold' : 'text-muted-foreground'}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-primary' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={billingPeriod === 'yearly' ? 'font-semibold' : 'text-muted-foreground'}>
                Yearly
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                  Save 17%
                </Badge>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative glass-card border-border/50 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-primary/50 shadow-lg scale-105' 
                    : 'hover:border-primary/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="hero-gradient text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <div className="text-4xl font-bold">
                      ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    {billingPeriod === 'yearly' && plan.yearlyPrice > 0 && (
                      <p className="text-sm text-muted-foreground">
                        ${plan.yearlyPrice} billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'hero-gradient text-white hover:opacity-90' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 py-12 glass-card border-border/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you choose the right plan for your needs.
            </p>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
