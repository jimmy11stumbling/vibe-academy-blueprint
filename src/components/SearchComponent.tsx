
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, X, Filter, Clock, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  type: 'course' | 'project' | 'instructor';
  title: string;
  description: string;
  tags: string[];
  rating?: number;
  students?: number;
  duration?: string;
  image?: string;
  url: string;
}

interface SearchComponentProps {
  placeholder?: string;
  showFilters?: boolean;
  onResultClick?: (result: SearchResult) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search courses, projects, and more...",
  showFilters = true,
  onResultClick
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'courses' | 'projects' | 'instructors'>('all');
  const navigate = useNavigate();

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      type: 'course',
      title: 'Complete Bubble Development Course',
      description: 'Master no-code web app development with Bubble from scratch',
      tags: ['Bubble', 'Web Apps', 'No-Code'],
      rating: 4.8,
      students: 1234,
      duration: '12 hours',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      url: '/course/1'
    },
    {
      id: '2',
      type: 'course',
      title: 'Webflow Masterclass',
      description: 'Build stunning websites without coding using Webflow',
      tags: ['Webflow', 'Web Design', 'CMS'],
      rating: 4.9,
      students: 856,
      duration: '8 hours',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop',
      url: '/course/2'
    },
    {
      id: '3',
      type: 'project',
      title: 'E-commerce Dashboard',
      description: 'Complete dashboard for managing online stores',
      tags: ['Bubble', 'E-commerce', 'Dashboard'],
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      url: '/projects'
    },
    {
      id: '4',
      type: 'instructor',
      title: 'Sarah Chen',
      description: 'Expert in Bubble development with 5+ years experience',
      tags: ['Bubble', 'Expert', 'Instructor'],
      rating: 4.9,
      students: 3420,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      url: '/instructor/sarah-chen'
    }
  ];

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = mockResults.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                               item.description.toLowerCase().includes(query.toLowerCase()) ||
                               item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
          const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter.slice(0, -1);
          return matchesQuery && matchesFilter;
        });
        setResults(filtered);
        setIsLoading(false);
        setShowResults(true);
      }, 300);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query, selectedFilter]);

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    } else {
      navigate(result.url);
    }
    setShowResults(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'courses', label: 'Courses' },
    { key: 'projects', label: 'Projects' },
    { key: 'instructors', label: 'Instructors' }
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground bg-transparent border-none cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showFilters && (
        <div className="flex items-center gap-2 mt-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter.key as any)}
                className="text-xs"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {showResults && (
        <Card className="absolute top-full left-0 right-0 mt-2 glass-card border-border/50 shadow-lg z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-2">
            {isLoading ? (
              <div className="p-4 text-center text-muted-foreground">
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      {result.image && (
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">{result.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {result.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          {result.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{result.rating}</span>
                            </div>
                          )}
                          {result.students && (
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{result.students}</span>
                            </div>
                          )}
                          {result.duration && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{result.duration}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchComponent;
