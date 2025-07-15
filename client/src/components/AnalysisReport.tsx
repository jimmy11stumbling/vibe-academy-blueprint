
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Target, 
  Zap,
  Shield,
  Globe,
  Code,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

const AnalysisReport = () => {
  const [selectedMetric, setSelectedMetric] = useState('market-share');

  const marketAnalysis = {
    totalMarketSize: '$12.3B',
    growthRate: '23.8%',
    keyTrends: [
      'AI-first development tools gaining 40% market share',
      'No-code platforms reaching enterprise adoption',
      'Integration-first architectures becoming standard',
      'Security-first design emerging as differentiator'
    ],
    marketSegments: [
      { name: 'Full-Stack Generators', share: 35, growth: '+45%' },
      { name: 'AI-First IDEs', share: 28, growth: '+52%' },
      { name: 'CLI Agents', share: 18, growth: '+38%' },
      { name: 'UI Generators', share: 19, growth: '+29%' }
    ]
  };

  const platformMetrics = [
    {
      name: 'Lovable 2.0',
      metrics: {
        userGrowth: 340,
        revenue: '$75M ARR',
        marketShare: 15,
        satisfaction: 4.2,
        funding: '$150M Series A',
        valuation: '$2B'
      },
      strengths: ['Rapid prototyping', 'Non-technical friendly', 'Strong funding'],
      weaknesses: ['Stability issues', 'Limited customization', 'High pricing']
    },
    {
      name: 'Cursor',
      metrics: {
        userGrowth: 280,
        revenue: 'Private',
        marketShare: 22,
        satisfaction: 4.5,
        funding: '$900M Series B',
        valuation: '$9B'
      },
      strengths: ['Professional grade', 'VS Code compatibility', 'Enterprise features'],
      weaknesses: ['Technical learning curve', 'Complex pricing', 'Interface clutter']
    },
    {
      name: 'Replit',
      metrics: {
        userGrowth: 180,
        revenue: 'Private',
        marketShare: 25,
        satisfaction: 4.3,
        funding: 'Series B',
        valuation: '$1.16B'
      },
      strengths: ['Massive community', 'Educational focus', 'Zero setup'],
      weaknesses: ['Performance limitations', 'Collaboration friction', 'Pricing complexity']
    }
  ];

  const strategicInsights = [
    {
      title: 'The Abstraction Spectrum',
      description: 'Platforms succeed by targeting specific user skill levels rather than trying to serve everyone.',
      impact: 'High',
      actionable: 'Choose your target user precisely and optimize for their workflow.'
    },
    {
      title: 'Architecture as Moat',
      description: 'Technical architecture choices create sustainable competitive advantages.',
      impact: 'High',
      actionable: 'Invest in unique technical capabilities that competitors cannot easily replicate.'
    },
    {
      title: 'Ecosystem Integration',
      description: 'Platforms win by becoming indispensable parts of developer workflows.',
      impact: 'Medium',
      actionable: 'Build deep integrations with tools developers already use daily.'
    },
    {
      title: 'Security First',
      description: 'Enterprise adoption requires security-first design, not security as an afterthought.',
      impact: 'High',
      actionable: 'Implement enterprise-grade security from day one, not as a later addition.'
    }
  ];

  const futureTrends = [
    {
      trend: 'Agentic Development',
      probability: 85,
      timeframe: '2024-2025',
      description: 'AI agents that can understand entire codebases and make complex changes across multiple files.'
    },
    {
      trend: 'Model Context Protocol Adoption',
      probability: 70,
      timeframe: '2024-2025',
      description: 'Standardization of how AI agents interact with external tools and services.'
    },
    {
      trend: 'In-Browser Runtime Environments',
      probability: 60,
      timeframe: '2025-2026',
      description: 'More platforms adopting WebContainer-like technologies for true browser-native development.'
    },
    {
      trend: 'Voice-Driven Development',
      probability: 45,
      timeframe: '2025-2027',
      description: 'Natural language interfaces becoming primary way to interact with development tools.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">AI Development Platform Analysis</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive analysis of the AI-assisted development landscape covering market dynamics, 
          platform comparison, and strategic insights
        </p>
      </div>

      <Tabs defaultValue="market" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
          <TabsTrigger value="platforms">Platform Metrics</TabsTrigger>
          <TabsTrigger value="strategic">Strategic Insights</TabsTrigger>
          <TabsTrigger value="trends">Future Trends</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="market" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  Market Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{marketAnalysis.totalMarketSize}</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">
                    {marketAnalysis.growthRate} YoY growth
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Active Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">45M+</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">
                    +32% this year
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  Enterprise Adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">68%</div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">
                    Fortune 500 usage
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Market Segments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketAnalysis.marketSegments.map((segment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{segment.name}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{segment.growth}</Badge>
                        <span className="text-sm font-medium">{segment.share}%</span>
                      </div>
                    </div>
                    <Progress value={segment.share} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Key Market Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketAnalysis.keyTrends.map((trend, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm">{trend}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          {platformMetrics.map((platform, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <Badge variant="outline">
                    {platform.metrics.marketShare}% market share
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      +{platform.metrics.userGrowth}%
                    </div>
                    <div className="text-sm text-muted-foreground">User Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {platform.metrics.satisfaction}/5
                    </div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {platform.metrics.valuation}
                    </div>
                    <div className="text-sm text-muted-foreground">Valuation</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Strengths</h4>
                    <ul className="space-y-2">
                      {platform.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {platform.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="strategic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicInsights.map((insight, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                    <Badge 
                      variant={insight.impact === 'High' ? 'default' : 'secondary'}
                      className={insight.impact === 'High' ? 'bg-red-500 text-white' : ''}
                    >
                      {insight.impact} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm font-medium text-primary mb-1">Actionable Insight</div>
                    <p className="text-sm">{insight.actionable}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="space-y-4">
            {futureTrends.map((trend, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">{trend.trend}</h3>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{trend.timeframe}</Badge>
                      <div className="text-sm font-medium">
                        {trend.probability}% probability
                      </div>
                    </div>
                  </div>
                  <Progress value={trend.probability} className="mb-3" />
                  <p className="text-sm text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  For Beginners
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="font-medium text-blue-700 dark:text-blue-300">Recommended: Lovable 2.0</div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    Best for rapid prototyping and non-technical founders
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Start with free tier to test concepts</li>
                  <li>• Use Supabase integration for backend</li>
                  <li>• Export code when ready to scale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-500" />
                  For Developers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="font-medium text-green-700 dark:text-green-300">Recommended: Cursor</div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    Professional AI-first IDE with advanced features
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Leverage existing VS Code knowledge</li>
                  <li>• Use agent mode for complex refactoring</li>
                  <li>• Consider enterprise features for teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                  For Full-Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="font-medium text-purple-700 dark:text-purple-300">Recommended: Bolt</div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                    True in-browser full-stack development
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Perfect for MVPs and prototypes</li>
                  <li>• Use GitHub integration for collaboration</li>
                  <li>• Monitor token usage carefully</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  For Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <div className="font-medium text-red-700 dark:text-red-300">Recommended: Windsurf</div>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                    Enterprise-grade security and compliance
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• FedRAMP and SOC 2 certified</li>
                  <li>• On-premise deployment options</li>
                  <li>• Advanced role-based access controls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalysisReport;
