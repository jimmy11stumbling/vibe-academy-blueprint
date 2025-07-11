
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
    completionRate: 15,
    rating: 4.8,
    enrolledStudents: 12500,
    certificationAvailable: true,
    practicalProjects: [
      'Build a personal portfolio website using chat commands',
      'Create a task management app with Supabase integration',
      'Deploy a real-time chat application with authentication',
      'Build a complete SaaS landing page with payment integration'
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
        id: 'figma-integration',
        title: 'Figma to Lovable Workflow',
        description: 'Import designs from Figma and convert them to functional applications',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Design Import', 'Auto Layout', 'Component Conversion'],
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
    completionRate: 8,
    rating: 4.9,
    enrolledStudents: 3200,
    certificationAvailable: true,
    practicalProjects: [
      'Build a complete SaaS application with payment integration',
      'Create a multi-tenant application with advanced security',
      'Develop a real-time collaborative platform',
      'Build an enterprise dashboard with complex data visualization'
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
        id: 'security-best-practices',
        title: 'Security and Compliance in Lovable',
        description: 'Implement security best practices and compliance requirements',
        duration: '75 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Security Scanning', 'Data Protection', 'Compliance'],
        objectives: ['Implement security measures', 'Handle sensitive data', 'Meet compliance requirements']
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
    completionRate: 22,
    rating: 4.9,
    enrolledStudents: 25000,
    certificationAvailable: true,
    practicalProjects: [
      'Migrate a VS Code project to Cursor with full AI integration',
      'Build a complex React application using AI-assisted development',
      'Implement advanced refactoring across large codebases',
      'Create a TypeScript library with AI-generated documentation'
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
        title: 'Mastering Predictive Edits',
        description: 'Use Tab-to-Accept for lightning-fast code generation',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Predictive Editing', 'Code Completion', 'Workflow Optimization'],
        objectives: ['Use predictive edits effectively', 'Optimize coding speed', 'Maintain code quality']
      },
      {
        id: 'agent-mode',
        title: 'Agent Mode for Complex Tasks',
        description: 'Let AI handle complex, multi-file development tasks',
        duration: '55 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Agent Mode', 'Multi-file Tasks', 'Code Refactoring'],
        objectives: ['Use agent mode effectively', 'Handle complex refactoring', 'Manage AI-driven development']
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
    completionRate: 35,
    rating: 4.7,
    enrolledStudents: 42000,
    certificationAvailable: true,
    practicalProjects: [
      'Create a collaborative web application with real-time editing',
      'Build and deploy a full-stack application with ReplDB',
      'Develop a mobile-responsive app using Replit\'s infrastructure',
      'Build a multiplayer game with real-time features'
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
        id: 'replit-agent',
        title: 'AI Agent Development',
        description: 'Use Replit Agent for rapid application development',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['AI Agent', 'Natural Language Coding', 'Code Generation'],
        objectives: ['Use Replit Agent effectively', 'Generate applications with AI', 'Debug AI-generated code']
      },
      {
        id: 'collaboration',
        title: 'Real-Time Collaboration',
        description: 'Master collaborative coding with teams',
        duration: '45 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Real-time Editing', 'Team Management', 'Version Control'],
        objectives: ['Collaborate in real-time', 'Manage team permissions', 'Handle merge conflicts']
      },
      {
        id: 'repldb-auth',
        title: 'ReplDB and Authentication',
        description: 'Use built-in database and authentication systems',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Database Management', 'User Authentication', 'Data Security'],
        objectives: ['Set up ReplDB', 'Implement authentication', 'Secure user data']
      }
    ]
  }
];

// Windsurf Comprehensive Modules
export const windSurfModules: TutorialModule[] = [
  {
    id: 'windsurf-fundamentals',
    title: 'Windsurf Agentic Development',
    description: 'Master the enterprise-grade agentic code editor with Cascade AI',
    platform: 'Windsurf',
    totalDuration: '11 hours',
    difficultyLevel: 'advanced',
    completionRate: 12,
    rating: 4.8,
    enrolledStudents: 8500,
    certificationAvailable: true,
    practicalProjects: [
      'Build an enterprise application with FedRAMP compliance',
      'Implement complex multi-file refactoring with Cascade',
      'Deploy a secure on-premise solution',
      'Create a government-compliant application'
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
        title: 'Enterprise Security and Compliance',
        description: 'Implement FedRAMP and SOC 2 compliance requirements',
        duration: '90 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['FedRAMP Compliance', 'SOC 2 Certification', 'Security Best Practices'],
        objectives: ['Meet compliance requirements', 'Implement security measures', 'Audit security practices']
      },
      {
        id: 'multi-model-support',
        title: 'Multi-Model AI Integration',
        description: 'Leverage multiple AI models for optimal development',
        duration: '55 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Model Selection', 'AI Optimization', 'Performance Tuning'],
        objectives: ['Choose optimal models', 'Optimize AI performance', 'Balance cost and quality']
      }
    ]
  }
];

