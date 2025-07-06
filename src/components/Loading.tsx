
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  text = 'Loading...', 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  );
};

export default Loading;
