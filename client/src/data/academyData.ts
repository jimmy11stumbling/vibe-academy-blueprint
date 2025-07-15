
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'video' | 'text' | 'interactive' | 'project';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  exercises?: Exercise[];
  resources?: Resource[];
  completed: boolean;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  type: 'coding' | 'quiz' | 'project';
  instructions: string[];
  solution?: string;
  hints?: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'documentation' | 'video' | 'article' | 'template';
  url: string;
  description: string;
}

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
  lessons: Lesson[];
  finalProject?: {
    title: string;
    description: string;
    requirements: string[];
    deliverables: string[];
  };
}

export const academyModules: Record<string, AcademyModule[]> = {
  'Lovable 2.0': [
    {
      id: 'lovable-fundamentals',
      title: 'Lovable 2.0 Fundamentals',
      description: 'Master the basics of chat-driven full-stack development',
      platform: 'Lovable 2.0',
      icon: '🚀',
      estimatedTime: '4 hours',
      difficulty: 'beginner',
      prerequisites: [],
      learningObjectives: [
        'Understand chat-driven development concepts',
        'Create your first full-stack app',
        'Master the Lovable interface',
        'Learn basic deployment workflows'
      ],
      lessons: [
        {
          id: 'lovable-intro',
          title: 'Introduction to Lovable 2.0',
          description: 'Understanding the revolutionary chat-driven development approach',
          duration: '30 min',
          type: 'video',
          difficulty: 'beginner',
          content: `# Introduction to Lovable 2.0

## What is Lovable 2.0?
Lovable 2.0 is a European AI startup that's revolutionizing full-stack development through chat-driven interfaces. Instead of writing code line by line, you describe what you want to build in natural language.

## Key Concepts:
- **Chat-driven development**: Describe your app in conversational language
- **Full-stack capabilities**: Frontend, backend, and database all in one
- **Native integrations**: Built-in Supabase, authentication, and deployment
- **Visual editing**: See changes in real-time as you chat

## Getting Started:
1. Sign up for a Lovable account
2. Start a new project
3. Use the chat interface to describe your app
4. Watch as Lovable builds your full-stack application

## Best Practices:
- Be specific about your requirements
- Break complex features into smaller requests
- Use the visual editor to fine-tune details
- Test frequently during development`,
          exercises: [
            {
              id: 'lovable-signup',
              title: 'Create Your Lovable Account',
              description: 'Sign up and explore the Lovable interface',
              type: 'project',
              instructions: [
                'Visit lovable.dev and create an account',
                'Explore the dashboard and interface',
                'Create your first project',
                'Familiarize yourself with the chat interface'
              ]
            }
          ],
          resources: [
            {
              id: 'lovable-docs',
              title: 'Lovable Documentation',
              type: 'documentation',
              url: 'https://docs.lovable.dev',
              description: 'Official documentation and guides'
            }
          ],
          completed: false
        },
        {
          id: 'first-lovable-app',
          title: 'Building Your First App',
          description: 'Create a simple todo application using chat-driven development',
          duration: '45 min',
          type: 'interactive',
          difficulty: 'beginner',
          content: `# Building Your First Lovable App

## Project: Todo Application
Let's build a simple todo app to understand Lovable's capabilities.

## Step 1: Project Setup
Start by telling Lovable what you want to build:
"I want to create a todo application where users can add, edit, and delete tasks"

## Step 2: Adding Features
Continue the conversation to add features:
- "Add a priority system with high, medium, low options"
- "Include due dates for tasks"
- "Add categories or tags for organization"

## Step 3: Styling and UI
Improve the appearance:
- "Make the design modern and clean"
- "Use a color scheme that's easy on the eyes"
- "Add responsive design for mobile devices"

## Step 4: Database Integration
Lovable automatically handles the backend:
- Tasks are stored in Supabase
- Real-time updates work out of the box
- Authentication is built-in

## Step 5: Testing and Deployment
- Test your app thoroughly
- Use Lovable's one-click deployment
- Share your app with others`,
          exercises: [
            {
              id: 'build-todo-app',
              title: 'Build Todo App',
              description: 'Create a complete todo application',
              type: 'project',
              instructions: [
                'Start a new Lovable project',
                'Use chat to describe your todo app',
                'Add the features mentioned in the lesson',
                'Test all functionality',
                'Deploy your app'
              ]
            }
          ],
          completed: false
        }
      ],
      finalProject: {
        title: 'Personal Portfolio Website',
        description: 'Create a professional portfolio website showcasing your projects',
        requirements: [
          'About section with bio and skills',
          'Projects showcase with images and descriptions',
          'Contact form with email integration',
          'Responsive design for all devices',
          'Professional styling and branding'
        ],
        deliverables: [
          'Deployed portfolio website',
          'Documentation of development process',
          'List of features implemented'
        ]
      }
    },
    {
      id: 'lovable-advanced',
      title: 'Advanced Lovable Development',
      description: 'Master complex features and integrations',
      platform: 'Lovable 2.0',
      icon: '⚡',
      estimatedTime: '6 hours',
      difficulty: 'intermediate',
      prerequisites: ['lovable-fundamentals'],
      learningObjectives: [
        'Implement complex database relationships',
        'Master authentication and user management',
        'Integrate external APIs and services',
        'Optimize performance and scalability'
      ],
      lessons: [
        {
          id: 'lovable-database',
          title: 'Advanced Database Design',
          description: 'Creating complex data relationships and queries',
          duration: '60 min',
          type: 'text',
          difficulty: 'intermediate',
          content: `# Advanced Database Design in Lovable

## Understanding Supabase Integration
Lovable uses Supabase as its backend database, providing powerful PostgreSQL capabilities.

## Key Concepts:
- **Relational Design**: Creating tables with foreign key relationships
- **Row Level Security**: Protecting data with user-based access controls
- **Real-time Subscriptions**: Live updates across all connected clients
- **Complex Queries**: Using SQL for advanced data retrieval

## Common Patterns:
1. **One-to-Many**: User has many posts
2. **Many-to-Many**: Users can follow many users
3. **Hierarchical**: Comments with nested replies
4. **Polymorphic**: Generic relationships across tables

## Best Practices:
- Design your schema before coding
- Use proper indexing for performance
- Implement proper access controls
- Consider data migration strategies`,
          exercises: [
            {
              id: 'design-blog-schema',
              title: 'Design Blog Database',
              description: 'Create a complete blog database schema',
              type: 'project',
              instructions: [
                'Design tables for users, posts, comments, and categories',
                'Set up proper relationships between tables',
                'Implement row-level security',
                'Create sample data and test queries'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Cursor': [
    {
      id: 'cursor-fundamentals',
      title: 'Cursor IDE Fundamentals',
      description: 'Master AI-powered development with Cursor',
      platform: 'Cursor',
      icon: '🎯',
      estimatedTime: '3 hours',
      difficulty: 'beginner',
      prerequisites: [],
      learningObjectives: [
        'Navigate the Cursor interface efficiently',
        'Use AI chat for code assistance',
        'Master predictive editing features',
        'Understand codebase-aware AI capabilities'
      ],
      lessons: [
        {
          id: 'cursor-setup',
          title: 'Getting Started with Cursor',
          description: 'Installation, setup, and first steps',
          duration: '30 min',
          type: 'video',
          difficulty: 'beginner',
          content: `# Getting Started with Cursor

## What is Cursor?
Cursor is an AI-first IDE built on VS Code, designed to enhance developer productivity with intelligent code assistance.

## Key Features:
- **Codebase-aware AI**: Understands your entire project context
- **Predictive editing**: Suggests code as you type
- **Agent mode**: Handles complex multi-file tasks
- **VS Code compatibility**: All your favorite extensions work

## Installation:
1. Download from cursor.sh
2. Install like any other application
3. Import your VS Code settings (optional)
4. Sign up for Cursor Pro for full AI features

## First Steps:
1. Open or create a new project
2. Try the AI chat (Cmd/Ctrl + L)
3. Experience predictive editing
4. Explore the command palette features`,
          exercises: [
            {
              id: 'cursor-setup-exercise',
              title: 'Set Up Cursor IDE',
              description: 'Install and configure Cursor for development',
              type: 'project',
              instructions: [
                'Download and install Cursor',
                'Create a new project',
                'Test the AI chat feature',
                'Try predictive editing with a simple function'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Replit': [
    {
      id: 'replit-fundamentals',
      title: 'Replit Collaborative Development',
      description: 'Master collaborative coding and deployment',
      platform: 'Replit',
      icon: '🔄',
      estimatedTime: '4 hours',
      difficulty: 'beginner',
      prerequisites: [],
      learningObjectives: [
        'Understand collaborative development workflows',
        'Master Replit\'s development environment',
        'Learn real-time coding with others',
        'Deploy applications seamlessly'
      ],
      lessons: [
        {
          id: 'replit-intro',
          title: 'Introduction to Replit',
          description: 'Understanding collaborative browser-based development',
          duration: '45 min',
          type: 'interactive',
          difficulty: 'beginner',
          content: `# Introduction to Replit

## What is Replit?
Replit is a collaborative browser-based IDE with over 40 million users, offering zero-setup development environments.

## Key Features:
- **Real-time collaboration**: Code with others simultaneously
- **Zero setup**: No installation required
- **Multi-language support**: Support for 50+ programming languages
- **Built-in database**: ReplDB for data storage
- **Instant deployment**: Share your apps immediately

## Getting Started:
1. Create a Replit account
2. Start a new repl
3. Choose your language/framework
4. Begin coding immediately

## Collaboration Features:
- **Multiplayer**: Invite others to code together
- **Comments**: Leave feedback directly in code
- **Version control**: Built-in Git integration
- **Live cursors**: See where others are working`,
          exercises: [
            {
              id: 'replit-collaboration',
              title: 'Collaborative Coding Exercise',
              description: 'Work on a project with team members',
              type: 'project',
              instructions: [
                'Create a new repl',
                'Invite a friend to collaborate',
                'Build a simple calculator together',
                'Use comments to communicate'
              ]
            }
          ],
          completed: false
        },
        {
          id: 'replit-database',
          title: 'ReplDB Database Integration',
          description: 'Learn to use Replit\'s built-in database',
          duration: '60 min',
          type: 'interactive',
          difficulty: 'intermediate',
          content: `# ReplDB Database Integration

## Understanding ReplDB
ReplDB is Replit's built-in key-value database, perfect for storing application data without external setup.

## Key Features:
- **Zero Configuration**: No setup required
- **Persistent Storage**: Data persists across sessions
- **Simple API**: Easy-to-use key-value interface
- **Real-time Updates**: Instant data synchronization
- **Multi-language Support**: Available in all languages

## Basic Operations:
\`\`\`javascript
// Setting data
await db.set("user:123", { name: "John", age: 30 });

// Getting data
const user = await db.get("user:123");

// Deleting data
await db.delete("user:123");

// Listing keys
const keys = await db.list();
\`\`\`

## Advanced Patterns:
- User authentication systems
- Real-time chat applications
- Data analytics tracking
- Content management systems`,
          exercises: [
            {
              id: 'replit-db-app',
              title: 'Build Database App',
              description: 'Create an app using ReplDB for data storage',
              type: 'project',
              instructions: [
                'Create a new repl with database',
                'Implement user registration system',
                'Add data CRUD operations',
                'Test data persistence',
                'Deploy the application'
              ]
            }
          ],
          completed: false
        }
      ]
    },
    {
      id: 'replit-advanced',
      title: 'Advanced Replit Development',
      description: 'Master advanced features and deployment',
      platform: 'Replit',
      icon: '🚀',
      estimatedTime: '5 hours',
      difficulty: 'intermediate',
      prerequisites: ['replit-fundamentals'],
      learningObjectives: [
        'Master advanced collaboration features',
        'Implement CI/CD workflows',
        'Build scalable applications',
        'Optimize performance'
      ],
      lessons: [
        {
          id: 'replit-deployment',
          title: 'Production Deployment Strategies',
          description: 'Deploy and scale applications on Replit',
          duration: '90 min',
          type: 'project',
          difficulty: 'intermediate',
          content: `# Production Deployment on Replit

## Deployment Options
Replit offers multiple deployment strategies for different application types and scaling needs.

## Static Site Deployment:
- **HTML/CSS/JS**: Simple static websites
- **React/Vue**: Single-page applications
- **Documentation**: Project documentation sites
- **Portfolio**: Personal portfolio websites

## Dynamic Application Deployment:
- **Node.js**: Server-side JavaScript applications
- **Python**: Django, Flask, FastAPI applications
- **Web Servers**: Express, Koa, Nest.js applications
- **APIs**: RESTful and GraphQL services

## Advanced Features:
- **Custom Domains**: Connect your own domain
- **Environment Variables**: Secure configuration
- **Scaling**: Handle increased traffic
- **Monitoring**: Track application performance
- **SSL Certificates**: Secure HTTPS connections

## Best Practices:
- Optimize for production
- Implement error handling
- Use environment variables
- Monitor performance metrics
- Plan for scaling`,
          exercises: [
            {
              id: 'replit-production-deploy',
              title: 'Production Deployment',
              description: 'Deploy a full application to production',
              type: 'project',
              instructions: [
                'Build a complete web application',
                'Configure environment variables',
                'Set up custom domain',
                'Implement monitoring',
                'Test production deployment'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Windsurf': [
    {
      id: 'windsurf-enterprise',
      title: 'Enterprise Development with Windsurf',
      description: 'Master enterprise-grade agentic development',
      platform: 'Windsurf',
      icon: '🏢',
      estimatedTime: '5 hours',
      difficulty: 'advanced',
      prerequisites: [],
      learningObjectives: [
        'Understand enterprise security requirements',
        'Master Cascade AI agent capabilities',
        'Implement compliance and governance',
        'Deploy scalable applications'
      ],
      lessons: [
        {
          id: 'windsurf-security',
          title: 'Enterprise Security and Compliance',
          description: 'Understanding FedRAMP and SOC 2 compliance',
          duration: '60 min',
          type: 'text',
          difficulty: 'advanced',
          content: `# Enterprise Security in Windsurf

## Security Features:
- **FedRAMP Certification**: Government-grade security
- **SOC 2 Compliance**: Industry-standard security controls
- **On-premise deployment**: Keep data within your infrastructure
- **Role-based access**: Fine-grained permission controls

## Best Practices:
1. Implement least privilege access
2. Regular security audits and updates
3. Encrypted data transmission and storage
4. Comprehensive logging and monitoring

## Compliance Requirements:
- Data residency requirements
- Audit trail maintenance
- Regular security assessments
- Incident response procedures`,
          exercises: [
            {
              id: 'security-audit',
              title: 'Security Assessment',
              description: 'Conduct a security review of your development environment',
              type: 'project',
              instructions: [
                'Review access controls and permissions',
                'Audit data handling procedures',
                'Test security configurations',
                'Document compliance measures'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ]
};

export const learningPaths = [
  {
    id: 'beginner-fullstack',
    title: 'Complete Beginner to Full-Stack Developer',
    description: 'Learn to build full-stack applications without coding',
    duration: '12 weeks',
    modules: [
      'lovable-fundamentals',
      'replit-fundamentals',
      'cursor-fundamentals',
      'lovable-advanced'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'enterprise-developer',
    title: 'Enterprise Application Development',
    description: 'Build secure, scalable enterprise applications',
    duration: '8 weeks',
    modules: [
      'windsurf-enterprise',
      'cursor-fundamentals',
      'lovable-advanced'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Development Path',
    description: 'Master mobile app development with no-code tools',
    duration: '10 weeks',
    modules: [
      'rork-mobile-development',
      'bolt-fundamentals',
      'v0-ui-generation'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'ui-specialist',
    title: 'UI/UX Design and Development',
    description: 'Specialize in creating beautiful user interfaces',
    duration: '6 weeks',
    modules: [
      'v0-ui-generation',
      'bolt-fundamentals',
      'base44-allinone'
    ],
    difficulty: 'beginner'
  }
];

// Complete academy modules are exported from completeAcademyData.ts to avoid circular imports
