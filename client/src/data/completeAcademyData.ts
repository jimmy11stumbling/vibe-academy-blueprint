
export interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'video' | 'hands-on' | 'quiz';
  completed: boolean;
  locked: boolean;
  topics: string[];
  objectives: string[];
}

export interface AcademyModule {
  id: string;
  title: string;
  description: string;
  platform: string;
  duration: string;
  difficulty: string;
  students: string;
  rating: number;
  modules: number;
  image: string;
  topics: string[];
  type: string;
  price: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  modules: string[];
  prerequisites: string[];
  outcomes: string[];
}

export const completeAcademyModules: AcademyModule[] = [
  {
    id: 'app-planning-fundamentals',
    title: 'App Planning & Strategy Fundamentals',
    description: 'Master the art of planning full-stack applications across any of the 10 no-code platforms. Learn to define requirements, user flows, and technical specifications.',
    platform: 'Universal',
    duration: '3 hours',
    difficulty: 'Beginner',
    students: '5.2K',
    rating: 4.9,
    modules: 6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    topics: ['App Requirements Analysis', 'User Story Mapping', 'Feature Prioritization', 'Technology Selection', 'Project Roadmapping'],
    type: 'FREE Fundamentals',
    price: 'FREE'
  },
  {
    id: 'master-blueprint-creation',
    title: 'Master Blueprint Creation',
    description: 'Create comprehensive blueprints for full-stack applications. Learn wireframing, database design, API planning, and system architecture for any platform.',
    platform: 'Universal',
    duration: '4 hours',
    difficulty: 'Beginner',
    students: '4.8K',
    rating: 4.8,
    modules: 8,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
    topics: ['Wireframe Design', 'Database Schema Planning', 'API Architecture', 'Component Mapping', 'Integration Planning'],
    type: 'FREE Fundamentals',
    price: 'FREE'
  },
  {
    id: 'prompt-engineering-fullstack',
    title: 'Prompt Engineering for Full-Stack Apps',
    description: 'Master the essential skill of prompt engineering to effectively communicate with AI platforms and achieve optimal results for complex full-stack development.',
    platform: 'Universal',
    duration: '2.5 hours',
    difficulty: 'Beginner',
    students: '6.1K',
    rating: 4.7,
    modules: 5,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=300&fit=crop',
    topics: ['Prompt Structure & Clarity', 'Context Setting', 'Iterative Refinement', 'Platform-Specific Prompts', 'Advanced Techniques'],
    type: 'FREE Fundamentals',
    price: 'FREE'
  }
];

export const learningPaths: LearningPath[] = [
  {
    id: 'fundamentals-path',
    title: 'No-Code Fundamentals Learning Path',
    description: 'Master the essential skills for full-stack no-code development',
    duration: '9.5 hours',
    difficulty: 'Beginner',
    modules: ['app-planning-fundamentals', 'master-blueprint-creation', 'prompt-engineering-fullstack'],
    prerequisites: ['Basic understanding of web applications'],
    outcomes: [
      'Plan and design full-stack applications',
      'Create comprehensive app blueprints',
      'Effectively prompt AI development platforms',
      'Choose the right no-code platform for your project'
    ]
  }
];
