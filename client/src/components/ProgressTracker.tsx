
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Trophy, Target } from 'lucide-react';

interface ProgressTrackerProps {
  moduleId: string;
  progress: {
    completedLessons: number;
    totalLessons: number;
    completedExercises: number;
    totalExercises: number;
    timeSpent: number;
    certificationsEarned: string[];
  };
}

export default function ProgressTracker({ moduleId, progress }: ProgressTrackerProps) {
  const lessonProgress = (progress.completedLessons / progress.totalLessons) * 100;
  const exerciseProgress = (progress.completedExercises / progress.totalExercises) * 100;
  const overallProgress = (lessonProgress + exerciseProgress) / 2;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>

        {/* Lessons Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Lessons Completed
            </span>
            <span className="text-sm text-muted-foreground">
              {progress.completedLessons}/{progress.totalLessons}
            </span>
          </div>
          <Progress value={lessonProgress} className="h-2" />
        </div>

        {/* Exercises Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Exercises Completed
            </span>
            <span className="text-sm text-muted-foreground">
              {progress.completedExercises}/{progress.totalExercises}
            </span>
          </div>
          <Progress value={exerciseProgress} className="h-2" />
        </div>

        {/* Time Spent */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Time Spent
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress.timeSpent / 60)} hours
          </span>
        </div>

        {/* Certifications */}
        {progress.certificationsEarned.length > 0 && (
          <div className="space-y-2">
            <span className="text-sm font-medium flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Certifications Earned
            </span>
            <div className="flex flex-wrap gap-2">
              {progress.certificationsEarned.map((cert, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium mb-2">Next Steps</h4>
          <div className="text-sm text-muted-foreground">
            {overallProgress < 100 ? (
              <p>Continue with your current module to unlock the next level!</p>
            ) : (
              <p>Congratulations! Ready for the final project.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