// Bolt Comprehensive Modules
export const boltModules: TutorialModule[] = [
  {
    id: 'bolt-fundamentals',
    title: 'Bolt WebContainer Mastery',
    description: 'Master full-stack development in the browser with WebContainer technology',
    platform: 'Bolt',
    totalDuration: '8 hours',
    difficultyLevel: 'intermediate',
    completionRate: 28,
    rating: 4.6,
    enrolledStudents: 15000,
    certificationAvailable: true,
    practicalProjects: [
      'Build a full-stack application entirely in the browser',
      'Create a real-time collaborative editor',
      'Deploy a complex JavaScript application with backend',
      'Build a progressive web app with offline capabilities'
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
      },
      {
        id: 'fullstack-browser',
        title: 'Full-Stack Development in Browser',
        description: 'Build complete applications without local setup',
        duration: '75 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Frontend Development', 'Backend APIs', 'Database Integration'],
        objectives: ['Build full-stack apps', 'Handle data persistence', 'Deploy browser applications']
      },
      {
        id: 'bolt-integrations',
        title: 'Third-Party Integrations',
        description: 'Connect with external services and APIs',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['API Integration', 'External Services', 'Authentication'],
        objectives: ['Integrate external APIs', 'Handle authentication', 'Manage API keys securely']
      }
    ]
  }
];

// Claude Code CLI Modules
export const claudeCodeModules: TutorialModule[] = [
  {
    id: 'claude-code-fundamentals',
    title: 'Claude Code CLI Mastery',
    description: 'Master the security-first CLI agent for terminal-based AI development',
    platform: 'Claude Code',
    totalDuration: '7 hours',
    difficultyLevel: 'advanced',
    completionRate: 18,
    rating: 4.7,
    enrolledStudents: 6800,
    certificationAvailable: true,
    practicalProjects: [
      'Build a secure CLI workflow with granular permissions',
      'Implement complex refactoring using terminal commands',
      'Create custom slash commands for automated tasks',
      'Develop a security-compliant enterprise application'
    ],
    tutorials: [
      {
        id: 'claude-code-setup',
        title: 'Setting Up Claude Code CLI',
        description: 'Install and configure the security-first CLI agent',
        duration: '30 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Installation', 'API Setup', 'Security Configuration'],
        objectives: ['Install Claude Code CLI', 'Configure API access', 'Set up security permissions']
      },
      {
        id: 'context-management',
        title: 'CLAUDE.md Context Management',
        description: 'Master project-specific context and memory management',
        duration: '45 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Context Files', 'Project Memory', 'Persistent Instructions'],
        objectives: ['Create effective CLAUDE.md files', 'Manage project context', 'Optimize AI memory']
      },
      {
        id: 'security-workflows',
        title: 'Security-First Development Workflows',
        description: 'Implement granular permissions and secure development practices',
        duration: '60 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Permission Management', 'Secure Workflows', 'Audit Trails'],
        objectives: ['Configure granular permissions', 'Implement secure practices', 'Monitor security events']
      },
      {
        id: 'custom-commands',
        title: 'Custom Slash Commands',
        description: 'Create and manage custom automation commands',
        duration: '40 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Command Creation', 'Automation', 'Workflow Optimization'],
        objectives: ['Create custom commands', 'Automate repetitive tasks', 'Optimize development workflows']
      }
    ]
  }
];

