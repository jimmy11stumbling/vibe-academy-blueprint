
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Star, ChevronRight } from 'lucide-react';
import { TutorialModule } from '@/types/tutorial';

interface PlatformCertificationProps {
  platformName: string;
  platformModules: TutorialModule[];
}

const PlatformCertification = ({ platformName, platformModules }: PlatformCertificationProps) => {
  const certificationModules = platformModules.filter(module => module.certificationAvailable);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Professional Certification</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Earn industry-recognized certifications that validate your expertise in {platformName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationModules.map((module) => (
          <Card key={module.id} className="glass-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {module.title} Certificate
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">{module.description}</p>
                </div>
                <Badge variant="outline" className="bg-primary/10">
                  Certificate
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Duration:</span>
                  <div className="font-medium">{module.totalDuration}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Level:</span>
                  <div className="font-medium capitalize">{module.difficultyLevel}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Projects:</span>
                  <div className="font-medium">{module.practicalProjects.length}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Rating:</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{module.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Certification Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Complete all {module.tutorials.length} tutorials</li>
                  <li>• Finish {module.practicalProjects.length} practical projects</li>
                  <li>• Pass the final assessment (80% minimum)</li>
                  <li>• Submit a capstone project</li>
                </ul>
              </div>

              <Button className="w-full">
                Start Certification Path
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformCertification;
