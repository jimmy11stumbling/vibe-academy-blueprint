import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Users, Star, Play, BookOpen, Award } from 'lucide-react';
const CoursesSection = () => {
  const courses = [{
    id: 1,
    title: 'Master Lovable Development',
    description: 'Learn to build full-stack web applications using Lovable\'s AI-powered platform. From chat prompts to deployed apps.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'SJ',
    instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    level: 'Beginner to Advanced',
    duration: '12 hours',
    students: 2847,
    rating: 4.9,
    reviews: 356,
    price: '$149',
    originalPrice: '$299',
    isPopular: true,
    tags: ['Lovable', 'Full-Stack', 'AI-Powered']
  }, {
    id: 2,
    title: 'Replit Collaborative Coding',
    description: 'Master the collaborative in-browser IDE. Build, share, and deploy applications with real-time collaboration features.',
    instructor: 'Mike Chen',
    instructorAvatar: 'MC',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
    level: 'Intermediate',
    duration: '8 hours',
    students: 1923,
    rating: 4.8,
    reviews: 234,
    price: '$99',
    originalPrice: '$199',
    isPopular: false,
    tags: ['Replit', 'Collaboration', 'Cloud IDE']
  }, {
    id: 3,
    title: 'Cursor AI-First Development',
    description: 'Supercharge your coding with Cursor\'s AI-powered IDE. Learn codebase-aware chat and predictive editing.',
    instructor: 'Emma Davis',
    instructorAvatar: 'ED',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    level: 'Advanced',
    duration: '6 hours',
    students: 1456,
    rating: 4.7,
    reviews: 189,
    price: '$79',
    originalPrice: '$159',
    isPopular: false,
    tags: ['Cursor', 'AI IDE', 'VS Code']
  }, {
    id: 4,
    title: 'Windsurf Agentic Coding',
    description: 'Master enterprise-grade agentic coding with Windsurf. Build complex multi-file projects with AI automation.',
    instructor: 'Alex Rodriguez',
    instructorAvatar: 'AR',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    level: 'Advanced',
    duration: '10 hours',
    students: 987,
    rating: 4.8,
    reviews: 156,
    price: '$129',
    originalPrice: '$259',
    isPopular: true,
    tags: ['Windsurf', 'Enterprise', 'Agentic AI']
  }, {
    id: 5,
    title: 'Bolt Full-Stack WebContainers',
    description: 'Build complete applications in the browser using Bolt\'s WebContainer technology and AI agent capabilities.',
    instructor: 'Dr. Lisa Park',
    instructorAvatar: 'LP',
    instructorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    level: 'Intermediate',
    duration: '9 hours',
    students: 743,
    rating: 4.9,
    reviews: 98,
    price: '$199',
    originalPrice: '$399',
    isPopular: false,
    tags: ['Bolt', 'WebContainers', 'StackBlitz']
  }, {
    id: 6,
    title: 'Claude Code Security-First CLI',
    description: 'Master terminal-based development with Claude Code. Learn secure, agentic coding with explicit control.',
    instructor: 'Tom Wilson',
    instructorAvatar: 'TW',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    level: 'Advanced',
    duration: '11 hours',
    students: 1678,
    rating: 4.6,
    reviews: 267,
    price: '$139',
    originalPrice: '$279',
    isPopular: false,
    tags: ['Claude Code', 'CLI', 'Security']
  }, {
    id: 7,
    title: 'Gemini CLI Open-Source Development',
    description: 'Harness Google\'s Gemini CLI for terminal-based AI development. Learn codebase analysis and command execution.',
    instructor: 'Jennifer Lee',
    instructorAvatar: 'JL',
    instructorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    level: 'Intermediate',
    duration: '7 hours',
    students: 567,
    rating: 4.8,
    reviews: 87,
    price: '$119',
    originalPrice: '$239',
    isPopular: false,
    tags: ['Gemini CLI', 'Google', 'Open Source']
  }, {
    id: 8,
    title: 'Base44 All-in-One App Building',
    description: 'Create complete applications with Base44\'s integrated platform. From database to deployment in one place.',
    instructor: 'Ryan Taylor',
    instructorAvatar: 'RT',
    instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
    level: 'Beginner',
    duration: '5 hours',
    students: 2134,
    rating: 4.7,
    reviews: 312,
    price: '$69',
    originalPrice: '$139',
    isPopular: true,
    tags: ['Base44', 'All-in-One', 'Wix']
  }, {
    id: 9,
    title: 'V0 UI Generation with Vercel',
    description: 'Master generative UI design with V0. Create React components from prompts and images using Vercel\'s platform.',
    instructor: 'Maria Garcia',
    instructorAvatar: 'MG',
    instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    level: 'Intermediate',
    duration: '6 hours',
    students: 1245,
    rating: 4.8,
    reviews: 178,
    price: '$89',
    originalPrice: '$179',
    isPopular: false,
    tags: ['V0', 'UI Generation', 'Vercel']
  }, {
    id: 10,
    title: 'Rork Mobile App Development',
    description: 'Build native cross-platform mobile apps with Rork. Learn React Native and Expo development through AI assistance.',
    instructor: 'David Kim',
    instructorAvatar: 'DK',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    level: 'Intermediate',
    duration: '8 hours',
    students: 892,
    rating: 4.5,
    reviews: 124,
    price: '$109',
    originalPrice: '$219',
    isPopular: false,
    tags: ['Rork', 'Mobile Apps', 'React Native']
  }];
  return <section id="courses" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Courses</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Master No-Code with
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Expert-Led Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn from industry experts and build real-world applications. 
            Our comprehensive courses take you from beginner to professional no-code developer.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map(course => <Card key={course.id} className="glass-card border-border/50 hover:border-primary/20 transition-all duration-300 group relative">
              {course.isPopular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="hero-gradient text-white">Most Popular</Badge>
                </div>}
              
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Play className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {course.description}
                </p>
                
                

                <div className="flex flex-wrap gap-1 mb-3">
                  {course.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>)}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.level}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {course.rating} ({course.reviews})
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  
                  <Button size="sm" className="hero-gradient text-white hover:opacity-90">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Course Stats */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Courses
            <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default CoursesSection;