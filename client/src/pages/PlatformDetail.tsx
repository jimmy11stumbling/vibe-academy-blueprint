
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  Users, 
  BookOpen,
  Play,
  CheckCircle,
  Award,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Code,
  Smartphone,
  Globe,
  Cpu,
  Brain
} from 'lucide-react';
import { platforms, getplatformByDd } from '@/data/platformsData';

const PlatformDetail = () => {
  const { platformId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const platform = getplatformByDd(platformId || '');

  if (!platform) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Platform Not Found</h1>
            <Button asChild>
              <Link to="/platforms">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Platforms
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI-Powered Development': return Brain;
      case 'AI-Enhanced IDE': return Cpu;
      case 'Cloud Development Platform': return Globe;
      case 'Enterprise AI Development': return Shield;
      case 'Browser-Based Development': return Code;
      case 'Mobile Development Platform': return Smartphone;
      default: return Zap;
    }
  };

  const IconComponent = getCategoryIcon(platform.category);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/platforms">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Platforms
            </Link>
          </Button>
        </div>

        {/* Platform Header */}
        <div className="bg-gradient-to-r from-background to-muted/20 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-6">
                <div className="text-6xl">{platform.logo}</div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{platform.name}</h1>
                  <p className="text-xl text-muted-foreground mb-4">{platform.tagline}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{platform.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-5 w-5" />
                      <span>{platform.userCount} users</span>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <IconComponent className="h-3 w-3" />
                      {platform.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{platform.description}</p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Start</h3>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link to={platform.learningPath}>
                        <Play className="h-4 w-4 mr-2" />
                        Start Learning Path
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={platform.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Platform
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={platform.documentation} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="learning">Learning Path</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Platform Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {platform.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Use Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Best for:</h4>
                      <p className="text-sm text-muted-foreground">{platform.useCase}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Target audience:</h4>
                      <p className="text-sm text-muted-foreground">{platform.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Tech stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {platform.techStack.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    Limitations to Consider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platform.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platform.features.map((feature, index) => (
                <Card key={index} className="hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold leading-tight">{feature}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This feature enhances your development workflow by providing advanced capabilities and improved efficiency.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platform.pricing.free && (
                <Card className="border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-700 dark:text-green-300">Free</CardTitle>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-300">$0</div>
                    <p className="text-sm text-muted-foreground">Perfect for getting started</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Basic features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Community support
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Limited usage
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              )}
              
              {platform.pricing.starter && (
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="text-3xl font-bold">{platform.pricing.starter}</div>
                    <p className="text-sm text-muted-foreground">For small projects</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        All free features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Increased limits
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Email support
                      </li>
                    </ul>
                    <Button className="w-full">
                      Start Trial
                    </Button>
                  </CardContent>
                </Card>
              )}

              {platform.pricing.pro && (
                <Card className="border-primary ring-1 ring-primary/20 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <div className="text-3xl font-bold">{platform.pricing.pro}</div>
                    <p className="text-sm text-muted-foreground">For growing businesses</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        All starter features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Advanced features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Priority support
                      </li>
                    </ul>
                    <Button className="w-full">
                      Start Trial
                    </Button>
                  </CardContent>
                </Card>
              )}

              {platform.pricing.enterprise && (
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <div className="text-3xl font-bold">{platform.pricing.enterprise}</div>
                    <p className="text-sm text-muted-foreground">For large organizations</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        All pro features
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Custom integrations
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Dedicated support
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="mt-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Learning Path for {platform.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Master {platform.name} with our comprehensive learning path designed for all skill levels.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platform.tutorials.map((tutorial, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary/20 transition-colors">
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{tutorial}</h4>
                          <p className="text-sm text-muted-foreground">
                            {index === 0 ? 'Start with the basics' : 
                             index === 1 ? 'Build real projects' : 
                             'Master advanced concepts'}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {index === 0 ? '2-3 hours' : index === 1 ? '4-5 hours' : '3-4 hours'}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Progress value={index === 0 ? 100 : index === 1 ? 60 : 0} className="w-20 mb-2" />
                          <Button size="sm" variant={index === 0 ? "default" : "outline"} asChild>
                            <Link to={platform.learningPath}>
                              {index === 0 ? 'Continue' : index === 1 ? 'Resume' : 'Start'}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Integrations & Ecosystem</CardTitle>
                <p className="text-muted-foreground">
                  {platform.name} integrates seamlessly with popular tools and services.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {platform.integrations.map((integration, index) => (
                    <div key={index} className="p-4 border rounded-lg text-center hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Code className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="text-sm font-medium">{integration}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>How {platform.name} Compares</CardTitle>
                <p className="text-muted-foreground">
                  See how {platform.name} stacks up against other platforms in key areas.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">A+</div>
                      <div className="text-sm font-medium">Ease of Use</div>
                      <div className="text-xs text-muted-foreground mt-1">Intuitive interface</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">A</div>
                      <div className="text-sm font-medium">Features</div>
                      <div className="text-xs text-muted-foreground mt-1">Comprehensive toolset</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">B+</div>
                      <div className="text-sm font-medium">Value</div>
                      <div className="text-xs text-muted-foreground mt-1">Good pricing</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-4">Platform Comparison</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="text-sm">Learning Curve</span>
                        <div className="flex items-center gap-2">
                          <Progress value={platform.rating * 20} className="w-24" />
                          <span className="text-sm font-medium">Easy</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b">
                        <span className="text-sm">Community Support</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-24" />
                          <span className="text-sm font-medium">Strong</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm">Documentation Quality</span>
                        <div className="flex items-center gap-2">
                          <Progress value={90} className="w-24" />
                          <span className="text-sm font-medium">Excellent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlatformDetail;
