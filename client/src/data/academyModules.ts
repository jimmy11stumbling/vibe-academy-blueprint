import { platforms } from './platformsData';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'interactive' | 'hands-on' | 'reading';
  content: string;
  objectives: string[];
  prerequisites?: string[];
  completed: boolean;
  locked: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  skills: string[];
  deliverables: string[];
  resources: string[];
}

export interface AcademyModule {
  id: string;
  title: string;
  description: string;
  platform: string;
  category: 'foundation' | 'platform-specific' | 'advanced' | 'specialization';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  price: 'free' | 'premium';
  rating: number;
  students: number;
  instructor: string;
  overview: string;
  learningObjectives: string[];
  prerequisites: string[];
  lessons: Lesson[];
  projects: Project[];
  certification: boolean;
  tags: string[];
}

// Foundation Courses (FREE)
export const foundationModules: AcademyModule[] = [
  {
    id: 'project-planning-fundamentals',
    title: 'Project Planning Fundamentals',
    description: 'Master the essential skills of project planning and requirement gathering for successful no-code development projects.',
    platform: 'foundation',
    category: 'foundation',
    difficulty: 'beginner',
    duration: '3-4 hours',
    price: 'free',
    rating: 4.8,
    students: 15420,
    instructor: 'Sarah Chen, Product Manager',
    overview: 'Learn systematic approaches to project planning, from initial concept to detailed requirements. This comprehensive course covers industry best practices for defining scope, identifying stakeholders, and creating actionable project roadmaps.',
    learningObjectives: [
      'Define clear project scope and objectives',
      'Identify and analyze key stakeholders',
      'Create detailed project timelines and milestones',
      'Develop risk mitigation strategies',
      'Master agile project management principles'
    ],
    prerequisites: ['Basic understanding of software development concepts'],
    lessons: [
      {
        id: 'lesson-1',
        title: 'Project Scope and Objectives',
        description: 'Learn how to define clear, measurable project goals and scope boundaries.',
        duration: '45 minutes',
        type: 'interactive',
        content: 'Interactive workshop on scope definition with real-world examples and exercises.',
        objectives: ['Define SMART project objectives', 'Create scope statements', 'Identify scope boundaries'],
        completed: false,
        locked: false
      },
      {
        id: 'lesson-2',
        title: 'Stakeholder Analysis',
        description: 'Identify key stakeholders and understand their needs and expectations.',
        duration: '30 minutes',
        type: 'video',
        content: 'Video tutorial with stakeholder mapping exercises and communication strategies.',
        objectives: ['Create stakeholder maps', 'Analyze stakeholder influence', 'Develop communication plans'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-3',
        title: 'Timeline and Milestone Planning',
        description: 'Create realistic project timelines with achievable milestones.',
        duration: '50 minutes',
        type: 'hands-on',
        content: 'Hands-on project using Gantt charts and milestone planning tools.',
        objectives: ['Create project timelines', 'Set realistic milestones', 'Identify critical paths'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-4',
        title: 'Risk Assessment and Mitigation',
        description: 'Identify potential project risks and develop mitigation strategies.',
        duration: '40 minutes',
        type: 'interactive',
        content: 'Risk assessment workshop with scenario-based exercises.',
        objectives: ['Identify project risks', 'Assess risk probability and impact', 'Create mitigation plans'],
        completed: false,
        locked: true
      }
    ],
    projects: [
      {
        id: 'project-1',
        title: 'Complete Project Plan',
        description: 'Create a comprehensive project plan for a hypothetical e-commerce platform.',
        difficulty: 'beginner',
        estimatedTime: '2-3 hours',
        skills: ['Project planning', 'Stakeholder analysis', 'Risk assessment'],
        deliverables: ['Project charter', 'Stakeholder map', 'Timeline with milestones', 'Risk register'],
        resources: ['Project templates', 'Planning tools', 'Example case studies']
      }
    ],
    certification: true,
    tags: ['project-management', 'planning', 'requirements', 'agile', 'stakeholders']
  },
  {
    id: 'prd-creation-mastery',
    title: 'PRD Creation Mastery',
    description: 'Learn to write comprehensive Product Requirements Documents (PRDs) that drive successful no-code development projects.',
    platform: 'foundation',
    category: 'foundation',
    difficulty: 'beginner',
    duration: '4-5 hours',
    price: 'free',
    rating: 4.9,
    students: 12850,
    instructor: 'Mike Rodriguez, Senior Product Manager',
    overview: 'Master the art of writing clear, actionable PRDs that translate business requirements into technical specifications. Learn industry-standard frameworks and best practices used by top tech companies.',
    learningObjectives: [
      'Write clear and comprehensive PRDs',
      'Define user stories and acceptance criteria',
      'Create detailed feature specifications',
      'Develop wireframes and mockups',
      'Establish success metrics and KPIs'
    ],
    prerequisites: ['Project Planning Fundamentals (recommended)'],
    lessons: [
      {
        id: 'lesson-1',
        title: 'PRD Structure and Components',
        description: 'Understand the essential components of a well-structured PRD.',
        duration: '40 minutes',
        type: 'video',
        content: 'Comprehensive video walkthrough of PRD structure with real examples from successful products.',
        objectives: ['Understand PRD components', 'Learn industry standards', 'Analyze example PRDs'],
        completed: false,
        locked: false
      },
      {
        id: 'lesson-2',
        title: 'User Stories and Acceptance Criteria',
        description: 'Write effective user stories with clear acceptance criteria.',
        duration: '55 minutes',
        type: 'hands-on',
        content: 'Interactive workshop with user story writing exercises and peer reviews.',
        objectives: ['Write user stories', 'Define acceptance criteria', 'Prioritize features'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-3',
        title: 'Technical Specifications',
        description: 'Translate business requirements into technical specifications.',
        duration: '45 minutes',
        type: 'interactive',
        content: 'Interactive session on technical specification writing with examples.',
        objectives: ['Write technical specs', 'Define data models', 'Specify integrations'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-4',
        title: 'Wireframes and Mockups',
        description: 'Create visual representations of your product requirements.',
        duration: '60 minutes',
        type: 'hands-on',
        content: 'Hands-on wireframing session using Figma and other design tools.',
        objectives: ['Create wireframes', 'Design user flows', 'Prototype interactions'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-5',
        title: 'Success Metrics and KPIs',
        description: 'Define measurable success criteria for your product.',
        duration: '35 minutes',
        type: 'video',
        content: 'Video tutorial on defining and tracking product success metrics.',
        objectives: ['Define KPIs', 'Set success metrics', 'Create measurement plans'],
        completed: false,
        locked: true
      }
    ],
    projects: [
      {
        id: 'project-1',
        title: 'Complete PRD for Social Media App',
        description: 'Write a comprehensive PRD for a new social media application targeting young professionals.',
        difficulty: 'intermediate',
        estimatedTime: '4-6 hours',
        skills: ['PRD writing', 'User story creation', 'Technical specification', 'Wireframing'],
        deliverables: ['Complete PRD document', 'User stories with acceptance criteria', 'Wireframes', 'Success metrics dashboard'],
        resources: ['PRD templates', 'Figma wireframe kit', 'Example PRDs', 'Metrics framework']
      }
    ],
    certification: true,
    tags: ['prd', 'product-management', 'requirements', 'user-stories', 'documentation']
  },
  {
    id: 'no-code-platform-mastery',
    title: 'No-Code Platform Mastery',
    description: 'Comprehensive guide to selecting and mastering no-code platforms for different project types and business needs.',
    platform: 'foundation',
    category: 'foundation',
    difficulty: 'intermediate',
    duration: '5-6 hours',
    price: 'free',
    rating: 4.7,
    students: 18690,
    instructor: 'Lisa Thompson, No-Code Consultant',
    overview: 'Navigate the no-code landscape with confidence. Learn how to evaluate, select, and master the right platforms for your specific needs. This course covers all major no-code categories and provides practical guidance for platform selection.',
    learningObjectives: [
      'Understand the no-code ecosystem landscape',
      'Evaluate platforms based on project requirements',
      'Master platform selection criteria',
      'Learn integration strategies across platforms',
      'Develop platform-agnostic skills'
    ],
    prerequisites: ['Basic understanding of web applications'],
    lessons: [
      {
        id: 'lesson-1',
        title: 'No-Code Ecosystem Overview',
        description: 'Comprehensive overview of the no-code platform landscape.',
        duration: '50 minutes',
        type: 'video',
        content: 'Video presentation covering all major no-code categories and their use cases.',
        objectives: ['Understand no-code categories', 'Learn platform types', 'Identify use cases'],
        completed: false,
        locked: false
      },
      {
        id: 'lesson-2',
        title: 'Platform Evaluation Framework',
        description: 'Learn systematic approaches to evaluating no-code platforms.',
        duration: '45 minutes',
        type: 'interactive',
        content: 'Interactive workshop with evaluation matrices and scoring frameworks.',
        objectives: ['Create evaluation criteria', 'Score platforms objectively', 'Make informed decisions'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-3',
        title: 'AI-Powered Development Platforms',
        description: 'Deep dive into AI-powered development platforms like Lovable, Cursor, and Claude.',
        duration: '60 minutes',
        type: 'hands-on',
        content: 'Hands-on exploration of AI platforms with practical exercises.',
        objectives: ['Use AI for code generation', 'Understand AI limitations', 'Optimize AI workflows'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-4',
        title: 'Integration Strategies',
        description: 'Learn how to integrate multiple no-code platforms effectively.',
        duration: '55 minutes',
        type: 'hands-on',
        content: 'Practical integration workshop using APIs, webhooks, and automation tools.',
        objectives: ['Connect platforms via APIs', 'Use automation tools', 'Handle data flow'],
        completed: false,
        locked: true
      },
      {
        id: 'lesson-5',
        title: 'Platform Migration and Scaling',
        description: 'Strategies for migrating between platforms and scaling applications.',
        duration: '40 minutes',
        type: 'video',
        content: 'Case study analysis of successful platform migrations and scaling strategies.',
        objectives: ['Plan migrations', 'Scale applications', 'Avoid vendor lock-in'],
        completed: false,
        locked: true
      }
    ],
    projects: [
      {
        id: 'project-1',
        title: 'Platform Selection Matrix',
        description: 'Create a comprehensive platform selection matrix for different project scenarios.',
        difficulty: 'intermediate',
        estimatedTime: '3-4 hours',
        skills: ['Platform evaluation', 'Requirements analysis', 'Decision making'],
        deliverables: ['Platform comparison matrix', 'Selection criteria framework', 'Recommendation report'],
        resources: ['Evaluation templates', 'Platform documentation', 'Comparison tools']
      }
    ],
    certification: true,
    tags: ['no-code', 'platform-selection', 'evaluation', 'integration', 'strategy']
  }
];

// Platform-specific modules
export const platformModules: Record<string, AcademyModule[]> = {
  lovable: [
    {
      id: 'lovable-fundamentals',
      title: 'Lovable 2.0 Fundamentals',
      description: 'Master the basics of Lovable 2.0 for rapid full-stack application development through natural language conversations.',
      platform: 'lovable',
      category: 'platform-specific',
      difficulty: 'beginner',
      duration: '4-5 hours',
      price: 'premium',
      rating: 4.9,
      students: 8420,
      instructor: 'David Park, Lovable Expert',
      overview: 'Learn to harness the power of Lovable 2.0 for building complete full-stack applications through conversational AI. This course covers everything from basic concepts to advanced features.',
      learningObjectives: [
        'Understand Lovable 2.0 architecture and capabilities',
        'Write effective prompts for application generation',
        'Manage project structure and organization',
        'Deploy applications using Lovable hosting',
        'Integrate with external services and APIs'
      ],
      prerequisites: ['No-Code Platform Mastery (recommended)'],
      lessons: [
        {
          id: 'lesson-1',
          title: 'Getting Started with Lovable',
          description: 'Introduction to Lovable interface and basic concepts.',
          duration: '35 minutes',
          type: 'video',
          content: 'Video walkthrough of Lovable interface and first application creation.',
          objectives: ['Navigate Lovable interface', 'Create first application', 'Understand project structure'],
          completed: false,
          locked: false
        },
        {
          id: 'lesson-2',
          title: 'Effective Prompt Engineering',
          description: 'Learn to write clear, specific prompts for better application generation.',
          duration: '50 minutes',
          type: 'hands-on',
          content: 'Interactive workshop on prompt writing with real-time feedback.',
          objectives: ['Write effective prompts', 'Understand AI limitations', 'Iterate on requirements'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-3',
          title: 'Database Design and Integration',
          description: 'Design databases and integrate with external data sources.',
          duration: '45 minutes',
          type: 'hands-on',
          content: 'Hands-on database design with Supabase integration examples.',
          objectives: ['Design database schemas', 'Integrate with Supabase', 'Handle data relationships'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-4',
          title: 'UI/UX Customization',
          description: 'Customize the look and feel of your Lovable applications.',
          duration: '40 minutes',
          type: 'interactive',
          content: 'Interactive design session with custom styling and components.',
          objectives: ['Customize UI components', 'Apply consistent styling', 'Create responsive designs'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-5',
          title: 'Deployment and Production',
          description: 'Deploy your applications and manage production environments.',
          duration: '30 minutes',
          type: 'video',
          content: 'Step-by-step deployment guide with production best practices.',
          objectives: ['Deploy applications', 'Manage environments', 'Monitor performance'],
          completed: false,
          locked: true
        }
      ],
      projects: [
        {
          id: 'project-1',
          title: 'Task Management Application',
          description: 'Build a complete task management application with user authentication and real-time updates.',
          difficulty: 'intermediate',
          estimatedTime: '6-8 hours',
          skills: ['Lovable development', 'Database design', 'Authentication', 'Real-time features'],
          deliverables: ['Functional task management app', 'User authentication system', 'Real-time notifications', 'Responsive design'],
          resources: ['Lovable templates', 'Supabase documentation', 'Design assets', 'Testing guidelines']
        }
      ],
      certification: true,
      tags: ['lovable', 'full-stack', 'ai-development', 'rapid-prototyping', 'supabase']
    }
  ],
  cursor: [
    {
      id: 'cursor-ide-mastery',
      title: 'Cursor IDE Mastery',
      description: 'Master AI-powered development with Cursor IDE for professional software development workflows.',
      platform: 'cursor',
      category: 'platform-specific',
      difficulty: 'intermediate',
      duration: '5-6 hours',
      price: 'premium',
      rating: 4.8,
      students: 12350,
      instructor: 'Alex Chen, Senior Software Engineer',
      overview: 'Transform your development workflow with Cursor IDE. Learn to leverage AI assistance for faster, more efficient coding across multiple programming languages and frameworks.',
      learningObjectives: [
        'Master Cursor IDE interface and features',
        'Leverage AI for code generation and completion',
        'Implement advanced debugging techniques',
        'Optimize development workflows',
        'Integrate with version control and CI/CD'
      ],
      prerequisites: ['Programming experience in any language'],
      lessons: [
        {
          id: 'lesson-1',
          title: 'Cursor IDE Setup and Configuration',
          description: 'Set up Cursor IDE and configure it for optimal development experience.',
          duration: '30 minutes',
          type: 'hands-on',
          content: 'Hands-on setup guide with configuration best practices.',
          objectives: ['Install and configure Cursor', 'Set up development environment', 'Configure AI models'],
          completed: false,
          locked: false
        },
        {
          id: 'lesson-2',
          title: 'AI-Powered Code Generation',
          description: 'Learn to use AI for intelligent code generation and completion.',
          duration: '60 minutes',
          type: 'hands-on',
          content: 'Interactive coding session with AI assistance examples.',
          objectives: ['Generate code with AI', 'Use intelligent completion', 'Understand AI suggestions'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-3',
          title: 'Advanced Debugging with AI',
          description: 'Leverage AI for faster debugging and error resolution.',
          duration: '45 minutes',
          type: 'hands-on',
          content: 'Debugging workshop with AI-assisted error detection and resolution.',
          objectives: ['Debug with AI assistance', 'Analyze error patterns', 'Optimize debugging workflow'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-4',
          title: 'Codebase Navigation and Refactoring',
          description: 'Navigate large codebases and perform AI-assisted refactoring.',
          duration: '50 minutes',
          type: 'hands-on',
          content: 'Practical session on codebase exploration and refactoring techniques.',
          objectives: ['Navigate large codebases', 'Perform safe refactoring', 'Understand code relationships'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-5',
          title: 'Team Collaboration and Best Practices',
          description: 'Collaborate effectively with teams using Cursor IDE.',
          duration: '35 minutes',
          type: 'video',
          content: 'Best practices for team collaboration and productivity optimization.',
          objectives: ['Collaborate with teams', 'Share configurations', 'Maintain code quality'],
          completed: false,
          locked: true
        }
      ],
      projects: [
        {
          id: 'project-1',
          title: 'Full-Stack Web Application',
          description: 'Build a complete web application using Cursor IDE with AI assistance.',
          difficulty: 'advanced',
          estimatedTime: '10-12 hours',
          skills: ['Cursor IDE', 'AI-assisted development', 'Full-stack development', 'Code optimization'],
          deliverables: ['Complete web application', 'Optimized codebase', 'Documentation', 'Test suite'],
          resources: ['Project templates', 'Code examples', 'Testing frameworks', 'Deployment guides']
        }
      ],
      certification: true,
      tags: ['cursor', 'ai-ide', 'development', 'debugging', 'productivity']
    }
  ],
  replit: [
    {
      id: 'replit-collaborative-development',
      title: 'Replit Collaborative Development',
      description: 'Master collaborative coding and deployment with Replit for team projects and educational environments.',
      platform: 'replit',
      category: 'platform-specific',
      difficulty: 'beginner',
      duration: '3-4 hours',
      price: 'premium',
      rating: 4.6,
      students: 15820,
      instructor: 'Maria Santos, Education Technology Specialist',
      overview: 'Learn to leverage Replit for collaborative development, instant deployment, and educational projects. Perfect for teams, students, and rapid prototyping.',
      learningObjectives: [
        'Master Replit workspace management',
        'Implement real-time collaboration features',
        'Deploy applications instantly',
        'Integrate with external services',
        'Manage databases and file storage'
      ],
      prerequisites: ['Basic programming knowledge'],
      lessons: [
        {
          id: 'lesson-1',
          title: 'Replit Workspace Fundamentals',
          description: 'Learn to navigate and manage Replit workspaces effectively.',
          duration: '25 minutes',
          type: 'hands-on',
          content: 'Interactive workspace setup and management tutorial.',
          objectives: ['Create workspaces', 'Manage files and folders', 'Configure environments'],
          completed: false,
          locked: false
        },
        {
          id: 'lesson-2',
          title: 'Real-Time Collaboration',
          description: 'Master collaborative coding features and team workflows.',
          duration: '40 minutes',
          type: 'hands-on',
          content: 'Live collaboration session with multiple developers.',
          objectives: ['Collaborate in real-time', 'Manage code conflicts', 'Use collaboration tools'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-3',
          title: 'Database Integration and Management',
          description: 'Work with databases and external data sources in Replit.',
          duration: '45 minutes',
          type: 'hands-on',
          content: 'Database integration workshop with practical examples.',
          objectives: ['Integrate databases', 'Manage data', 'Handle connections'],
          completed: false,
          locked: true
        },
        {
          id: 'lesson-4',
          title: 'Instant Deployment and Hosting',
          description: 'Deploy applications instantly and manage hosting configurations.',
          duration: '30 minutes',
          type: 'video',
          content: 'Deployment tutorial with hosting best practices.',
          objectives: ['Deploy applications', 'Configure hosting', 'Manage domains'],
          completed: false,
          locked: true
        }
      ],
      projects: [
        {
          id: 'project-1',
          title: 'Collaborative Chat Application',
          description: 'Build a real-time chat application with multiple team members.',
          difficulty: 'intermediate',
          estimatedTime: '5-7 hours',
          skills: ['Replit development', 'Real-time features', 'Team collaboration', 'Database integration'],
          deliverables: ['Real-time chat app', 'User authentication', 'Message persistence', 'Responsive design'],
          resources: ['Replit templates', 'WebSocket examples', 'Database schemas', 'Design guidelines']
        }
      ],
      certification: true,
      tags: ['replit', 'collaboration', 'deployment', 'education', 'rapid-development']
    }
  ]
};

// Combine all modules
export const allAcademyModules: AcademyModule[] = [
  ...foundationModules,
  ...Object.values(platformModules).flat()
];

// Helper functions
export const getModuleById = (id: string): AcademyModule | undefined => {
  return allAcademyModules.find(module => module.id === id);
};

export const getModulesByPlatform = (platform: string): AcademyModule[] => {
  if (platform === 'foundation') {
    return foundationModules;
  }
  return platformModules[platform] || [];
};

export const getModulesByCategory = (category: string): AcademyModule[] => {
  return allAcademyModules.filter(module => module.category === category);
};

export const getFreeModules = (): AcademyModule[] => {
  return allAcademyModules.filter(module => module.price === 'free');
};