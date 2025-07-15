
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  BookOpen, 
  Users, 
  FileText, 
  Clock, 
  Star,
  TrendingUp,
  X
} from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'course' | 'instructor' | 'article' | 'project';
  title: string;
  description: string;
  thumbnail?: string;
  rating?: number;
  duration?: string;
  instructor?: string;
  tags?: string[];
}

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Bubble tutorial',
    'Webflow responsive design',
    'No-code database'
  ]);
  const [popularSearches] = useState<string[]>([
    'Bubble development',
    'Webflow masterclass',
    'Airtable automation',
    'No-code authentication',
    'API integration'
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      type: 'course',
      title: 'Complete Bubble Development Course',
      description: 'Learn to build powerful web applications without code using Bubble',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      rating: 4.8,
      duration: '12 hours',
      instructor: 'Sarah Johnson',
      tags: ['Bubble', 'No-Code', 'Web Apps']
    },
    {
      id: '2',
      type: 'course',
      title: 'Webflow Responsive Design Masterclass',
      description: 'Master responsive web design with Webflow\'s visual editor',
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop',
      rating: 4.9,
      duration: '8 hours',
      instructor: 'Mike Chen',
      tags: ['Webflow', 'Design', 'Responsive']
    },
    {
      id: '3',
      type: 'instructor',
      title: 'Sarah Johnson',
      description: 'Expert no-code developer with 5+ years of experience in Bubble',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      tags: ['Bubble', 'Expert', 'Mentor']
    },
    {
      id: '4',
      type: 'article',
      title: 'Building Your First No-Code Database',
      description: 'A comprehensive guide to creating and managing databases in no-code platforms',
      tags: ['Database', 'Tutorial', 'Beginner']
    },
    {
      id: '5',
      type: 'project',
      title: 'E-commerce Store Template',
      description: 'Ready-to-use template for building online stores with Bubble',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      tags: ['Template', 'E-commerce', 'Bubble']
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const filteredResults = mockResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setResults(filteredResults);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    handleSearch(value);
  };

  const handleSearchSelect = (searchTerm: string) => {
    setQuery(searchTerm);
    setIsOpen(true);
    handleSearch(searchTerm);
    
    // Add to recent searches
    setRecentSearches(prev => {
      const filtered = prev.filter(term => term !== searchTerm);
      return [searchTerm, ...filtered].slice(0, 5);
    });
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return BookOpen;
      case 'instructor': return Users;
      case 'article': return FileText;
      case 'project': return Star;
      default: return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'instructor': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'article': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'project': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search courses, instructors, articles..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 h-12 text-base"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 glass-card border-border/50 z-50 max-h-96 overflow-hidden">
          <CardContent className="p-0">
            {/* Search Results */}
            {query && (
              <div className="max-h-80 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground mt-2">Searching...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="divide-y divide-border">
                    {results.map((result) => {
                      const Icon = getTypeIcon(result.type);
                      return (
                        <div
                          key={result.id}
                          className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                          onClick={() => console.log('Selected:', result)}
                        >
                          <div className="flex items-start gap-3">
                            {result.thumbnail ? (
                              result.type === 'instructor' ? (
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={result.thumbnail} alt={result.title} />
                                  <AvatarFallback>
                                    {result.title.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                              ) : (
                                <img
                                  src={result.thumbnail}
                                  alt={result.title}
                                  className="w-12 h-12 rounded object-cover"
                                />
                              )
                            ) : (
                              <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                                <Icon className="h-5 w-5 text-muted-foreground" />
                              </div>
                            )}
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className={`text-xs ${getTypeColor(result.type)}`}>
                                  {result.type}
                                </Badge>
                                {result.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs text-muted-foreground">{result.rating}</span>
                                  </div>
                                )}
                                {result.duration && (
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{result.duration}</span>
                                  </div>
                                )}
                              </div>
                              
                              <h3 className="font-medium text-sm truncate">{result.title}</h3>
                              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                {result.description}
                              </p>
                              
                              {result.instructor && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  by {result.instructor}
                                </p>
                              )}
                              
                              {result.tags && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {result.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : query ? (
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                    <p className="text-xs text-muted-foreground mt-1">Try different keywords or browse popular searches below</p>
                  </div>
                ) : null}
              </div>
            )}

            {/* Recent and Popular Searches */}
            {!query && (
              <div className="p-4 space-y-4">
                {recentSearches.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Recent Searches
                    </h3>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchSelect(search)}
                          className="block w-full text-left px-2 py-1 text-sm hover:bg-muted/50 rounded transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchSelect(search)}
                        className="px-2 py-1 text-xs bg-muted hover:bg-muted/80 rounded transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchComponent;
