
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  Clock, 
  Star, 
  Award,
  Brain,
  Target,
  Zap
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  passingScore: number;
  timeLimit: number; // in minutes
}

interface AssessmentSystemProps {
  moduleId: string;
  onComplete?: (score: number, passed: boolean) => void;
}

const AssessmentSystem: React.FC<AssessmentSystemProps> = ({ moduleId, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes default

  // Sample assessment data - in real app, fetch based on moduleId
  const assessment: Assessment = {
    id: moduleId,
    title: "Module Assessment",
    description: "Test your understanding of the concepts covered in this module",
    questions: [
      {
        id: "q1",
        question: "What is the primary advantage of no-code platforms?",
        options: [
          "They eliminate the need for any technical knowledge",
          "They accelerate development and reduce barriers to entry",
          "They are always free to use",
          "They can only build simple applications"
        ],
        correctAnswer: 1,
        explanation: "No-code platforms primarily accelerate development and reduce barriers to entry, making app development accessible to more people."
      },
      {
        id: "q2",
        question: "Which factor is most important when choosing a no-code platform?",
        options: [
          "The platform's color scheme",
          "Your specific project requirements and use case",
          "The number of templates available",
          "The platform's age"
        ],
        correctAnswer: 1,
        explanation: "Your specific project requirements and use case should be the primary factors in platform selection."
      }
    ],
    passingScore: 70,
    timeLimit: 30
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === assessment.questions[index].correctAnswer
    ).length;
    
    const score = Math.round((correctAnswers / assessment.questions.length) * 100);
    const passed = score >= assessment.passingScore;
    
    setShowResults(true);
    onComplete?.(score, passed);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === assessment.questions[index].correctAnswer
    ).length;
    const score = Math.round((correctAnswers / assessment.questions.length) * 100);
    const passed = score >= assessment.passingScore;

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
            passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {passed ? <CheckCircle className="h-8 w-8" /> : <Target className="h-8 w-8" />}
          </div>
          <CardTitle className={passed ? 'text-green-600' : 'text-red-600'}>
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </CardTitle>
          <p className="text-muted-foreground">
            You scored {score}% ({correctAnswers}/{assessment.questions.length} correct)
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={score} className="h-3" />
            
            {passed ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-600">Assessment Passed!</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  You've demonstrated strong understanding of the material. You can now proceed to the next module.
                </p>
              </div>
            ) : (
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-orange-600">Review Recommended</span>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Consider reviewing the material and retaking the assessment. Passing score: {assessment.passingScore}%
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={() => window.location.reload()} variant="outline" className="flex-1">
                Retake Assessment
              </Button>
              <Button className="flex-1">
                Continue Learning
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = assessment.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">
            Question {currentQuestion + 1} of {assessment.questions.length}
          </Badge>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
            
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary'
                        : 'border-border'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === assessment.questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentSystem;
