import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Play, Code, FileText, Trophy, Clock } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface InteractiveExercise {
  id: string;
  title: string;
  type: 'coding' | 'quiz' | 'project' | 'video';
  description: string;
  instructions: string[];
  timeLimit?: number;
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const sampleExercises: InteractiveExercise[] = [
  {
    id: 'lovable-chat-exercise',
    title: 'Chat-Driven App Creation',
    type: 'coding',
    description: 'Use Lovable\'s chat interface to build a todo application',
    instructions: [
      'Open Lovable and start a new project',
      'Use the chat to describe a todo app',
      'Add task categories and priorities',
      'Implement user authentication',
      'Deploy the application'
    ],
    timeLimit: 45,
    points: 100,
    difficulty: 'beginner',
    completed: false
  },
  {
    id: 'cursor-ai-refactor',
    title: 'AI-Assisted Code Refactoring',
    type: 'coding',
    description: 'Use Cursor\'s AI to refactor and improve existing code',
    instructions: [
      'Load the provided legacy code in Cursor',
      'Use AI chat to analyze code quality',
      'Implement suggested improvements',
      'Add proper error handling',
      'Write unit tests for refactored code'
    ],
    timeLimit: 60,
    points: 150,
    difficulty: 'intermediate',
    completed: false
  }
];

const sampleQuiz: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the main advantage of WebContainer technology in Bolt?',
    options: [
      'It requires local Node.js installation',
      'It runs Node.js directly in the browser',
      'It only works with React applications',
      'It needs a separate backend server'
    ],
    correctAnswer: 1,
    explanation: 'WebContainer technology allows Bolt to run Node.js directly in the browser, eliminating the need for local setup.'
  },
  {
    id: 'q2',
    question: 'Which platform is best suited for enterprise security requirements?',
    options: [
      'V0',
      'Rork',
      'Windsurf',
      'Base44'
    ],
    correctAnswer: 2,
    explanation: 'Windsurf offers FedRAMP certification and SOC 2 compliance, making it ideal for enterprise security requirements.'
  }
];

export default function InteractiveLearning() {
  const [activeExercise, setActiveExercise] = useState<InteractiveExercise | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [code, setCode] = useState('');

  // Timer effect
  useEffect(() => {
    if (timeRemaining && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const startExercise = (exercise: InteractiveExercise) => {
    setActiveExercise(exercise);
    if (exercise.timeLimit) {
      setTimeRemaining(exercise.timeLimit * 60); // Convert minutes to seconds
    }
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = sampleQuiz[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 10);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < sampleQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (activeExercise) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                {activeExercise.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={activeExercise.difficulty === 'beginner' ? 'secondary' : 
                              activeExercise.difficulty === 'intermediate' ? 'default' : 'destructive'}>
                  {activeExercise.difficulty}
                </Badge>
                <Badge variant="outline">
                  <Trophy className="h-3 w-3 mr-1" />
                  {activeExercise.points} points
                </Badge>
              </div>
            </div>
            {timeRemaining && (
              <div className="flex items-center gap-2 text-lg font-mono">
                <Clock className="h-5 w-5" />
                {formatTime(timeRemaining)}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">{activeExercise.description}</p>

            <div>
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1">
                {activeExercise.instructions.map((instruction, index) => (
                  <li key={index} className="text-sm">{instruction}</li>
                ))}
              </ol>
            </div>

            {activeExercise.type === 'coding' && (
              <div className="space-y-2">
                <h4 className="font-medium">Your Code:</h4>
                <Textarea
                  placeholder="Write your code here..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono text-sm min-h-[200px]"
                />
              </div>
            )}

            <div className="flex gap-2">
              <Button onClick={() => setActiveExercise(null)} variant="outline">
                Back to Exercises
              </Button>
              <Button className="flex-1">
                Submit Exercise
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Interactive Learning</h2>
        <p className="text-muted-foreground">
          Practice your skills with hands-on exercises and quizzes
        </p>
      </div>

      <Tabs defaultValue="exercises" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="exercises">Practical Exercises</TabsTrigger>
          <TabsTrigger value="quiz">Knowledge Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="exercises" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleExercises.map((exercise) => (
              <Card key={exercise.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {exercise.type === 'coding' && <Code className="h-4 w-4" />}
                      {exercise.type === 'video' && <Play className="h-4 w-4" />}
                      {exercise.type === 'project' && <FileText className="h-4 w-4" />}
                      {exercise.title}
                    </span>
                    {exercise.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={exercise.difficulty === 'beginner' ? 'secondary' : 
                                  exercise.difficulty === 'intermediate' ? 'default' : 'destructive'}>
                      {exercise.difficulty}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      {exercise.points} points
                      {exercise.timeLimit && (
                        <>
                          <Clock className="h-4 w-4 ml-2" />
                          {exercise.timeLimit} min
                        </>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => startExercise(exercise)}
                    disabled={exercise.completed}
                  >
                    {exercise.completed ? 'Completed' : 'Start Exercise'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quiz" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Knowledge Quiz</CardTitle>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {sampleQuiz.length}
                </span>
                <Badge variant="outline">Score: {score}</Badge>
              </div>
              <Progress value={(currentQuestionIndex / sampleQuiz.length) * 100} className="h-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  {sampleQuiz[currentQuestionIndex].question}
                </h3>

                <div className="space-y-2">
                  {sampleQuiz[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full p-3 text-left rounded border transition-colors ${
                        selectedAnswer === index 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:bg-muted'
                      }`}
                      onClick={() => setSelectedAnswer(index)}
                      disabled={showExplanation}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="p-4 bg-muted rounded">
                    <p className="text-sm">
                      <strong>Explanation:</strong> {sampleQuiz[currentQuestionIndex].explanation}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  {!showExplanation ? (
                    <Button onClick={submitAnswer} disabled={selectedAnswer === null}>
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={nextQuestion} disabled={currentQuestionIndex === sampleQuiz.length - 1}>
                      Next Question
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}