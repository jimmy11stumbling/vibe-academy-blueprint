
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with no-code development',
      icon: Star,
      features: [
        'Access to 5 beginner courses',
        'Community forum access',
        'Basic project templates',
        'Email support',
        '1 project showcase slot'
      ],
      limitations: [
        'Limited course library',
        'No certification',
        'No live sessions',
        'Basic templates only'
      ],
      buttonText: 'Get Started Free',
      popular: false,
      color: 'border-border/50'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Ideal for serious learners and freelancers',
      icon: Zap,
      features: [
        'Access to all 50+ courses',
        'Live weekly Q&A sessions',
        'Premium project templates',
        'Industry certifications',
        'Priority email support',
        'Unlimited project showcases',
        'Advanced community features',
        'Monthly expert workshops'
      ],
      limitations: [
        'No 1-on-1 mentoring'
      ],
      buttonText: 'Start Pro Trial',
      popular: true,
      color: 'border-primary'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations building at scale',
      icon: Crown,
      features: [
        'Everything in Pro',
        'Personal 1-on-1 mentoring',
        'Custom learning paths',
        'Team collaboration tools',
        'Advanced analytics',
        'Priority support (24/7)',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      popular: false,
      color: 'border-purple-500/50'
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your payment.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes! Students get 50% off the Pro plan. Contact us with your student ID for verification.'
    },
    {
      question: 'How do certifications work?',
      answer: 'Complete course modules and pass assessments to earn industry-recognized certificates that you can share on LinkedIn.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your learning goals. 
              All plans include access to our supportive community.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`glass-card ${plan.color} relative ${plan.popular ? 'scale-105' : ''} transition-all duration-300 hover:shadow-lg`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 hero-gradient text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    plan.name === 'Free' ? 'bg-blue-100 text-blue-600' :
                    plan.name === 'Pro' ? 'hero-gradient text-white' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'hero-gradient text-white hover:opacity-90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-sm pt-2">Limitations:</h4>
                        {plan.limitations.map((limitation) => (
                          <div key={limitation} className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="glass-card border-border/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mt-16 py-12 bg-accent/5 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Your No-Code Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already building amazing applications 
              without writing a single line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
