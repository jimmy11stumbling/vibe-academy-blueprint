import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle, 
  Clock, 
  Award, 
  Target,
  TrendingUp,
  Brain,
  Star
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  passingScore: number;
  timeLimit: number; // in minutes
  attempts: number;
  maxAttempts: number;
}

const sampleAssessments: Assessment[] = [
  {
    id: 'fundamentals-quiz',
    title: 'No-Code Fundamentals Assessment',
    description: 'Test your understanding of basic no-code concepts and principles',
    passingScore: 80,
    timeLimit: 30,
    attempts: 0,
    maxAttempts: 3,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary advantage of no-code development?',
        options: [
          'It eliminates the need for any technical knowledge',
          'It allows faster development with visual interfaces',
          'It produces better code than traditional programming',
          'It only works for simple applications'
        ],
        correctAnswer: 1,
        explanation: 'No-code platforms primarily speed up development by providing visual interfaces that reduce the need for hand-coding.',
        difficulty: 'easy',
        topic: 'fundamentals'
      },
      {
        id: 'q2',
        question: 'Which factor is most important when choosing a no-code platform?',
        options: [
          'The number of templates available',
          'The platform\'s specific capabilities matching your project needs',
          'The price of the platform',
          'The popularity of the platform'
        ],
        correctAnswer: 1,
        explanation: 'The most important factor is ensuring the platform\'s capabilities align with your specific project requirements.',
        difficulty: 'medium',
        topic: 'platform-selection'
      }
    ]
  }
];

const AssessmentSystem: React.FC = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const startAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeRemaining(assessment.timeLimit * 60); // Convert to seconds
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitAssessment = () => {
    if (!selectedAssessment) return;

    const score = calculateScore();
    setShowResults(true);
  };

  const calculateScore = () => {
    if (!selectedAssessment) return 0;

    const correctAnswers = selectedAssessment.questions.filter(question => 
      selectedAnswers[question.id] === question.correctAnswer
    ).length;

    return Math.round((correctAnswers / selectedAssessment.questions.length) * 100);
  };

  const nextQuestion = () => {
    if (selectedAssessment && currentQuestionIndex < selectedAssessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (!selectedAssessment) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Assessment Center</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge and track your progress with our comprehensive assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleAssessments.map((assessment) => (
            <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  {assessment.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{assessment.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      Passing Score: {assessment.passingScore}%
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {assessment.timeLimit} minutes
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>{assessment.questions.length} questions</span>
                    <span>Attempts: {assessment.attempts}/{assessment.maxAttempts}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => startAssessment(assessment)}
                  disabled={assessment.attempts >= assessment.maxAttempts}
                >
                  {assessment.attempts >= assessment.maxAttempts ? 'Max Attempts Reached' : 'Start Assessment'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const passed = score >= selectedAssessment.passingScore;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {passed ? <Award className="h-8 w-8" /> : <Target className="h-8 w-8" />}
            </div>
            <CardTitle className="text-2xl">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <div className="text-4xl font-bold mb-2">{score}%</div>
              <p className="text-muted-foreground">
                {passed ? 'You passed the assessment!' : `You need ${selectedAssessment.passingScore}% to pass`}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {selectedAssessment.questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length}
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {selectedAssessment.questions.filter(q => selectedAnswers[q.id] !== q.correctAnswer).length}
                </div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {selectedAssessment.questions.length}
                </div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                className="w-full" 
                onClick={() => setSelectedAssessment(null)}
              >
                Back to Assessments
              </Button>
              {!passed && selectedAssessment.attempts < selectedAssessment.maxAttempts && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => startAssessment(selectedAssessment)}
                >
                  Try Again
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = selectedAssessment.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedAssessment.questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{selectedAssessment.title}</h2>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} of {selectedAssessment.questions.length}</span>
          {timeRemaining && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
            </span>
          )}
        </div>
        <Progress value={progress} className="mt-2" />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{currentQuestion.difficulty}</Badge>
            <Badge variant="secondary">{currentQuestion.topic}</Badge>
          </div>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswers[currentQuestion.id]?.toString()}
            onValueChange={(value) => handleAnswerSelect(currentQuestion.id, parseInt(value))}
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>

        {currentQuestionIndex === selectedAssessment.questions.length - 1 ? (
          <Button 
            onClick={submitAssessment}
            disabled={!selectedAnswers[currentQuestion.id]}
          >
            Submit Assessment
          </Button>
        ) : (
          <Button 
            onClick={nextQuestion}
            disabled={!selectedAnswers[currentQuestion.id]}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssessmentSystem;