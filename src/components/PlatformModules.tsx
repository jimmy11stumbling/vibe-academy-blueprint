
import React from 'react';
import { TutorialModule } from '@/types/tutorial';

// Lovable 2.0 Comprehensive Modules
export const lovableModules: TutorialModule[] = [
  {
    id: 'lovable-fundamentals',
    title: 'Lovable 2.0 Fundamentals',
    description: 'Master the chat-driven development environment and full-stack generation capabilities',
    platform: 'Lovable 2.0',
    totalDuration: '8 hours',
    difficultyLevel: 'beginner',
    completionRate: 0,
    rating: 4.8,
    enrolledStudents: 12500,
    certificationAvailable: true,
    practicalProjects: [
      'Build a personal portfolio website using chat commands',
      'Create a task management app with Supabase integration',
      'Deploy a real-time chat application with authentication'
    ],
    tutorials: [
      {
        id: 'lovable-intro',
        title: 'Introduction to Lovable 2.0',
        description: 'Understanding the European startup revolutionizing full-stack development',
        duration: '20 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['Platform Overview', 'Chat Interface', 'Project Creation'],
        objectives: ['Understand Lovable\'s unique value proposition', 'Navigate the interface', 'Create your first project']
      },
      {
        id: 'chat-driven-dev',
        title: 'Chat-Driven Development Mastery',
        description: 'Learn to effectively communicate with AI for complex app generation',
        duration: '45 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Natural Language Programming', 'Prompt Engineering', 'Iterative Development'],
        objectives: ['Master effective prompting techniques', 'Build apps through conversation', 'Debug using chat commands']
      },
      {
        id: 'supabase-integration',
        title: 'Native Supabase Integration',
        description: 'Leverage the deep Supabase integration for backend functionality',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Database Management', 'Authentication', 'Real-time Features'],
        objectives: ['Set up PostgreSQL databases via chat', 'Implement user authentication', 'Create real-time features']
      },
      {
        id: 'visual-edits',
        title: 'Visual Editing and UI Refinement',
        description: 'Use click-to-edit functionality for precise visual adjustments',
        duration: '35 min',
        difficulty: 'beginner',
        type: 'interactive',
        completed: false,
        locked: false,
        topics: ['Visual Editor', 'UI Components', 'Design Systems'],
        objectives: ['Master visual editing tools', 'Refine UI elements', 'Maintain design consistency']
      },
      {
        id: 'multiplayer-workspaces',
        title: 'Collaborative Development',
        description: 'Work with teams using multiplayer workspaces and shared resources',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Team Collaboration', 'Shared Credits', 'Project Management'],
        objectives: ['Set up team workspaces', 'Manage collaborative development', 'Share resources effectively']
      },
      {
        id: 'deployment-domains',
        title: 'Deployment and Custom Domains',
        description: 'Deploy applications and connect custom domains seamlessly',
        duration: '30 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['One-click Deployment', 'Custom Domains', 'Production Optimization'],
        objectives: ['Deploy applications instantly', 'Connect custom domains', 'Optimize for production']
      },
      {
        id: 'security-scanning',
        title: 'Security Best Practices',
        description: 'Implement security scanning and vulnerability management',
        duration: '25 min',
        difficulty: 'intermediate',
        type: 'theory',
        completed: false,
        locked: false,
        topics: ['Security Scanning', 'Vulnerability Assessment', 'Best Practices'],
        objectives: ['Understand security features', 'Implement secure practices', 'Monitor vulnerabilities']
      },
      {
        id: 'figma-integration',
        title: 'Design to Code with Figma',
        description: 'Convert Figma designs to functional applications using Builder.io integration',
        duration: '50 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Figma Integration', 'Design Systems', 'Auto Layout'],
        objectives: ['Import Figma designs', 'Convert designs to code', 'Maintain design fidelity']
      }
    ]
  },
  {
    id: 'lovable-advanced',
    title: 'Advanced Lovable Development',
    description: 'Advanced techniques for building production-ready applications at scale',
    platform: 'Lovable 2.0',
    totalDuration: '12 hours',
    difficultyLevel: 'advanced',
    completionRate: 0,
    rating: 4.9,
    enrolledStudents: 3200,
    certificationAvailable: true,
    practicalProjects: [
      'Build a complete SaaS application with payment integration',
      'Create a multi-tenant application with advanced security',
      'Develop a real-time collaborative platform'
    ],
    tutorials: [
      {
        id: 'scaling-lovable',
        title: 'Scaling Applications in Lovable',
        description: 'Techniques for building enterprise-grade applications',
        duration: '90 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Performance Optimization', 'Scalability', 'Enterprise Features'],
        objectives: ['Optimize application performance', 'Handle high-traffic scenarios', 'Implement enterprise features']
      },
      {
        id: 'advanced-integrations',
        title: 'Advanced Third-Party Integrations',
        description: 'Integrate complex services like Stripe, Replicate, and Resend',
        duration: '75 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Payment Processing', 'AI/ML Integration', 'Email Services'],
        objectives: ['Implement payment systems', 'Integrate AI services', 'Set up email automation']
      },
      {
        id: 'github-workflows',
        title: 'GitHub Integration and CI/CD',
        description: 'Manage code with GitHub integration and automated workflows',
        duration: '60 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Version Control', 'CI/CD', 'Code Management'],
        objectives: ['Set up GitHub integration', 'Implement CI/CD pipelines', 'Manage code effectively']
      }
    ]
  }
];

