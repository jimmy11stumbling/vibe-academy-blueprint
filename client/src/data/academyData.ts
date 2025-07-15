import { TutorialModule } from '@/types/tutorial';

export interface AcademyModule {
  id: string;
  title: string;
  description: string;
  platform: string;
  icon: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  learningObjectives: string[];
  lessons: {
    id: string;
    title: string;
    description: string;
    duration: string;
    type: 'video' | 'interactive' | 'hands-on' | 'theory';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    content?: string;
  }[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  modules: string[];
  prerequisites: string[];
  outcomes: string[];
}

// Free Fundamental Modules (Available to all users)
export const fundamentalModules: AcademyModule[] = [
  {
    id: 'app-planning-fundamentals',
    title: 'App Planning & Strategy Fundamentals',
    description: 'Master the art of planning and strategizing your full-stack application before you build',
    platform: 'Universal',
    icon: '📋',
    estimatedTime: '2.5 hours',
    difficulty: 'beginner',
    prerequisites: ['Basic understanding of web applications'],
    learningObjectives: [
      'Define clear app vision and purpose',
      'Identify target users and use cases',
      'Create comprehensive feature roadmaps',
      'Develop technical requirements'
    ],
    lessons: [
      {
        id: 'app-vision',
        title: 'Defining Your App Vision',
        description: 'Learn to articulate your app\'s core purpose and value proposition',
        duration: '30 min',
        type: 'interactive',
        difficulty: 'beginner',
        content: `# Defining Your App Vision

## The Foundation of Success
Before writing a single line of code or creating any prompts, you need a crystal-clear vision of what you're building and why.

## Key Components:
- **Problem Statement**: What specific problem does your app solve?
- **Target Audience**: Who exactly will use your app?
- **Value Proposition**: Why would users choose your app over alternatives?
- **Success Metrics**: How will you measure if your app is successful?

## Vision Statement Template:
"For [target audience] who [problem/need], [app name] is a [category] that [key benefit]. Unlike [alternative], our app [unique differentiator]."

## Exercise:
Create your own vision statement using this template.`
      },
      {
        id: 'user-research',
        title: 'User Research & Validation',
        description: 'Conduct effective user research to validate your app concept',
        duration: '45 min',
        type: 'hands-on',
        difficulty: 'beginner'
      },
      {
        id: 'feature-planning',
        title: 'Feature Planning & MVP Definition',
        description: 'Learn to prioritize features and define your minimum viable product',
        duration: '40 min',
        type: 'interactive',
        difficulty: 'beginner'
      },
      {
        id: 'technical-requirements',
        title: 'Technical Requirements Planning',
        description: 'Define the technical aspects and constraints of your application',
        duration: '35 min',
        type: 'hands-on',
        difficulty: 'beginner'
      }
    ]
  },
  {
    id: 'master-blueprint-architecture',
    title: 'Master Blueprint Architecture',
    description: 'Learn to create detailed blueprints that serve as the foundation for any full-stack application',
    platform: 'Universal',
    icon: '🏗️',
    estimatedTime: '3 hours',
    difficulty: 'beginner',
    prerequisites: ['App Planning Fundamentals'],
    learningObjectives: [
      'Create comprehensive database schemas',
      'Design scalable application architecture',
      'Plan integration points and APIs',
      'Develop deployment strategies'
    ],
    lessons: [
      {
        id: 'blueprint-fundamentals',
        title: 'Blueprint Fundamentals',
        description: 'Understand what makes a great application blueprint',
        duration: '25 min',
        type: 'theory',
        difficulty: 'beginner'
      },
      {
        id: 'database-design',
        title: 'Database Design & Schema Planning',
        description: 'Learn to design efficient and scalable database structures',
        duration: '50 min',
        type: 'hands-on',
        difficulty: 'beginner'
      },
      {
        id: 'frontend-architecture',
        title: 'Frontend Architecture Planning',
        description: 'Plan your frontend components and user interface structure',
        duration: '45 min',
        type: 'interactive',
        difficulty: 'beginner'
      },
      {
        id: 'backend-architecture',
        title: 'Backend Architecture & API Design',
        description: 'Design your backend services and API endpoints',
        duration: '40 min',
        type: 'hands-on',
        difficulty: 'beginner'
      },
      {
        id: 'integration-planning',
        title: 'Integration & Third-Party Services',
        description: 'Plan how your app will integrate with external services',
        duration: '20 min',
        type: 'interactive',
        difficulty: 'beginner'
      }
    ]
  },
  {
    id: 'prompt-engineering-mastery',
    title: 'Prompt Engineering for No-Code Development',
    description: 'Master the art of communicating with AI-powered no-code platforms to build exactly what you envision',
    platform: 'Universal',
    icon: '🤖',
    estimatedTime: '2 hours',
    difficulty: 'beginner',
    prerequisites: ['Basic understanding of no-code platforms'],
    learningObjectives: [
      'Write effective prompts for any no-code platform',
      'Understand platform-specific prompt strategies',
      'Master iterative refinement techniques',
      'Build complete applications using prompts'
    ],
    lessons: [
      {
        id: 'prompt-fundamentals',
        title: 'Prompt Engineering Fundamentals',
        description: 'Learn the core principles of effective prompt writing',
        duration: '30 min',
        type: 'theory',
        difficulty: 'beginner'
      },
      {
        id: 'platform-specific-prompts',
        title: 'Platform-Specific Prompting Strategies',
        description: 'Master prompting for each no-code platform',
        duration: '45 min',
        type: 'hands-on',
        difficulty: 'beginner'
      },
      {
        id: 'advanced-prompting',
        title: 'Advanced Prompting Techniques',
        description: 'Learn sophisticated prompting strategies for complex applications',
        duration: '35 min',
        type: 'interactive',
        difficulty: 'beginner'
      },
      {
        id: 'prompt-optimization',
        title: 'Prompt Optimization & Debugging',
        description: 'Optimize your prompts for better results and troubleshoot issues',
        duration: '30 min',
        type: 'hands-on',
        difficulty: 'beginner'
      }
    ]
  }
];

// Platform-specific modules
export const platformModules: Record<string, AcademyModule[]> = {
  'Lovable 2.0': [
    {
      id: 'lovable-fundamentals',
      title: 'Lovable 2.0 Chat-Driven Development',
      description: 'Master conversational development with Lovable 2.0',
      platform: 'Lovable 2.0',
      icon: '💬',
      estimatedTime: '4 hours',
      difficulty: 'beginner',
      prerequisites: ['Prompt Engineering Fundamentals'],
      learningObjectives: [
        'Master chat-driven development',
        'Build full-stack apps through conversation',
        'Integrate with Supabase backend',
        'Deploy applications seamlessly'
      ],
      lessons: [
        {
          id: 'lovable-intro',
          title: 'Introduction to Lovable 2.0',
          description: 'Get started with the revolutionary chat-driven development platform',
          duration: '20 min',
          type: 'video',
          difficulty: 'beginner'
        },
        {
          id: 'chat-development',
          title: 'Chat-Driven Development Mastery',
          description: 'Learn to build applications through natural conversation',
          duration: '60 min',
          type: 'hands-on',
          difficulty: 'beginner'
        },
        {
          id: 'supabase-integration',
          title: 'Supabase Backend Integration',
          description: 'Master the native Supabase integration for backend functionality',
          duration: '45 min',
          type: 'hands-on',
          difficulty: 'intermediate'
        },
        {
          id: 'deployment',
          title: 'One-Click Deployment',
          description: 'Deploy your applications to production with a single click',
          duration: '25 min',
          type: 'hands-on',
          difficulty: 'beginner'
        }
      ]
    }
  ],
  'Cursor': [
    {
      id: 'cursor-fundamentals',
      title: 'Cursor AI-Assisted Development',
      description: 'Master the AI-first IDE for professional development',
      platform: 'Cursor',
      icon: '🎯',
      estimatedTime: '5 hours',
      difficulty: 'intermediate',
      prerequisites: ['Basic coding knowledge', 'Prompt Engineering Fundamentals'],
      learningObjectives: [
        'Master codebase-aware AI assistance',
        'Use predictive editing effectively',
        'Leverage agent mode for complex tasks',
        'Optimize development workflows'
      ],
      lessons: [
        {
          id: 'cursor-setup',
          title: 'Setting Up Cursor IDE',
          description: 'Install and configure Cursor for maximum productivity',
          duration: '30 min',
          type: 'hands-on',
          difficulty: 'beginner'
        },
        {
          id: 'ai-assistance',
          title: 'Codebase-Aware AI Assistance',
          description: 'Leverage AI that understands your entire project',
          duration: '75 min',
          type: 'hands-on',
          difficulty: 'intermediate'
        },
        {
          id: 'predictive-editing',
          title: 'Predictive Editing Mastery',
          description: 'Master Tab-to-Accept for lightning-fast development',
          duration: '45 min',
          type: 'hands-on',
          difficulty: 'intermediate'
        },
        {
          id: 'agent-mode',
          title: 'Agent Mode for Complex Tasks',
          description: 'Let AI handle multi-file development tasks',
          duration: '60 min',
          type: 'hands-on',
          difficulty: 'advanced'
        }
      ]
    }
  ]
  // Add other platforms here...
};

// Learning paths
export const learningPaths: LearningPath[] = [
  {
    id: 'complete-nocode-developer',
    title: 'Complete No-Code Developer',
    description: 'Become a full-stack no-code developer across all platforms',
    difficulty: 'beginner',
    estimatedTime: '50 hours',
    modules: [
      'app-planning-fundamentals',
      'master-blueprint-architecture',
      'prompt-engineering-mastery',
      'lovable-fundamentals',
      'cursor-fundamentals'
    ],
    prerequisites: ['Basic computer literacy'],
    outcomes: [
      'Build full-stack applications on any no-code platform',
      'Create comprehensive app plans and blueprints',
      'Master advanced prompting techniques',
      'Deploy production-ready applications'
    ]
  },
  {
    id: 'rapid-prototyper',
    title: 'Rapid Prototyper',
    description: 'Quickly validate ideas and build prototypes',
    difficulty: 'beginner',
    estimatedTime: '15 hours',
    modules: [
      'app-planning-fundamentals',
      'prompt-engineering-mastery',
      'lovable-fundamentals'
    ],
    prerequisites: ['Basic understanding of web applications'],
    outcomes: [
      'Rapidly prototype ideas',
      'Validate concepts quickly',
      'Create functional MVPs'
    ]
  }
];

// Combined academy modules
export const academyModules = {
  fundamentals: fundamentalModules,
  platforms: platformModules,
  paths: learningPaths
};

// Export everything for use in other files
export { fundamentalModules as completeAcademyModules };