// Gemini CLI Modules
export const geminiCLIModules: TutorialModule[] = [
  {
    id: 'gemini-cli-fundamentals',
    title: 'Gemini CLI Open Source Development',
    description: 'Master Google\'s open-source terminal AI agent with massive context windows',
    platform: 'Gemini CLI',
    totalDuration: '6 hours',
    difficultyLevel: 'intermediate',
    completionRate: 25,
    rating: 4.5,
    enrolledStudents: 18000,
    certificationAvailable: true,
    practicalProjects: [
      'Build a development automation script using Gemini CLI',
      'Create MCP integrations for custom workflows',
      'Implement web-integrated research and development tasks',
      'Build an AI-powered code analysis tool'
    ],
    tutorials: [
      {
        id: 'gemini-cli-setup',
        title: 'Getting Started with Gemini CLI',
        description: 'Install and configure the open-source AI terminal agent',
        duration: '25 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Open Source Installation', 'Google Account Setup', 'Free Tier Benefits'],
        objectives: ['Install Gemini CLI', 'Configure authentication', 'Understand free usage limits']
      },
      {
        id: 'context-windows',
        title: 'Leveraging Massive Context Windows',
        description: 'Maximize the 1M token context window for complex projects',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Context Management', 'Large Codebase Analysis', 'Memory Optimization'],
        objectives: ['Utilize large context windows', 'Analyze entire codebases', 'Optimize context usage']
      },
      {
        id: 'web-integration',
        title: 'Web Search and Real-time Integration',
        description: 'Integrate web search and real-time data into development workflows',
        duration: '35 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Web Search', 'Real-time Data', 'API Integration'],
        objectives: ['Implement web search features', 'Access real-time information', 'Build integrated workflows']
      },
      {
        id: 'mcp-protocol',
        title: 'Model Context Protocol Integration',
        description: 'Build custom integrations using MCP',
        duration: '50 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['MCP Protocol', 'Custom Integrations', 'Tool Development'],
        objectives: ['Implement MCP integrations', 'Build custom tools', 'Extend CLI capabilities']
      }
    ]
  }
];

// Base44 Modules
export const base44Modules: TutorialModule[] = [
  {
    id: 'base44-fundamentals',
    title: 'Base44 No-Code Mastery',
    description: 'Master the acquired Wix platform for rapid business application development',
    platform: 'Base44',
    totalDuration: '5 hours',
    difficultyLevel: 'beginner',
    completionRate: 42,
    rating: 4.6,
    enrolledStudents: 28000,
    certificationAvailable: true,
    practicalProjects: [
      'Build a complete business management app with authentication',
      'Create a customer portal with integrated payments',
      'Develop an internal tool with database integration',
      'Build a multi-user SaaS application'
    ],
    tutorials: [
      {
        id: 'base44-intro',
        title: 'Introduction to Base44 and Wix Integration',
        description: 'Understand the Buttery Includes philosophy and all-in-one approach',
        duration: '20 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['Buttery Includes', 'Wix Integration', 'No-Code Philosophy'],
        objectives: ['Understand Base44\'s approach', 'Navigate the platform', 'Plan your first app']
      },
      {
        id: 'rapid-prototyping',
        title: 'Rapid Business App Prototyping',
        description: 'Transform ideas into working applications in minutes',
        duration: '45 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Rapid Prototyping', 'Business Logic', 'UI Generation'],
        objectives: ['Create apps quickly', 'Implement business logic', 'Design professional UIs']
      },
      {
        id: 'backend-automation',
        title: 'Automatic Backend and Database Setup',
        description: 'Leverage built-in backend services and database management',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Automatic Backend', 'Database Management', 'Authentication'],
        objectives: ['Set up backend services', 'Manage databases', 'Implement user authentication']
      },
      {
        id: 'enterprise-features',
        title: 'Enterprise SSO and Advanced Features',
        description: 'Implement enterprise-grade features and integrations',
        duration: '40 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['SSO Integration', 'Enterprise Security', 'Advanced Workflows'],
        objectives: ['Set up SSO', 'Implement enterprise security', 'Build complex workflows']
      }
    ]
  }
];

// V0 Modules
export const v0Modules: TutorialModule[] = [
  {
    id: 'v0-fundamentals',
    title: 'V0 UI Component Generation',
    description: 'Master Vercel\'s AI-powered UI component generator for React and Tailwind',
    platform: 'V0',
    totalDuration: '4 hours',
    difficultyLevel: 'intermediate',
    completionRate: 38,
    rating: 4.4,
    enrolledStudents: 22000,
    certificationAvailable: true,
    practicalProjects: [
      'Generate a complete design system using V0',
      'Create responsive UI components from mockups',
      'Build and deploy a landing page with V0 components',
      'Develop a component library for team use'
    ],
    tutorials: [
      {
        id: 'v0-basics',
        title: 'V0 Platform Fundamentals',
        description: 'Navigate the Vercel-native UI generation platform',
        duration: '25 min',
        difficulty: 'beginner',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Platform Overview', 'Component Generation', 'Vercel Integration'],
        objectives: ['Understand V0 capabilities', 'Generate first components', 'Deploy to Vercel']
      },
      {
        id: 'prompt-to-ui',
        title: 'Effective Prompt-to-UI Generation',
        description: 'Master the art of describing UI components for optimal generation',
        duration: '40 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Prompt Engineering', 'UI Description', 'Iterative Refinement'],
        objectives: ['Write effective prompts', 'Refine generated components', 'Optimize UI output']
      },
      {
        id: 'image-to-code',
        title: 'Design Mockup to Code Conversion',
        description: 'Convert Figma designs and mockups into functional React components',
        duration: '35 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Image Processing', 'Design Conversion', 'Code Generation'],
        objectives: ['Convert designs to code', 'Maintain design fidelity', 'Optimize component structure']
      },
      {
        id: 'component-customization',
        title: 'Advanced Component Customization',
        description: 'Customize and optimize generated components for production use',
        duration: '30 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Component Optimization', 'Code Refinement', 'Performance Tuning'],
        objectives: ['Optimize components', 'Improve performance', 'Maintain code quality']
      },
      {
        id: 'design-systems',
        title: 'Building Design Systems with V0',
        description: 'Create consistent design systems and component libraries',
        duration: '50 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Design Systems', 'Component Libraries', 'Team Collaboration'],
        objectives: ['Build design systems', 'Create component libraries', 'Enable team collaboration']
      }
    ]
  }
];

// Rork Modules
export const rorkModules: TutorialModule[] = [
  {
    id: 'rork-fundamentals',
    title: 'Rork Mobile App Development',
    description: 'Master native mobile app development with React Native and Expo',
    platform: 'Rork',
    totalDuration: '6 hours',
    difficultyLevel: 'intermediate',
    completionRate: 14,
    rating: 4.2,
    enrolledStudents: 8500,
    certificationAvailable: true,
    practicalProjects: [
      'Build a cross-platform mobile app from text description',
      'Create a native mobile app with backend integration',
      'Deploy apps to iOS App Store and Google Play Store',
      'Build a location-based mobile application'
    ],
    tutorials: [
      {
        id: 'rork-intro',
        title: 'Introduction to Mobile-First Development',
        description: 'Understanding Rork\'s approach to native mobile app generation',
        duration: '30 min',
        difficulty: 'beginner',
        type: 'video',
        completed: false,
        locked: false,
        topics: ['Mobile Development', 'React Native', 'Cross-Platform'],
        objectives: ['Understand mobile development', 'Learn React Native basics', 'Plan mobile apps']
      },
      {
        id: 'text-to-mobile-app',
        title: 'Text-to-Mobile App Generation',
        description: 'Generate complete mobile applications from natural language descriptions',
        duration: '60 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Text Generation', 'Mobile UI', 'Native Components'],
        objectives: ['Generate mobile apps', 'Understand mobile UI', 'Use native components']
      },
      {
        id: 'backend-integration',
        title: 'Backend Integration and Data Management',
        description: 'Connect mobile apps to backend services and databases',
        duration: '50 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Backend Services', 'Data Management', 'API Integration'],
        objectives: ['Connect to backends', 'Manage app data', 'Handle API requests']
      },
      {
        id: 'app-store-deployment',
        title: 'App Store Deployment and Publishing',
        description: 'Deploy and publish mobile apps to official app stores',
        duration: '45 min',
        difficulty: 'advanced',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['App Store Publishing', 'Google Play', 'App Distribution'],
        objectives: ['Prepare apps for stores', 'Handle app store requirements', 'Manage app distribution']
      },
      {
        id: 'mobile-testing',
        title: 'Mobile Testing and Quality Assurance',
        description: 'Test mobile applications across different devices and platforms',
        duration: '35 min',
        difficulty: 'intermediate',
        type: 'hands-on',
        completed: false,
        locked: false,
        topics: ['Mobile Testing', 'Device Testing', 'Quality Assurance'],
        objectives: ['Test on multiple devices', 'Ensure app quality', 'Handle platform differences']
      }
    ]
  }
];

export const getAllPlatformModules = () => ({
  'Lovable 2.0': lovableModules,
  'Cursor': cursorModules,
  'Replit': replitModules,
  'Windsurf': windSurfModules,
  'Bolt': boltModules,
  'Claude Code': claudeCodeModules,
  'Gemini CLI': geminiCLIModules,
  'Base44': base44Modules,
  'V0': v0Modules,
  'Rork': rorkModules
});
