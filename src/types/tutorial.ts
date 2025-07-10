
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'video' | 'interactive' | 'hands-on' | 'theory';
  completed: boolean;
  locked: boolean;
  topics: string[];
  objectives: string[];
  prerequisites?: string[];
}

export interface TutorialModule {
  id: string;
  title: string;
  description: string;
  platform: string;
  totalDuration: string;
  difficultyLevel: string;
  completionRate: number;
  rating: number;
  enrolledStudents: number;
  tutorials: Tutorial[];
  practicalProjects: string[];
  certificationAvailable: boolean;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  modules: string[];
  totalDuration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  certification: boolean;
}
