
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Target,
  Award,
  Download,
  ExternalLink,
  FileText,
  Video,
  Code,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { completeAcademyModules } from '@/data/completeAcademyData';
import { Link } from 'react-router-dom';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Find the module
  const module = Object.values(completeAcademyModules)
    .flat()
    .find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
              <Link to="/academy">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Academy
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentLesson = module.lessons[currentLessonIndex];
  const progressPercentage = (completedLessons.length / module.lessons.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'interactive': return <Code className="h-4 w-4" />;
      case 'text': return <FileText className="h-4 w-4" />;
      case 'project': return <Target className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const nextLesson = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/academy" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Academy
            </Link>
            
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-2xl">{module.icon}</span>
                  {module.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">{module.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    {module.platform}
                  </Badge>
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {module.estimatedTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {module.lessons.length} lessons
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-2">
                  Progress: {completedLessons.length}/{module.lessons.length}
                </div>
                <Progress value={progressPercentage} className="w-48 h-2" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Lessons List */}
            <div className="lg:col-span-1">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Lessons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {module.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        index === currentLessonIndex
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setCurrentLessonIndex(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {getTypeIcon(lesson.type)}
                            <span className="text-sm font-medium truncate">
                              {lesson.title}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {getTypeIcon(currentLesson.type)}
                        {currentLesson.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={getDifficultyColor(currentLesson.difficulty)}>
                          {currentLesson.difficulty}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {currentLesson.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevLesson}
                        disabled={currentLessonIndex === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextLesson}
                        disabled={currentLessonIndex === module.lessons.length - 1}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{currentLesson.description}</p>

                  <Tabs defaultValue="content" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="content">Content</TabsTrigger>
                      <TabsTrigger value="exercises">Exercises</TabsTrigger>
                      <TabsTrigger value="resources">Resources</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="space-y-4">
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <div className="whitespace-pre-line">{currentLesson.content}</div>
                      </div>
                    </TabsContent>

                    <TabsContent value="exercises" className="space-y-4">
                      {currentLesson.exercises && currentLesson.exercises.length > 0 ? (
                        <div className="space-y-4">
                          {currentLesson.exercises.map((exercise, index) => (
                            <Card key={exercise.id} className="border-border/50">
                              <CardHeader>
                                <CardTitle className="text-lg">{exercise.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                  {exercise.description}
                                </p>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <h4 className="font-medium">Instructions:</h4>
                                  <ol className="list-decimal list-inside space-y-1">
                                    {exercise.instructions.map((instruction, idx) => (
                                      <li key={idx} className="text-sm">{instruction}</li>
                                    ))}
                                  </ol>
                                  {exercise.hints && exercise.hints.length > 0 && (
                                    <Accordion type="single" collapsible className="w-full">
                                      <AccordionItem value="hints">
                                        <AccordionTrigger>Hints</AccordionTrigger>
                                        <AccordionContent>
                                          <ul className="space-y-1">
                                            {exercise.hints.map((hint, idx) => (
                                              <li key={idx} className="text-sm">• {hint}</li>
                                            ))}
                                          </ul>
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No exercises available for this lesson.
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="resources" className="space-y-4">
                      {currentLesson.resources && currentLesson.resources.length > 0 ? (
                        <div className="space-y-3">
                          {currentLesson.resources.map((resource) => (
                            <Card key={resource.id} className="border-border/50">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium">{resource.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {resource.description}
                                    </p>
                                    <Badge variant="outline" className="mt-2">
                                      {resource.type}
                                    </Badge>
                                  </div>
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No additional resources for this lesson.
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>

                  <div className="flex justify-between items-center pt-6 border-t">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Lesson {currentLessonIndex + 1} of {module.lessons.length}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      {!completedLessons.includes(currentLesson.id) && (
                        <Button
                          variant="outline"
                          onClick={() => markLessonComplete(currentLesson.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Complete
                        </Button>
                      )}
                      {currentLessonIndex < module.lessons.length - 1 && (
                        <Button onClick={nextLesson} className="hero-gradient text-white">
                          Next Lesson
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleDetail;
