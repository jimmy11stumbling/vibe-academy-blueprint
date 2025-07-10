
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Users, Code, Zap } from 'lucide-react';

interface PlatformCardProps {
  platform: {
    name: string;
    archetype: string;
    targetAudience: string;
    coreStack: string;
    aiModel: string;
    monetization: string;
    differentiator: string;
    company: string;
    pricing?: {
      free?: string;
      starter?: string;
      pro?: string;
      enterprise?: string;
    };
    features: string[];
    rating: number;
    users: string;
    logo?: string;
  };
}

const PlatformCard = ({ platform }: PlatformCardProps) => {
  const navigate = useNavigate();
  
  const getArchetypeIcon = (archetype: string) => {
    if (archetype.includes('Full-Stack')) return Code;
    if (archetype.includes('IDE')) return Zap;
    if (archetype.includes('CLI')) return Users;
    return Star;
  };

  const Icon = getArchetypeIcon(platform.archetype);

  const handleLearnMore = () => {
    navigate(`/platforms/${encodeURIComponent(platform.name)}`);
  };

  return (
    <Card className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{platform.name}</CardTitle>
              <Badge variant="outline" className="text-xs mt-1">
                {platform.archetype}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{platform.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {platform.differentiator}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <Users className="h-3 w-3 text-blue-500" />
            <span className="text-muted-foreground">Target:</span>
            <span>{platform.targetAudience}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Code className="h-3 w-3 text-green-500" />
            <span className="text-muted-foreground">Stack:</span>
            <span>{platform.coreStack}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Zap className="h-3 w-3 text-purple-500" />
            <span className="text-muted-foreground">AI:</span>
            <span>{platform.aiModel}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">{platform.users} users</span>
          <Badge variant="secondary">{platform.company}</Badge>
        </div>

        {platform.pricing && (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {platform.pricing.free && (
              <div className="text-green-600 dark:text-green-400">Free: {platform.pricing.free}</div>
            )}
            {platform.pricing.pro && (
              <div className="text-blue-600 dark:text-blue-400">Pro: {platform.pricing.pro}</div>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <Button size="sm" className="flex-1" onClick={handleLearnMore}>
            Learn More
          </Button>
          <Button size="sm" variant="outline">
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
