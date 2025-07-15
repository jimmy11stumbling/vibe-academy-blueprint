
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, X, Star, Users, Code, Zap, DollarSign } from 'lucide-react';

const PlatformComparison = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms = [
    {
      name: 'Lovable 2.0',
      archetype: 'Full-Stack App Generator',
      pricing: { free: '5 credits/day', pro: '$25/month' },
      features: {
        'Full-Stack Generation': true,
        'Real-time Collaboration': true,
        'Visual Edits': true,
        'Custom Domains': true,
        'Security Scan': true,
        'Figma Integration': true,
        'GitHub Sync': true,
        'Supabase Native': true
      },
      pros: ['Fast prototyping', 'Non-technical friendly', 'Strong backing'],
      cons: ['Recent stability issues', 'Higher pricing', 'Limited customization']
    },
    {
      name: 'Cursor',
      archetype: 'AI-First IDE',
      pricing: { free: 'Limited', pro: '$20/month' },
      features: {
        'Codebase-Aware Chat': true,
        'Predictive Edits': true,
        'Agent Mode': true,
        'VS Code Compatible': true,
        'Enterprise Security': true,
        'Custom Models': true,
        'Privacy Mode': true,
        'Extension Support': true
      },
      pros: ['Professional grade', 'VS Code familiar', 'Strong AI features'],
      cons: ['Technical users only', 'Learning curve', 'Can be cluttered']
    },
    {
      name: 'Bolt',
      archetype: 'Full-Stack In-Browser',
      pricing: { free: '150K tokens/day', pro: '$20/month' },
      features: {
        'WebContainer Technology': true,
        'Real-time Execution': true,
        'Full-Stack Control': true,
        'Open Source': true,
        'GitHub Integration': true,
        'Multiple Integrations': true,
        'Code Export': true,
        'Live Preview': true
      },
      pros: ['Unique architecture', 'True full-stack', 'Open source'],
      cons: ['Token-based limits', 'Technical complexity', 'Browser dependent']
    }
  ];

  const comparisonCategories = [
    {
      name: 'Target Users',
      items: [
        { feature: 'Non-technical Founders', lovable: true, cursor: false, bolt: false },
        { feature: 'Professional Developers', lovable: false, cursor: true, bolt: true },
        { feature: 'Students/Learners', lovable: true, cursor: false, bolt: true },
        { feature: 'Enterprise Teams', lovable: true, cursor: true, bolt: false }
      ]
    },
    {
      name: 'Technical Capabilities',
      items: [
        { feature: 'Full-Stack Generation', lovable: true, cursor: false, bolt: true },
        { feature: 'Code Intelligence', lovable: false, cursor: true, bolt: false },
        { feature: 'Real-time Collaboration', lovable: true, cursor: false, bolt: false },
        { feature: 'Custom Deployment', lovable: true, cursor: false, bolt: true }
      ]
    },
    {
      name: 'Development Experience',
      items: [
        { feature: 'Visual Interface', lovable: true, cursor: false, bolt: true },
        { feature: 'Code Editor', lovable: false, cursor: true, bolt: true },
        { feature: 'Terminal Access', lovable: false, cursor: true, bolt: true },
        { feature: 'Extension Support', lovable: false, cursor: true, bolt: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Platform Comparison</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare the leading no-code platforms to find the perfect fit for your needs
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="detailed">Detailed</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    {platform.name}
                  </CardTitle>
                  <Badge variant="outline">{platform.archetype}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-600 dark:text-green-400">Pros</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-3 w-3 text-green-500" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-orange-600 dark:text-orange-400">Cons</h4>
                    <ul className="space-y-1">
                      {platform.cons.map((con, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <X className="h-3 w-3 text-orange-500" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Try {platform.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          {comparisonCategories.map((category) => (
            <Card key={category.name} className="glass-card">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Feature</th>
                        <th className="text-center py-2">Lovable</th>
                        <th className="text-center py-2">Cursor</th>
                        <th className="text-center py-2">Bolt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{item.feature}</td>
                          <td className="text-center py-3">
                            {item.lovable ? (
                              <Check className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3">
                            {item.cursor ? (
                              <Check className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-400 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3">
                            {item.bolt ? (
                              <Check className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pricing" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Free Tier</span>
                      <span className="font-medium">{platform.pricing.free}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pro Plan</span>
                      <span className="font-medium">{platform.pricing.pro}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">View Full Pricing</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
              <p className="text-muted-foreground">
                In-depth comparison of architecture, capabilities, and strategic positioning
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Lovable 2.0</h3>
                  <p className="text-sm text-muted-foreground">
                    European startup with $75M ARR in 7 months. Targets non-technical founders 
                    with chat-driven full-stack generation and native Supabase integration.
                  </p>
                  <Badge variant="secondary">High Growth</Badge>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Cursor</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional AI-first IDE with $2.5B valuation. VS Code fork with 
                    advanced AI features targeting professional developers.
                  </p>
                  <Badge variant="secondary">Enterprise Ready</Badge>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Bolt</h3>
                  <p className="text-sm text-muted-foreground">
                    Unique WebContainer architecture enabling true in-browser full-stack 
                    development. Open source with StackBlitz backing.
                  </p>
                  <Badge variant="secondary">Technical Innovation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlatformComparison;
