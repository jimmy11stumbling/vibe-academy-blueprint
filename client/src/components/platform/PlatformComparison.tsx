
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  X, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  Shield,
  Code,
  Zap,
  Globe
} from 'lucide-react';
import { TutorialModule } from '@/types/tutorial';
import { platformData } from '@/data/platformData';

interface PlatformComparisonProps {
  platforms: string[];
  platformModules: Record<string, TutorialModule[]>;
}

const PlatformComparison = ({ platforms, platformModules }: PlatformComparisonProps) => {
  const [selectedFeature, setSelectedFeature] = useState<string>('overview');

  const getComparisonData = () => {
    return platforms.map(platform => ({
      name: platform,
      data: platformData[platform as keyof typeof platformData],
      modules: platformModules[platform] || []
    }));
  };

  const comparisonData = getComparisonData();

  const features = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'learning', label: 'Learning', icon: Clock }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Platform Comparison</h2>
        <p className="text-muted-foreground">
          Compare features, pricing, and capabilities across platforms
        </p>
      </div>

      <Tabs value={selectedFeature} onValueChange={setSelectedFeature}>
        <TabsList className="grid w-full grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsTrigger key={feature.id} value={feature.id} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {feature.label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {comparisonData.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {platform.name}
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">
                        {platform.modules.length > 0 ? 
                          (platform.modules.reduce((sum, m) => sum + m.rating, 0) / platform.modules.length).toFixed(1) : 
                          'N/A'
                        }
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{platform.data?.overview}</p>
                  <Badge variant="outline">{platform.data?.marketPosition}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Platform</th>
                  <th className="text-left p-4 font-semibold">Free Tier</th>
                  <th className="text-left p-4 font-semibold">Pro Plan</th>
                  <th className="text-left p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((platform) => (
                  <tr key={platform.name} className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">{platform.name}</td>
                    <td className="p-4">{platform.data?.pricing.free || 'N/A'}</td>
                    <td className="p-4">{platform.data?.pricing.pro || 'N/A'}</td>
                    <td className="p-4">{platform.data?.pricing.enterprise || 'Custom'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <div className="space-y-6">
            {comparisonData.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle>{platform.name} Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {platform.data?.keyFeatures.map((feature, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-500" />
                        Strengths
                      </h4>
                      <ul className="space-y-1">
                        {platform.data?.strengths.map((strength, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonData.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {platform.name === 'Windsurf' && (
                      <>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">FedRAMP High Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">SOC 2 Type II Compliant</span>
                        </div>
                      </>
                    )}
                    {platform.name === 'Claude Code' && (
                      <>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Granular Permissions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Security-First Design</span>
                        </div>
                      </>
                    )}
                    {(platform.name !== 'Windsurf' && platform.name !== 'Claude Code') && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Standard Security Practices</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisonData.map((platform) => (
              <Card key={platform.name} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{platform.modules.length}</div>
                      <div className="text-xs text-muted-foreground">Modules</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {platform.modules.reduce((sum, m) => sum + m.tutorials.length, 0)}
                      </div>
                      <div className="text-xs text-muted-foreground">Tutorials</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">
                      {platform.modules.reduce((sum, m) => sum + parseInt(m.totalDuration.split(' ')[0]), 0)}h
                    </div>
                    <div className="text-xs text-muted-foreground">Total Content</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {platform.modules.reduce((sum, m) => sum + m.enrolledStudents, 0).toLocaleString()} students
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlatformComparison;
