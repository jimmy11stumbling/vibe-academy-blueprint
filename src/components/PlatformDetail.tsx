
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TutorialSystem from '@/components/TutorialSystem';
import { getAllPlatformModules } from '@/components/PlatformModules';
import PlatformOverview from '@/components/platform/PlatformOverview';
import PlatformProjects from '@/components/platform/PlatformProjects';
import PlatformCertification from '@/components/platform/PlatformCertification';
import PlatformComparison from '@/components/platform/PlatformComparison';
import LearningPathBuilder from '@/components/platform/LearningPathBuilder';
import { platformData } from '@/data/platformData';
import { ArrowLeft } from 'lucide-react';

const PlatformDetail = () => {
  const { platformName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const decodedPlatformName = decodeURIComponent(platformName || '');
  const allModules = getAllPlatformModules();
  const platformModules = allModules[decodedPlatformName as keyof typeof allModules] || [];
  const platform = platformData[decodedPlatformName as keyof typeof platformData];

  if (!platform) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Platform Not Found</h1>
          <Button onClick={() => navigate('/platforms')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Platforms
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/platforms')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Platforms
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {decodedPlatformName}
              <span className="hero-gradient bg-clip-text text-transparent block mt-2">
                Academy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {platform.overview}
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <PlatformOverview 
              platformName={decodedPlatformName}
              platform={platform}
              platformModules={platformModules}
            />
          </TabsContent>

          <TabsContent value="tutorials">
            <TutorialSystem platform={decodedPlatformName} modules={platformModules} />
          </TabsContent>

          <TabsContent value="projects">
            <PlatformProjects 
              platformName={decodedPlatformName}
              platformModules={platformModules}
            />
          </TabsContent>

          <TabsContent value="paths">
            <LearningPathBuilder 
              platformName={decodedPlatformName}
              availableModules={platformModules}
            />
          </TabsContent>

          <TabsContent value="certification">
            <PlatformCertification 
              platformName={decodedPlatformName}
              platformModules={platformModules}
            />
          </TabsContent>

          <TabsContent value="compare">
            <PlatformComparison 
              platforms={[decodedPlatformName]}
              platformModules={allModules}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlatformDetail;
