
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Timer, CheckCircle, XCircle, Trophy, Clock, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  type: 'multiple-choice' | 'multiple-select' | 'true-false' | 'short-answer' | 'coding';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  platform: string;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  platform: string;
  timeLimit: number; // in minutes
  passingScore: number; // percentage
  questions: Question[];
  certification?: string;
}

const assessments: Assessment[] = [
  {
    id: 'lovable-fundamentals-exam',
    title: 'Lovable 2.0 Fundamentals Certification Exam',
    description: 'Comprehensive exam covering chat-driven development and full-stack concepts',
    platform: 'Lovable 2.0',
    timeLimit: 60,
    passingScore: 80,
    certification: 'Lovable 2.0 Certified Developer',
    questions: [
      {
        id: 'lovable-q1',
        type: 'multiple-choice',
        question: 'What is the primary advantage of Lovable\'s chat-driven development approach?',
        options: [
          'Faster code compilation',
          'Natural language description of requirements',
          'Better error handling',
          'Improved database performance'
        ],
        correctAnswer: 'Natural language description of requirements',
        explanation: 'Lovable allows developers to describe what they want to build in natural language, making development more accessible.',
        points: 10,
        difficulty: 'beginner',
        platform: 'Lovable 2.0'
      },
      {
        id: 'lovable-q2',
        type: 'multiple-select',
        question: 'Which backend services are natively integrated with Lovable? (Select all that apply)',
        options: [
          'Supabase',
          'Firebase',
          'MongoDB',
          'Authentication',
          'Deployment'
        ],
        correctAnswer: ['Supabase', 'Authentication', 'Deployment'],
        explanation: 'Lovable has native integration with Supabase, built-in authentication, and one-click deployment.',
        points: 15,
        difficulty: 'intermediate',
        platform: 'Lovable 2.0'
      },
      {
        id: 'lovable-q3',
        type: 'short-answer',
        question: 'Describe the process of creating a todo application using Lovable\'s chat interface.',
        correctAnswer: 'Start a new project, use chat to describe todo app requirements, specify features like add/edit/delete tasks, customize UI design, test functionality, and deploy with one click.',
        explanation: 'The process involves conversational development where you describe your requirements in natural language.',
        points: 20,
        difficulty: 'intermediate',
        platform: 'Lovable 2.0'
      }
    ]
  },
  {
    id: 'cursor-advanced-exam',
    title: 'Cursor IDE Advanced Developer Certification',
    description: 'Advanced assessment of AI-assisted development skills with Cursor',
    platform: 'Cursor',
    timeLimit: 90,
    passingScore: 75,
    certification: 'Cursor Advanced Developer',
    questions: [
      {
        id: 'cursor-q1',
        type: 'multiple-choice',
        question: 'What makes Cursor\'s AI assistance different from generic coding assistants?',
        options: [
          'It only works with JavaScript',
          'It\'s codebase-aware and understands project context',
          'It requires internet connection',
          'It only generates boilerplate code'
        ],
        correctAnswer: 'It\'s codebase-aware and understands project context',
        explanation: 'Cursor\'s AI has full awareness of your codebase, allowing for contextual assistance and suggestions.',
        points: 10,
        difficulty: 'intermediate',
        platform: 'Cursor'
      },
      {
        id: 'cursor-q2',
        type: 'coding',
        question: 'Write a function that uses Cursor\'s AI to refactor a given piece of code. Describe the process.',
        correctAnswer: 'Use Cmd/Ctrl+L to open AI chat, describe refactoring goals, apply suggested changes, test the refactored code.',
        explanation: 'Cursor\'s AI chat allows you to describe refactoring goals and get contextual suggestions.',
        points: 25,
        difficulty: 'advanced',
        platform: 'Cursor'
      }
    ]
  },
  {
    id: 'comprehensive-nocode-exam',
    title: 'Comprehensive NoCode Development Assessment',
    description: 'Final assessment covering all platforms and full-stack development concepts',
    platform: 'All Platforms',
    timeLimit: 120,
    passingScore: 85,
    certification: 'NoCode Full-Stack Developer',
    questions: [
      {
        id: 'comp-q1',
        type: 'multiple-choice',
        question: 'Which platform is best suited for mobile app development?',
        options: ['Lovable 2.0', 'V0', 'Rork', 'Base44'],
        correctAnswer: 'Rork',
        explanation: 'Rork specializes in generating native mobile applications using React Native.',
        points: 10,
        difficulty: 'beginner',
        platform: 'All Platforms'
      },
      {
        id: 'comp-q2',
        type: 'multiple-select',
        question: 'What features do all these NoCode platforms have in common? (Select all that apply)',
        options: [
          'Full-stack application development',
          'Deployment capabilities',
          'AI assistance',
          'Database integration',
          'User authentication'
        ],
        correctAnswer: ['Full-stack application development', 'Deployment capabilities', 'AI assistance'],
        explanation: 'All platforms enable full-stack development, have deployment features, and use AI assistance.',
        points: 20,
        difficulty: 'intermediate',
        platform: 'All Platforms'
      }
    ]
  }
];

