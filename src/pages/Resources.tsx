
import React from 'react';
import { Badge } from '@/components/ui/badge';
import ResourceLibrary from '@/components/ResourceLibrary';

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
            Comprehensive collection of tutorials, documentation, code examples, 
            and tools for mastering no-code development
          </p>
        </div>

        <ResourceLibrary />
      </div>
    </div>
  );
};

export default Resources;
