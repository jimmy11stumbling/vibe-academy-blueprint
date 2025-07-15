import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft,
  Play,
  CheckCircle,
  Lock,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Target,
  Zap,
  Download,
  MessageSquare,
  ChevronRight,
  PlayCircle,
  FileText,
  Monitor,
  Code
} from 'lucide-react';
import { getModuleById } from '@/data/academyModules';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const module = getModuleById(moduleId || '');

  if (!module) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <Button asChild>
              <Link to="/academy">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Academy
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const progress = (completedLessons / module.lessons.length) * 100;

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return PlayCircle;
      case 'interactive': return Monitor;
      case 'hands-on': return Code;
      case 'reading': return FileText;
      default: return BookOpen;
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'text-red-600 bg-red-50 dark:bg-red-950/20';
      case 'interactive': return 'text-blue-600 bg-blue-50 dark:bg-blue-950/20';
      case 'hands-on': return 'text-green-600 bg-green-50 dark:bg-green-950/20';
      case 'reading': return 'text-purple-600 bg-purple-50 dark:bg-purple-950/20';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-950/20';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/academy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Academy
            </Link>
          </Button>
        </div>

        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                  module.category === 'foundation' ? 'from-green-400 to-green-600' :
                  module.category === 'platform-specific' ? 'from-blue-400 to-blue-600' :
                  module.category === 'advanced' ? 'from-purple-400 to-purple-600' :
                  'from-orange-400 to-orange-600'
                } flex items-center justify-center text-white`}>
                  {module.category === 'foundation' ? <Target className="h-8 w-8" /> :
                   module.category === 'platform-specific' ? <Code className="h-8 w-8" /> :
                   <Zap className="h-8 w-8" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={module.price === 'free' ? 'default' : 'secondary'}>
                      {module.price === 'free' ? 'FREE COURSE' : 'PREMIUM COURSE'}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {module.difficulty}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {module.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                  <p className="text-lg text-muted-foreground">{module.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{module.rating}</span>
                  <span>({module.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{module.lessons.length} lessons</span>
                </div>
                {module.certification && (
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>Certificate</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Course Progress</span>
                    <span className="text-sm text-muted-foreground">{completedLessons} of {module.lessons.length} lessons</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{module.overview}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Course Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">
                      {module.price === 'free' ? 'Free' : '$49'}
                    </div>
                    {module.price !== 'free' && (
                      <div className="text-sm text-muted-foreground line-through">$99</div>
                    )}
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    {progress > 0 ? 'Continue Learning' : 'Start Course'}
                  </Button>
                  
                  {module.price !== 'free' && (
                    <Button variant="outline" className="w-full">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Preview Course
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Includes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{module.lessons.length} video lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Downloadable resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Hands-on projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Community access</span>
                </div>
                {module.certification && (
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{module.instructor}</div>
                    <div className="text-sm text-muted-foreground">Expert Instructor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Course Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <p className="text-muted-foreground">
                  {module.lessons.length} lessons • {module.duration} total duration
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {module.lessons.map((lesson, index) => {
                    const IconComponent = getLessonIcon(lesson.type);
                    const isLocked = lesson.locked;
                    const isCompleted = lesson.completed;
                    
                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center gap-4 p-4 border rounded-lg transition-colors ${
                          isLocked ? 'opacity-50' : 'hover:border-primary/20'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            {isCompleted ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : isLocked ? (
                              <Lock className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <PlayCircle className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{lesson.title}</h4>
                              <Badge variant="outline" className={`text-xs ${getLessonTypeColor(lesson.type)}`}>
                                <IconComponent className="h-3 w-3 mr-1" />
                                {lesson.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{lesson.description}</p>
                            
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {lesson.objectives.length} objectives
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!isLocked && (
                            <Button 
                              size="sm" 
                              variant={isCompleted ? "outline" : "default"}
                              onClick={() => setCurrentLessonIndex(index)}
                            >
                              {isCompleted ? 'Review' : 'Start'}
                            </Button>
                          )}
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-8">
            <div className="space-y-6">
              {module.projects.map((project, index) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="capitalize">
                            {project.difficulty}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {project.estimatedTime}
                          </div>
                        </div>
                      </div>
                      <Button>
                        <Play className="h-4 w-4 mr-2" />
                        Start Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Skills Practiced</h4>
                        <div className="space-y-1">
                          {project.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="text-sm text-muted-foreground">
                              • {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Deliverables</h4>
                        <div className="space-y-1">
                          {project.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="text-sm text-muted-foreground">
                              • {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Resources</h4>
                        <div className="space-y-1">
                          {project.resources.map((resource, resourceIndex) => (
                            <div key={resourceIndex} className="text-sm text-muted-foreground">
                              • {resource}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-bold">{module.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({module.students.toLocaleString()} reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Student {review}</div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="h-3 w-3 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Excellent course! The instructor explains complex concepts clearly and the hands-on projects really help solidify the learning.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ModuleDetail;