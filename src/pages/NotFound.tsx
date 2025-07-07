
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/')} 
            className="w-full hero-gradient text-white hover:opacity-90"
            size="lg"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
          
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="w-full"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Link to="/courses" className="block">
            <Button variant="ghost" className="w-full" size="lg">
              <Search className="mr-2 h-4 w-4" />
              Browse Courses
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
