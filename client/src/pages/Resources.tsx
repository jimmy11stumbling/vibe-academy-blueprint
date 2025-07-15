
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceLibrary from '@/components/ResourceLibrary';
import LearningPathBuilder from '@/components/LearningPathBuilder';
import InteractiveDemo from '@/components/InteractiveDemo';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learning
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Resources
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of tutorials, learning paths, interactive demos, 
            and tools for mastering no-code development
          </p>
        </div>

        <Tabs defaultValue="library" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="library">Resource Library</TabsTrigger>
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="demos">Interactive Demos</TabsTrigger>
            <TabsTrigger value="tools">Development Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="library">
            <ResourceLibrary />
          </TabsContent>

          <TabsContent value="paths">
            <LearningPathBuilder />
          </TabsContent>

          <TabsContent value="demos">
            <InteractiveDemo />
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Development Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential tools and utilities for no-code and AI-assisted development
              </p>
            </div>
            {/* Tools content would be implemented here */}
            <div className="text-center py-12">
              <p className="text-muted-foreground">Development tools section coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resources;
