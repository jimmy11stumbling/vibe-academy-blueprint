import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Star, 
  Users, 
  ExternalLink, 
  Search,
  Filter,
  Zap,
  Code,
  Smartphone,
  Globe,
  Brain,
  Cpu,
  Shield,
  Grid,
  List,
  TrendingUp,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { platforms, getPlatformsByCategory } from '@/data/platformsData';

const Platforms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Platforms', icon: Grid },
    { id: 'AI-Powered Development', name: 'AI-Powered', icon: Brain },
    { id: 'AI-Enhanced IDE', name: 'AI IDE', icon: Cpu },
    { id: 'Cloud Development Platform', name: 'Cloud Platform', icon: Globe },
    { id: 'Enterprise AI Development', name: 'Enterprise', icon: Shield },
    { id: 'Browser-Based Development', name: 'Browser-Based', icon: Code },
    { id: 'Mobile Development Platform', name: 'Mobile', icon: Smartphone }
  ];

  const filteredPlatforms = platforms.filter(platform => {
    const matchesSearch = platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         platform.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         platform.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || platform.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Platforms</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NoCode Development
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Platforms
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive analysis of the leading no-code and AI-powered development platforms. 
            Compare features, pricing, and capabilities to find the perfect tool for your project.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-background to-muted/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search platforms by name, category, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="flex-1"
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex-1"
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
                  <IconComponent className="h-3 w-3" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {category.name === 'All Platforms' ? 'All Platforms' : `${category.name} Platforms`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlatforms.map((platform) => {
                    const IconComponent = getCategoryIcon(platform.category);
                    return (
                      <Card key={platform.id} className="glass-card hover:border-primary/20 transition-all duration-300 group">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl">{platform.logo}</div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <IconComponent className="h-3 w-3" />
                              {platform.category.split(' ')[0]}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {platform.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{platform.tagline}</p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-sm leading-relaxed line-clamp-3">{platform.description}</p>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{platform.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{platform.userCount}</span>
                            </div>
                            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {platform.pricing.free ? 'Free tier' : 'Premium'}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {platform.features.slice(0, 3).map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {platform.features.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{platform.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button className="flex-1" asChild>
                              <Link to={`/platforms/${platform.id}`}>
                                <Play className="h-4 w-4 mr-2" />
                                Learn More
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={platform.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredPlatforms.map((platform) => {
                    const IconComponent = getCategoryIcon(platform.category);
                    return (
                      <Card key={platform.id} className="glass-card hover:border-primary/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-2">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="text-5xl">{platform.logo}</div>
                                <div>
                                  <h3 className="text-xl font-bold">{platform.name}</h3>
                                  <p className="text-muted-foreground">{platform.tagline}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="font-medium">{platform.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Users className="h-4 w-4" />
                                      <span>{platform.userCount}</span>
                                    </div>
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      <IconComponent className="h-3 w-3" />
                                      {platform.category}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm leading-relaxed mb-4">{platform.description}</p>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-medium mb-2">Best for</h4>
                                <p className="text-xs text-muted-foreground">{platform.targetAudience}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium mb-2">Use case</h4>
                                <p className="text-xs text-muted-foreground">{platform.useCase}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium mb-2">Tech stack</h4>
                                <div className="flex flex-wrap gap-1">
                                  {platform.techStack.slice(0, 3).map((tech, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-medium mb-2">Pricing</h4>
                                <div className="space-y-1 text-xs">
                                  {platform.pricing.free && <div>Free: Available</div>}
                                  {platform.pricing.starter && <div>Starter: {platform.pricing.starter}</div>}
                                  {platform.pricing.pro && <div>Pro: {platform.pricing.pro}</div>}
                                  {platform.pricing.enterprise && <div>Enterprise: {platform.pricing.enterprise}</div>}
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button className="flex-1" asChild>
                                  <Link to={`/platforms/${platform.id}`}>
                                    View Details
                                  </Link>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                  <a href={platform.website} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {filteredPlatforms.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No platforms found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search query or browse a different category.
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Platform Comparison Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Platform Comparison
              </CardTitle>
              <p className="text-muted-foreground">
                Compare platforms side by side to make informed decisions.
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Select platforms from the list above to start comparing features, pricing, and capabilities.
                </p>
                <Button asChild>
                  <Link to="/analysis">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Detailed Analysis
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Platforms;