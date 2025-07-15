import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check, 
  X, 
  Star,
  Zap,
  Crown,
  Users,
  Shield,
  Infinity,
  Clock,
  Award,
  BookOpen,
  Code,
  Headphones,
  Globe,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  popular?: boolean;
  features: string[];
  limitations?: string[];
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'secondary';
  icon: React.ElementType;
  highlight?: string;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('academy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academyPlans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started with no-code development',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '3 Foundation courses included',
        'Basic platform tutorials',
        'Community forum access',
        'Progress tracking',
        'Certificate of completion',
        'Email support'
      ],
      limitations: [
        'Limited to foundation courses',
        'No premium content access',
        'Standard support only'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline',
      icon: BookOpen
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Unlock all courses and advanced features',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: true,
      features: [
        'All 45+ courses and tutorials',
        'Platform-specific deep dives',
        'Hands-on projects library',
        'Priority community support',
        'Advanced certificates',
        'Live Q&A sessions',
        'Course completion tracking',
        'Personal learning dashboard',
        'Mobile app access'
      ],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'default',
      icon: Star,
      highlight: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For teams and organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Pro',
        'Team management dashboard',
        'Custom learning paths',
        'Bulk user management',
        'Advanced analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Priority phone support',
        'Training workshops'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
      icon: Users
    }
  ];

  const platformPlans = {
    'Lovable 2.0': {
      free: 'Public projects, community support',
      starter: '$15/month - Private projects, priority support',
      pro: '$49/month - Team collaboration, advanced features',
      enterprise: 'Custom pricing - White-label, dedicated support'
    },
    'Cursor': {
      free: 'Basic AI assistance, limited requests',
      pro: '$20/month - Unlimited AI, advanced features',
      business: '$40/month - Team features, priority support',
      enterprise: 'Custom - Advanced security, dedicated support'
    },
    'Replit': {
      free: 'Public repls, community features',
      starter: '$7/month - Private repls, always-on',
      pro: '$20/month - Multiplayer, advanced tools',
      enterprise: 'Custom - Team management, SSO'
    },
    'Windsurf': {
      free: 'Basic Cascade AI, limited builds',
      pro: '$25/month - Advanced AI, unlimited builds',
      team: '$50/month - Team collaboration',
      enterprise: 'Custom - Advanced security'
    },
    'Bolt': {
      free: 'Basic full-stack generation',
      pro: '$30/month - Advanced templates, priority',
      business: '$60/month - Team features',
      enterprise: 'Custom - White-label solutions'
    }
  };

  const comparisonFeatures = [
    {
      category: 'Learning Content',
      features: [
        { name: 'Foundation Courses (3)', free: true, pro: true, enterprise: true },
        { name: 'Platform-Specific Courses (20+)', free: false, pro: true, enterprise: true },
        { name: 'Advanced Tutorials (25+)', free: false, pro: true, enterprise: true },
        { name: 'Hands-on Projects', free: 'Limited', pro: 'Unlimited', enterprise: 'Unlimited + Custom' },
        { name: 'Video Content', free: 'Basic', pro: 'HD + Interactive', enterprise: 'HD + Interactive + Custom' },
        { name: 'Live Sessions', free: false, pro: 'Monthly', enterprise: 'Weekly + Custom' }
      ]
    },
    {
      category: 'Features & Tools',
      features: [
        { name: 'Progress Tracking', free: true, pro: true, enterprise: true },
        { name: 'Certificates', free: 'Basic', pro: 'Verified', enterprise: 'Custom Branded' },
        { name: 'Community Access', free: true, pro: true, enterprise: true },
        { name: 'Mobile App', free: false, pro: true, enterprise: true },
        { name: 'Offline Downloads', free: false, pro: true, enterprise: true },
        { name: 'Custom Learning Paths', free: false, pro: 'Personal', enterprise: 'Team + Custom' }
      ]
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Email Support', free: true, pro: true, enterprise: true },
        { name: 'Priority Support', free: false, pro: true, enterprise: true },
        { name: 'Phone Support', free: false, pro: false, enterprise: true },
        { name: 'Dedicated Account Manager', free: false, pro: false, enterprise: true },
        { name: 'Training Workshops', free: false, pro: false, enterprise: true },
        { name: 'Custom Integrations', free: false, pro: false, enterprise: true }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <X className="h-4 w-4 text-gray-400" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Learning Path
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master no-code development with our comprehensive courses and tutorials. 
            Start free or unlock premium content with our Pro plans.
          </p>
        </div>

        <Tabs defaultValue="academy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="academy">Academy Plans</TabsTrigger>
            <TabsTrigger value="platforms">Platform Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="academy" className="space-y-8">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    billingPeriod === 'monthly'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                    billingPeriod === 'yearly'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Yearly
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 py-0.5">
                    Save 17%
                  </Badge>
                </button>
              </div>
            </div>

            {/* Academy Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {academyPlans.map((plan) => {
                const IconComponent = plan.icon;
                const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                const yearlyPrice = plan.yearlyPrice || 0;
                const monthlyPrice = plan.monthlyPrice || 0;
                
                return (
                  <Card 
                    key={plan.id} 
                    className={`glass-card relative ${
                      plan.popular ? 'border-primary scale-105 shadow-xl' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          {plan.highlight}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                      
                      <div className="mt-4">
                        <div className="text-4xl font-bold">
                          {price === 0 ? (
                            'Free'
                          ) : (
                            <>
                              ${price}
                              <span className="text-lg text-muted-foreground">
                                /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                              </span>
                            </>
                          )}
                        </div>
                        {billingPeriod === 'yearly' && monthlyPrice > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            ${Math.round(yearlyPrice / 12)}/month billed annually
                          </p>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <Button 
                        className={`w-full ${
                          plan.buttonVariant === 'default' 
                            ? 'hero-gradient text-white' 
                            : ''
                        }`}
                        variant={plan.buttonVariant}
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">What's included:</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {plan.limitations && (
                          <div className="pt-3 border-t">
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Limitations:</h4>
                            <ul className="space-y-1">
                              {plan.limitations.map((limitation, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <AlertCircle className="h-3 w-3 mt-1 flex-shrink-0" />
                                  <span>{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Feature Comparison Table */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
              <Card className="glass-card">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-semibold">Features</th>
                          <th className="text-center p-4 font-semibold">Free</th>
                          <th className="text-center p-4 font-semibold">Pro</th>
                          <th className="text-center p-4 font-semibold">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((category) => (
                          <React.Fragment key={category.category}>
                            <tr className="bg-muted/50">
                              <td colSpan={4} className="p-4 font-semibold text-sm">
                                {category.category}
                              </td>
                            </tr>
                            {category.features.map((feature, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-4 text-sm">{feature.name}</td>
                                <td className="p-4 text-center">
                                  {renderFeatureValue(feature.free)}
                                </td>
                                <td className="p-4 text-center">
                                  {renderFeatureValue(feature.pro)}
                                </td>
                                <td className="p-4 text-center">
                                  {renderFeatureValue(feature.enterprise)}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Platform Pricing Overview</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare pricing across different no-code platforms. Most platforms offer free tiers 
                to get started, with paid plans for advanced features and team collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(platformPlans).map(([platform, plans]) => (
                <Card key={platform} className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(plans).map(([tier, description]) => (
                      <div key={tier} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="capitalize">
                            {tier}
                          </Badge>
                          {tier === 'free' && <Badge variant="secondary">Free</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    ))}
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link to={`/platforms/${platform.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Platform Comparison Note */}
            <Card className="glass-card bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Platform Pricing Note
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      Platform pricing is independent of our Academy plans. Each platform has its own 
                      pricing structure for using their development tools. Our Academy teaches you how 
                      to use these platforms effectively, regardless of which platform tier you choose.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll retain access to Pro 
                  features until the end of your current billing period.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee for all paid plans. If you're not 
                  satisfied, contact us for a full refund.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What's included in the free plan?</h3>
                <p className="text-sm text-muted-foreground">
                  The free plan includes 3 comprehensive foundation courses, community access, 
                  and basic certificates to get you started with no-code development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How does Enterprise pricing work?</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise pricing is customized based on your team size, specific requirements, 
                  and integration needs. Contact our sales team for a personalized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="glass-card mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8 text-center">
            <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready to Master No-Code Development?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of developers who have accelerated their careers with our 
              comprehensive no-code training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/academy">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;