// Cursor IDE Comprehensive Modules
export const cursorModules: TutorialModule[] = [
  {
    id: 'cursor-fundamentals',
    title: 'Cursor IDE Mastery',
    description: 'Master the AI-first IDE that\'s revolutionizing professional development',
    platform: 'Cursor',
    totalDuration: '10 hours',
    difficultyLevel: 'intermediate',
    completionRate: 0,
    rating: 4.9,
    enrolledStudents: 25000,
    certificationAvailable: true,
    practicalProjects: [
      'Migrate a VS Code project to Cursor with full AI integration',
      'Build a complex React application using AI-assisted development',
      'Implement advanced refactoring across large codebases'
    ],
    tutorials: [
      {
        id: 'cursor-setup',
        title: 'Setting Up Cursor for Maximum Productivity',
        description: 'Install, configure, and optimize Cursor for professional development',
        duration: '45 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Installation', 'VS Code Migration', 'Extension Setup'],
        objectives: ['Install and configure Cursor', 'Migrate from VS Code', 'Set up essential extensions']
      },
      {
        id: 'codebase-chat',
        title: 'Codebase-Aware AI Conversations',
        description: 'Leverage AI that understands your entire project context',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['AI Chat', 'Context Understanding', 'Code Analysis'],
        objectives: ['Master codebase-aware queries', 'Understand context management', 'Analyze large codebases']
      },
      {
        id: 'predictive-editing',
        title: 'Predictive Edits and Tab-to-Accept',
        description: 'Accelerate coding with AI-powered predictive editing',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Predictive Editing', 'Code Completion', 'Workflow Optimization'],
        objectives: ['Master predictive editing', 'Optimize coding workflow', 'Reduce development time']
      },
      {
        id: 'agent-mode',
        title: 'Autonomous AI Agent Development',
        description: 'Use agent mode for complex, multi-file development tasks',
        duration: '75 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Agent Mode', 'Autonomous Development', 'Complex Refactoring'],
        objectives: ['Use agent mode effectively', 'Handle complex tasks', 'Maintain code quality']
      },
      {
        id: 'enterprise-security',
        title: 'Enterprise Security and Privacy',
        description: 'Implement security best practices and privacy controls',
        duration: '50 min',
        difficulty: 'advanced',
        type: 'theory',
        completed: false,
        locked: false,
        topics: ['Privacy Mode', 'SOC 2 Compliance', 'Enterprise Security'],
        objectives: ['Implement privacy controls', 'Understand compliance', 'Secure development practices']
      }
    ]
  }
];

