
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  BookOpen,
  Clock,
  Award,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Rocket,
  CheckCircle
} from 'lucide-react';
import { TutorialModule } from '@/types/tutorial';

interface PlatformData {
  overview: string;
  keyFeatures: string[];
  strengths: string[];
  limitations: string[];
  pricing: Record<string, string>;
  marketPosition: string;
}

interface PlatformOverviewProps {
  platformName: string;
  platform: PlatformData;
  platformModules: TutorialModule[];
}

const PlatformOverview = ({ platformName, platform, platformModules }: PlatformOverviewProps) => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">
              {platformModules.reduce((sum, module) => sum + module.enrolledStudents, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Students Enrolled</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{platformModules.length}</div>
            <div className="text-sm text-muted-foreground">Learning Modules</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">
              {platformModules.reduce((sum, module) => 
                sum + parseInt(module.totalDuration.split(' ')[0]), 0
              )}h
            </div>
            <div className="text-sm text-muted-foreground">Total Content</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card text-center">
          <CardContent className="p-6">
            <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">
              {platformModules.filter(m => m.certificationAvailable).length}
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {platform.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Strengths & Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {platform.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {platform.limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                  <span className="text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Pricing Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(platform.pricing).map(([tier, price]) => (
                <div key={tier} className="flex justify-between items-center">
                  <span className="capitalize font-medium">{tier}:</span>
                  <Badge variant="outline">{price}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Market Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{platform.marketPosition}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlatformOverview;
