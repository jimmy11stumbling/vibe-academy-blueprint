
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlatformCard from '@/components/PlatformCard';
import PlatformComparison from '@/components/PlatformComparison';
import { Filter, Grid, List, Star, TrendingUp } from 'lucide-react';

const Platforms = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const platforms = [
    {
      name: 'Lovable 2.0',
      archetype: 'Full-Stack App Generator',
      targetAudience: 'Non-technical Founders, Startups',
      coreStack: 'Browser-based, Supabase integration',
      aiModel: 'Proprietary models',
      monetization: 'Credits & Subscriptions',
      differentiator: 'Fast-growing European startup with chat-driven full-stack generation',
      company: 'Lovable (Accel, 20VC)',
      rating: 4.2,
      users: '400K+',
      pricing: {
        free: '5 credits/day',
        pro: '$25/month',
        enterprise: 'Custom'
      },
      features: [
        'Chat-driven development',
        'Full-stack generation',
        'Supabase integration',
        'Visual edits',
        'Custom domains',
        'Security scanning'
      ]
    },
    {
      name: 'Cursor',
      archetype: 'AI-First IDE',
      targetAudience: 'Professional Developers, Enterprise',
      coreStack: 'VS Code fork, TypeScript',
      aiModel: 'OpenAI GPT-4, Claude, Custom models',
      monetization: 'Per-user subscriptions',
      differentiator: 'Deep VS Code integration with advanced AI features',
      company: 'Anysphere (OpenAI, A16Z)',
      rating: 4.5,
      users: '2M+',
      pricing: {
        free: 'Limited',
        pro: '$20/month',
        enterprise: 'Custom'
      },
      features: [
        'Codebase-aware chat',
        'Predictive edits',
        'Agent mode',
        'VS Code compatible',
        'Enterprise security',
        'Privacy mode'
      ]
    },
    {
      name: 'Replit',
      archetype: 'Collaborative IDE',
      targetAudience: 'Students, Teams, Hobbyists',
      coreStack: 'Cloud workspace, Nix',
      aiModel: 'Claude Sonnet, GPT-4o',
      monetization: 'Per-user subscriptions',
      differentiator: 'Massive community with zero-setup collaborative environment',
      company: 'Replit Inc.',
      rating: 4.3,
      users: '40M+',
      pricing: {
        free: 'Basic',
        pro: '$20/month',
        teams: '$35/user/month'
      },
      features: [
        'Real-time collaboration',
        'Zero setup',
        'Built-in database',
        'Authentication system',
        'Mobile apps',
        'Deployment'
      ]
    },
    {
      name: 'Windsurf',
      archetype: 'Agentic Code Editor',
      targetAudience: 'Professional Developers, Enterprise',
      coreStack: 'Proprietary IDE, Multi-model',
      aiModel: 'OpenAI, Claude, Gemini, xAI',
      monetization: 'Per-user subscriptions',
      differentiator: 'Enterprise-grade security with powerful Cascade agent',
      company: 'Windsurf (formerly Codeium)',
      rating: 4.4,
      users: '1M+',
      pricing: {
        free: '25 credits/month',
        pro: '$15/month',
        teams: '$30/month'
      },
      features: [
        'Cascade agent',
        'Multi-file tasks',
        'FedRAMP certified',
        'SOC 2 compliance',
        'On-premise deployment',
        'MCP support'
      ]
    },
    {
      name: 'Bolt',
      archetype: 'Full-Stack In-Browser',
      targetAudience: 'Developers, PMs, Learners',
      coreStack: 'WebContainers, JavaScript',
      aiModel: 'Claude Sonnet 3.5, 3.7',
      monetization: 'Token-based subscriptions',
      differentiator: 'True full-stack generation with browser runtime control',
      company: 'StackBlitz',
      rating: 4.1,
      users: '500K+',
      pricing: {
        free: '150K tokens/day',
        pro: '$20/month',
        teams: '$30/member/month'
      },
      features: [
        'WebContainer technology',
        'Full-stack control',
        'Real-time execution',
        'Open source',
        'GitHub integration',
        'Code export'
      ]
    },
    {
      name: 'Claude Code',
      archetype: 'CLI Agent',
      targetAudience: 'Professional Developers',
      coreStack: 'Terminal-based CLI, Node.js',
      aiModel: 'Claude 3.7 Sonnet, Claude 4 Opus',
      monetization: 'API usage, subscriptions',
      differentiator: 'Security-first design with granular permissions',
      company: 'Anthropic',
      rating: 4.6,
      users: '100K+',
      pricing: {
        pro: '$17/month',
        max: '$100/month',
        api: 'Usage-based'
      },
      features: [
        'Security-first design',
        'Granular permissions',
        'Context management',
        'Custom workflows',
        'MCP support',
        'Enterprise security'
      ]
    },
    {
      name: 'Gemini CLI',
      archetype: 'CLI Agent',
      targetAudience: 'Individual & Professional Developers',
      coreStack: 'Open-source CLI, Node.js',
      aiModel: 'Gemini 2.5 Pro, Gemini Flash',
      monetization: 'Generous free tier, API billing',
      differentiator: 'Open-source with unmatched free usage limits',
      company: 'Google',
      rating: 4.0,
      users: '300K+',
      pricing: {
        free: 'Generous limits',
        api: 'Usage-based'
      },
      features: [
        'Open source',
        'Generous free tier',
        'Web integration',
        'Native Windows support',
        'MCP integration',
        'Real-time search'
      ]
    },
    {
      name: 'Base44',
      archetype: 'Full-Stack App Generator',
      targetAudience: 'Non-technical Founders, Businesses',
      coreStack: 'Browser-based, integrated backend',
      aiModel: 'Gemini 2.5, Claude 4 Sonnet',
      monetization: 'Message-based credits',
      differentiator: 'All-in-one functionality acquired by Wix',
      company: 'Wix (Acquired)',
      rating: 4.3,
      users: '400K+',
      pricing: {
        free: '25 messages/month',
        starter: '$20/month',
        pro: '$100/month'
      },
      features: [
        'Buttery includes philosophy',
        'Built-in backend',
        'User authentication',
        'Database included',
        'Instant deployment',
        'Enterprise features'
      ]
    },
    {
      name: 'V0',
      archetype: 'UI Component Generator',
      targetAudience: 'Frontend Developers, Designers',
      coreStack: 'Browser-based, Vercel ecosystem',
      aiModel: 'Proprietary models',
      monetization: 'Credit-based subscriptions',
      differentiator: 'Specialized React/Tailwind UI generation',
      company: 'Vercel',
      rating: 4.4,
      users: '800K+',
      pricing: {
        free: '200 credits',
        basic: '$10/month',
        premium: '$50/month'
      },
      features: [
        'React component generation',
        'Tailwind CSS',
        'Image to code',
        'Figma integration',
        'Vercel deployment',
        'Framework support'
      ]
    },
    {
      name: 'Rork',
      archetype: 'Mobile-First App Generator',
      targetAudience: 'Entrepreneurs, Startups',
      coreStack: 'React Native, Expo',
      aiModel: 'Claude 4',
      monetization: 'Message-based credits',
      differentiator: 'Specialized cross-platform mobile app generation',
      company: 'Rork (Daniel Dhawan)',
      rating: 3.8,
      users: '50K+',
      pricing: {
        starter: '$20/month',
        pro: '$200/month'
      },
      features: [
        'React Native generation',
        'Cross-platform mobile',
        'Expo integration',
        'App Store publishing',
        'Backend integration',
        'In-browser testing'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Platforms' },
    { id: 'full-stack', name: 'Full-Stack Generators' },
    { id: 'ide', name: 'AI-First IDEs' },
    { id: 'cli', name: 'CLI Agents' },
    { id: 'ui', name: 'UI Generators' },
    { id: 'mobile', name: 'Mobile-First' }
  ];

  const getFilteredPlatforms = () => {
    let filtered = platforms;
    
    if (filterCategory !== 'all') {
      filtered = platforms.filter(platform => {
        switch (filterCategory) {
          case 'full-stack':
            return platform.archetype.includes('Full-Stack');
          case 'ide':
            return platform.archetype.includes('IDE') || platform.archetype.includes('Editor');
          case 'cli':
            return platform.archetype.includes('CLI');
          case 'ui':
            return platform.archetype.includes('UI') || platform.archetype.includes('Component');
          case 'mobile':
            return platform.archetype.includes('Mobile');
          default:
            return true;
        }
      });
    }

    // Sort platforms
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'users':
          return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default: // popularity
          return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, ''));
      }
    });
  };

  const filteredPlatforms = getFilteredPlatforms();

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Platforms</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Development
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Platforms
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of the leading AI-powered development platforms 
            shaping the future of software creation
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Platform Overview</TabsTrigger>
            <TabsTrigger value="comparison">Detailed Comparison</TabsTrigger>
            <TabsTrigger value="analysis">Market Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Filters and Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-3 py-2 border border-border rounded-md bg-background text-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-sm"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="users">Sort by Users</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredPlatforms.length} of {platforms.length} platforms
            </div>

            {/* Platform Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlatforms.map((platform, index) => (
                  <PlatformCard key={index} platform={platform} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPlatforms.map((platform, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{platform.name}</h3>
                            <Badge variant="outline">{platform.archetype}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{platform.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-3">{platform.differentiator}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Target:</span>
                              <div>{platform.targetAudience}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Users:</span>
                              <div>{platform.users}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">AI:</span>
                              <div>{platform.aiModel}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Company:</span>
                              <div>{platform.company}</div>
                            </div>
                          </div>
                        </div>
                        <Button className="ml-4">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="comparison">
            <PlatformComparison />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Market Leaders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {platforms
                      .sort((a, b) => parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, '')))
                      .slice(0, 5)
                      .map((platform, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{platform.name}</span>
                          <span className="text-sm text-muted-foreground">{platform.users}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Highest Rated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {platforms
                      .sort((a, b) => b.rating - a.rating)
                      .slice(0, 5)
                      .map((platform, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-medium">{platform.name}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{platform.rating}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Platform Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Full-Stack Generators</span>
                      <span className="text-muted-foreground">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI-First IDEs</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CLI Agents</span>
                      <span className="text-muted-foreground">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UI Generators</span>
                      <span className="text-muted-foreground">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile-First</span>
                      <span className="text-muted-foreground">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Platforms;