export default function AssessmentSystem() {
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timeRemaining && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      submitAssessment();
    }
  }, [timeRemaining]);

  const startAssessment = (assessment: Assessment) => {
    setCurrentAssessment(assessment);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeRemaining(assessment.timeLimit * 60);
    setIsCompleted(false);
    setScore(null);
    setShowResults(false);
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentAssessment && currentQuestionIndex < currentAssessment.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAssessment();
    }
  };

  const submitAssessment = () => {
    if (!currentAssessment) return;

    let totalScore = 0;
    let earnedScore = 0;

    currentAssessment.questions.forEach(question => {
      totalScore += question.points;
      const userAnswer = answers[question.id];
      
      if (question.type === 'multiple-select') {
        const correctAnswers = question.correctAnswer as string[];
        const userAnswers = userAnswer as string[] || [];
        if (JSON.stringify(correctAnswers.sort()) === JSON.stringify(userAnswers.sort())) {
          earnedScore += question.points;
        }
      } else {
        if (userAnswer === question.correctAnswer) {
          earnedScore += question.points;
        }
      }
    });

    const finalScore = Math.round((earnedScore / totalScore) * 100);
    setScore(finalScore);
    setIsCompleted(true);
    setShowResults(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults && currentAssessment && score !== null) {
    const passed = score >= currentAssessment.passingScore;
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {passed ? <Trophy className="h-6 w-6 text-yellow-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
            Assessment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{score}%</div>
            <Badge variant={passed ? 'default' : 'destructive'} className="text-lg px-4 py-2">
              {passed ? 'PASSED' : 'FAILED'}
            </Badge>
            <p className="text-muted-foreground mt-2">
              Required: {currentAssessment.passingScore}% | Your Score: {score}%
            </p>
          </div>

          {passed && currentAssessment.certification && (
            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
              <p className="text-muted-foreground">
                You have earned the <strong>{currentAssessment.certification}</strong> certification!
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h4 className="font-semibold">Question Review:</h4>
            {currentAssessment.questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = question.type === 'multiple-select' 
                ? JSON.stringify((question.correctAnswer as string[]).sort()) === JSON.stringify((userAnswer as string[] || []).sort())
                : userAnswer === question.correctAnswer;

              return (
                <div key={question.id} className="p-4 border rounded">
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /> : <XCircle className="h-5 w-5 text-red-500 mt-0.5" />}
                    <div className="flex-1">
                      <p className="font-medium">Question {index + 1}: {question.question}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your answer: {Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer || 'No answer'}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Correct answer: {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2">
            <Button onClick={() => setCurrentAssessment(null)} className="flex-1">
              Back to Assessments
            </Button>
            {!passed && (
              <Button onClick={() => startAssessment(currentAssessment)} variant="outline">
                Retake Assessment
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (currentAssessment) {
    const currentQuestion = currentAssessment.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentAssessment.questions.length) * 100;

    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{currentAssessment.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {currentAssessment.questions.length}
              </p>
            </div>
            {timeRemaining && (
              <div className="flex items-center gap-2 text-lg font-mono">
                <Timer className="h-5 w-5" />
                {formatTime(timeRemaining)}
              </div>
            )}
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant={currentQuestion.difficulty === 'beginner' ? 'secondary' : 
                            currentQuestion.difficulty === 'intermediate' ? 'default' : 'destructive'}>
                {currentQuestion.difficulty}
              </Badge>
              <Badge variant="outline">{currentQuestion.points} points</Badge>
            </div>
            <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>

            {currentQuestion.type === 'multiple-choice' && (
              <RadioGroup 
                value={answers[currentQuestion.id] as string || ''} 
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
              >
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'multiple-select' && (
              <div className="space-y-2">
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`option-${index}`}
                      checked={((answers[currentQuestion.id] as string[]) || []).includes(option)}
                      onCheckedChange={(checked) => {
                        const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
                        if (checked) {
                          handleAnswer(currentQuestion.id, [...currentAnswers, option]);
                        } else {
                          handleAnswer(currentQuestion.id, currentAnswers.filter(a => a !== option));
                        }
                      }}
                    />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </div>
            )}

            {(currentQuestion.type === 'short-answer' || currentQuestion.type === 'coding') && (
              <Textarea
                placeholder="Enter your answer here..."
                value={answers[currentQuestion.id] as string || ''}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                className={currentQuestion.type === 'coding' ? 'font-mono' : ''}
                rows={currentQuestion.type === 'coding' ? 10 : 4}
              />
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => setCurrentAssessment(null)} 
              variant="outline"
            >
              Exit Assessment
            </Button>
            <Button 
              onClick={nextQuestion} 
              className="flex-1"
              disabled={!answers[currentQuestion.id]}
            >
              {currentQuestionIndex === currentAssessment.questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Certification Assessments</h2>
        <p className="text-muted-foreground">
          Take comprehensive exams to earn platform certifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{assessment.title}</span>
                <Badge variant="outline">{assessment.platform}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{assessment.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Time Limit
                  </span>
                  <span>{assessment.timeLimit} minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Questions</span>
                  <span>{assessment.questions.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Passing Score</span>
                  <span>{assessment.passingScore}%</span>
                </div>
                {assessment.certification && (
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Trophy className="h-4 w-4" />
                    <span>Earns Certification</span>
                  </div>
                )}
              </div>

              <Button 
                className="w-full" 
                onClick={() => startAssessment(assessment)}
              >
                Start Assessment
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