// Replit Comprehensive Modules
export const replitModules: TutorialModule[] = [
  {
    id: 'replit-fundamentals',
    title: 'Replit Collaborative Development',
    description: 'Master the world\'s most popular collaborative coding platform',
    platform: 'Replit',
    totalDuration: '9 hours',
    difficultyLevel: 'beginner',
    completionRate: 0,
    rating: 4.7,
    enrolledStudents: 42000,
    certificationAvailable: true,
    practicalProjects: [
      'Create a collaborative web application with real-time editing',
      'Build and deploy a full-stack application with ReplDB',
      'Develop a mobile-responsive app using Replit\'s infrastructure'
    ],
    tutorials: [
      {
        id: 'replit-basics',
        title: 'Replit Platform Fundamentals',
        description: 'Navigate the zero-setup development environment',
        duration: '35 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Platform Navigation', 'Project Creation', 'Language Support'],
        objectives: ['Master the Replit interface', 'Create projects', 'Understand language support']
      },
      {
        id: 'real-time-collaboration',
        title: 'Real-Time Collaborative Coding',
        description: 'Code together in real-time with team members',
        duration: '50 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Live Collaboration', 'Team Management', 'Shared Workspaces'],
        objectives: ['Set up collaborative projects', 'Manage team access', 'Code simultaneously']
      },
      {
        id: 'replit-agent',
        title: 'AI-Powered Development with Replit Agent',
        description: 'Leverage Claude Sonnet and GPT-4o for intelligent coding assistance',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['AI Agent', 'Code Generation', 'Debugging'],
        objectives: ['Use Replit Agent effectively', 'Generate code with AI', 'Debug with AI assistance']
      },
      {
        id: 'repldb-auth',
        title: 'Built-in Database and Authentication',
        description: 'Use ReplDB and Replit Auth for full-stack development',
        duration: '70 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['ReplDB', 'Authentication', 'Data Persistence'],
        objectives: ['Implement database functionality', 'Add user authentication', 'Manage data persistence']
      },
      {
        id: 'deployment-scaling',
        title: 'Deployment and Scaling',
        description: 'Deploy applications with autoscaling and reserved VMs',
        duration: '45 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Deployment Options', 'Autoscaling', 'Performance'],
        objectives: ['Deploy applications', 'Configure scaling', 'Optimize performance']
      }
    ]
  }
];

// Continue with other platform modules...
export const windSurfModules: TutorialModule[] = [
  {
    id: 'windsurf-fundamentals',
    title: 'Windsurf Agentic Development',
    description: 'Master the enterprise-grade agentic code editor with Cascade AI',
    platform: 'Windsurf',
    totalDuration: '11 hours',
    difficultyLevel: 'advanced',
    completionRate: 0,
    rating: 4.8,
    enrolledStudents: 8500,
    certificationAvailable: true,
    practicalProjects: [
      'Build an enterprise application with FedRAMP compliance',
      'Implement complex multi-file refactoring with Cascade',
      'Deploy a secure on-premise solution'
    ],
    tutorials: [
      {
        id: 'cascade-agent',
        title: 'Mastering the Cascade Agent',
        description: 'Leverage the powerful AI agent for complex development tasks',
        duration: '80 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Cascade Agent', 'Multi-file Tasks', 'Context Understanding'],
        objectives: ['Master Cascade capabilities', 'Handle complex tasks', 'Optimize agent interactions']
      },
      {
        id: 'enterprise-security',
        title: 'FedRAMP and SOC 2 Compliance',
        description: 'Implement enterprise-grade security and compliance',
        duration: '65 min',
        difficulty: 'advanced',
        type: 'theory',
        completed: false,
        locked: false,
        topics: ['FedRAMP', 'SOC 2', 'Compliance', 'Security'],
        objectives: ['Understand compliance requirements', 'Implement security measures', 'Audit and monitor']
      }
    ]
  }
];

export const boltModules: TutorialModule[] = [
  {
    id: 'bolt-fundamentals',
    title: 'Bolt WebContainer Mastery',
    description: 'Master full-stack development in the browser with WebContainer technology',
    platform: 'Bolt',
    totalDuration: '8 hours',
    difficultyLevel: 'intermediate',
    completionRate: 0,
    rating: 4.6,
    enrolledStudents: 15000,
    certificationAvailable: true,
    practicalProjects: [
      'Build a full-stack application entirely in the browser',
      'Create a real-time collaborative editor',
      'Deploy a complex JavaScript application with backend'
    ],
    tutorials: [
      {
        id: 'webcontainer-basics',
        title: 'WebContainer Technology Deep Dive',
        description: 'Understand the revolutionary browser-based Node.js environment',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'theory',
        completed: false,
        locked: false,
        topics: ['WebContainers', 'Browser Runtime', 'Node.js in Browser'],
        objectives: ['Understand WebContainer architecture', 'Leverage browser capabilities', 'Optimize performance']
      }
    ]
  }
];

export const getAllPlatformModules = () => ({
  'Lovable 2.0': lovableModules,
  'Cursor': cursorModules,
  'Replit': replitModules,
  'Windsurf': windSurfModules,
  'Bolt': boltModules
});
