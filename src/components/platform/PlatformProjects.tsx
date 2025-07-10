
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { TutorialModule } from '@/types/tutorial';

interface PlatformProjectsProps {
  platformName: string;
  platformModules: TutorialModule[];
}

const PlatformProjects = ({ platformName, platformModules }: PlatformProjectsProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Hands-On Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Apply your knowledge with real-world projects designed to showcase {platformName} capabilities
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platformModules.map((module) => 
          module.practicalProjects.map((project, index) => (
            <Card key={`${module.id}-${index}`} className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{project}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {module.difficultyLevel}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Part of the {module.title} module
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">Start Project</Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default PlatformProjects;
