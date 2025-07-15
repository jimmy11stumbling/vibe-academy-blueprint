
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Download, Share2, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Certification {
  id: string;
  title: string;
  platform: string;
  description: string;
  requirements: string[];
  progress: number;
  earned: boolean;
  earnedDate?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 'lovable-fundamentals-cert',
    title: 'Lovable 2.0 Fundamentals Certified Developer',
    platform: 'Lovable 2.0',
    description: 'Demonstrates proficiency in chat-driven full-stack development',
    requirements: [
      'Complete all Lovable fundamentals lessons',
      'Build and deploy a portfolio project',
      'Pass the certification exam (80% minimum)',
      'Submit a project showcase'
    ],
    progress: 75,
    earned: false,
    skills: ['Chat-driven Development', 'Full-stack Architecture', 'Supabase Integration', 'Deployment']
  },
  {
    id: 'cursor-advanced-cert',
    title: 'Cursor IDE Advanced Developer',
    platform: 'Cursor',
    description: 'Advanced AI-assisted development capabilities with Cursor IDE',
    requirements: [
      'Complete advanced Cursor modules',
      'Demonstrate codebase-aware AI usage',
      'Complete team collaboration project',
      'Pass technical assessment'
    ],
    progress: 60,
    earned: false,
    skills: ['AI-Assisted Development', 'Code Generation', 'Refactoring', 'Team Collaboration']
  },
  {
    id: 'bolt-webcontainer-cert',
    title: 'Bolt WebContainer Specialist',
    platform: 'Bolt',
    description: 'Expert in browser-based full-stack development using WebContainer',
    requirements: [
      'Master WebContainer technology',
      'Build real-time collaboration app',
      'Implement advanced deployment strategies',
      'Complete performance optimization'
    ],
    progress: 90,
    earned: true,
    earnedDate: '2024-01-15',
    skills: ['WebContainer Technology', 'Browser Development', 'Real-time Features', 'Performance Optimization']
  }
];

export default function CertificationSystem() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const earnedCertifications = certifications.filter(cert => cert.earned);
  const availableCertifications = certifications.filter(cert => !cert.earned);

  const handleDownloadCertificate = (certId: string) => {
    // In a real implementation, this would generate and download a PDF certificate
    console.log(`Downloading certificate: ${certId}`);
  };

  const handleShareCertificate = (certId: string) => {
    // In a real implementation, this would share the certificate on social media
    console.log(`Sharing certificate: ${certId}`);
  };

  return (
    <div className="space-y-6">
      {/* Earned Certifications */}
      {earnedCertifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Your Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedCertifications.map((cert) => (
              <Card key={cert.id} className="relative overflow-hidden border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    <Trophy className="h-3 w-3 mr-1" />
                    Certified
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Earned on {cert.earnedDate}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleDownloadCertificate(cert.id)}
                      className="flex-1"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleShareCertificate(cert.id)}
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Available Certifications */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="h-6 w-6" />
          Available Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableCertifications.map((cert) => (
            <Card key={cert.id} className="relative">
              <CardHeader>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <Badge variant="outline">{cert.platform}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{cert.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">{cert.progress}%</span>
                  </div>
                  <Progress value={cert.progress} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedCert(cert)}
                    >
                      View Requirements
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{cert.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                      <div>
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {cert.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
