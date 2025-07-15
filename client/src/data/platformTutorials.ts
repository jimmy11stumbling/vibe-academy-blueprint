
import { AcademyModule, academyModules } from './academyData';

export const platformTutorials: Record<string, AcademyModule[]> = {
  'Bolt': [
    {
      id: 'bolt-fundamentals',
      title: 'Bolt WebContainer Mastery',
      description: 'Master browser-based full-stack development with WebContainer technology',
      platform: 'Bolt',
      icon: '⚡',
      estimatedTime: '5 hours',
      difficulty: 'intermediate',
      prerequisites: ['Basic JavaScript knowledge'],
      learningObjectives: [
        'Understand WebContainer technology',
        'Build full-stack apps in browser',
        'Master real-time development',
        'Deploy applications seamlessly'
      ],
      lessons: [
        {
          id: 'bolt-webcontainer-intro',
          title: 'Understanding WebContainer Technology',
          description: 'Learn how Bolt runs Node.js directly in your browser',
          duration: '45 min',
          type: 'interactive',
          difficulty: 'intermediate',
          content: `# WebContainer Technology in Bolt

## Revolutionary Browser Development
Bolt uses WebContainer technology to run Node.js directly in your browser, eliminating the need for local setup.

## Key Features:
- **True Full-Stack**: Run frontend and backend in the same browser
- **Real-time Execution**: See changes instantly without reload
- **Complete Ecosystem**: NPM packages work natively
- **GitHub Integration**: Import and export projects seamlessly

## How It Works:
1. WebContainer emulates Node.js environment
2. File system runs entirely in browser
3. Network requests work like local development
4. Hot reload for instant feedback

## Building Your First App:
- Start with a simple Express server
- Add React frontend components
- Connect to databases and APIs
- Deploy with one click

## Best Practices:
- Use modern JavaScript/TypeScript
- Leverage hot reload for rapid iteration
- Test across different browser environments
- Export to GitHub for version control`,
          exercises: [
            {
              id: 'bolt-first-app',
              title: 'Create Full-Stack App',
              description: 'Build a complete application using WebContainer',
              type: 'project',
              instructions: [
                'Create a new Bolt project',
                'Set up Express server with API routes',
                'Add React frontend with components',
                'Connect frontend to backend API',
                'Test the complete application flow'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Claude Code': [
    {
      id: 'claude-cli-mastery',
      title: 'Claude CLI Development Mastery',
      description: 'Master terminal-based AI development with Claude',
      platform: 'Claude Code',
      icon: '🤖',
      estimatedTime: '4 hours',
      difficulty: 'advanced',
      prerequisites: ['Command line experience', 'Basic coding knowledge'],
      learningObjectives: [
        'Master Claude CLI interface',
        'Implement security best practices',
        'Create efficient development workflows',
        'Optimize token usage and costs'
      ],
      lessons: [
        {
          id: 'claude-cli-setup',
          title: 'Claude CLI Setup and Configuration',
          description: 'Get started with Claude\'s powerful terminal interface',
          duration: '30 min',
          type: 'text',
          difficulty: 'advanced',
          content: `# Claude CLI Setup and Configuration

## Installation and Setup
Claude CLI provides a powerful terminal interface for AI-assisted development.

## Key Features:
- **Terminal-native**: Built for command-line workflows
- **Security-first**: Granular permissions and controls
- **Context-aware**: CLAUDE.md files for project context
- **Multi-file**: Handle complex refactoring tasks

## Installation:
\`\`\`bash
npm install -g @anthropic-ai/claude-cli
claude auth login
\`\`\`

## Configuration:
1. Set up API credentials securely
2. Configure project-specific settings
3. Create CLAUDE.md context files
4. Set up custom slash commands

## Security Best Practices:
- Use granular permissions
- Implement least privilege access
- Regular security audits
- Monitor token usage

## Context Management:
- Create comprehensive CLAUDE.md files
- Document project structure
- Include coding standards
- Maintain up-to-date dependencies`,
          exercises: [
            {
              id: 'claude-setup',
              title: 'Configure Claude CLI',
              description: 'Set up and configure Claude CLI for your development environment',
              type: 'project',
              instructions: [
                'Install Claude CLI globally',
                'Configure authentication',
                'Create a test project with CLAUDE.md',
                'Test basic commands and responses'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Gemini CLI': [
    {
      id: 'gemini-cli-fundamentals',
      title: 'Gemini CLI Development',
      description: 'Master Google\'s open-source AI development tool',
      platform: 'Gemini CLI',
      icon: '💎',
      estimatedTime: '3 hours',
      difficulty: 'intermediate',
      prerequisites: ['Basic command line knowledge'],
      learningObjectives: [
        'Understand Gemini CLI capabilities',
        'Leverage massive context windows',
        'Implement web search integration',
        'Build with open-source foundation'
      ],
      lessons: [
        {
          id: 'gemini-cli-intro',
          title: 'Getting Started with Gemini CLI',
          description: 'Introduction to Google\'s open-source AI development tool',
          duration: '40 min',
          type: 'interactive',
          difficulty: 'intermediate',
          content: `# Gemini CLI Development

## Open Source AI Development
Gemini CLI is Google's open-source terminal AI agent with massive context windows and web search capabilities.

## Key Advantages:
- **Open Source**: Complete transparency and customization
- **Massive Context**: 1M+ token context windows
- **Web Search**: Built-in search capabilities
- **Free Tier**: Generous usage limits
- **Google Integration**: Seamless Google Cloud integration

## Installation:
\`\`\`bash
npm install -g @google-ai/gemini-cli
gemini auth setup
\`\`\`

## Core Features:
- Multi-file code analysis
- Real-time web search
- MCP protocol support
- Custom tool integration
- Collaborative workflows

## Best Practices:
- Leverage large context windows
- Use web search for current information
- Implement custom tools for specific needs
- Monitor usage within free tier limits`,
          exercises: [
            {
              id: 'gemini-web-search',
              title: 'Build Web-Enhanced App',
              description: 'Create an application that leverages Gemini\'s web search capabilities',
              type: 'project',
              instructions: [
                'Set up Gemini CLI in your project',
                'Configure web search integration',
                'Build a news aggregator or research tool',
                'Test real-time information retrieval'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Base44': [
    {
      id: 'base44-allinone',
      title: 'Base44 All-in-One Development',
      description: 'Master comprehensive no-code development with Base44',
      platform: 'Base44',
      icon: '🧱',
      estimatedTime: '6 hours',
      difficulty: 'intermediate',
      prerequisites: ['Basic web development concepts'],
      learningObjectives: [
        'Understand all-in-one philosophy',
        'Master built-in backend features',
        'Implement enterprise authentication',
        'Deploy scalable applications'
      ],
      lessons: [
        {
          id: 'base44-philosophy',
          title: 'Understanding Base44\'s All-in-One Approach',
          description: 'Learn the "Buttery Includes" philosophy and comprehensive development',
          duration: '50 min',
          type: 'text',
          difficulty: 'intermediate',
          content: `# Base44 All-in-One Development

## The "Buttery Includes" Philosophy
Base44, acquired by Wix, follows an all-in-one approach where everything you need is included by default.

## Included Features:
- **Built-in Backend**: No external services needed
- **Authentication System**: Complete user management
- **Database Integration**: Native data storage
- **Enterprise SSO**: Business-ready authentication
- **Multiple AI Models**: Choose the right AI for your needs
- **Instant Deployment**: One-click publishing

## Architecture Benefits:
- No external dependencies
- Consistent performance
- Simplified development
- Enterprise-ready out of the box

## Getting Started:
1. Create Base44 account
2. Start with included templates
3. Customize using built-in tools
4. Deploy with integrated hosting

## Best Use Cases:
- Business applications
- Enterprise tools
- Rapid prototyping
- All-in-one solutions`,
          exercises: [
            {
              id: 'base44-enterprise-app',
              title: 'Build Enterprise Application',
              description: 'Create a business application using Base44\'s all-in-one features',
              type: 'project',
              instructions: [
                'Set up Base44 project',
                'Implement user authentication',
                'Create business data models',
                'Add enterprise SSO integration',
                'Deploy complete application'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'V0': [
    {
      id: 'v0-ui-generation',
      title: 'V0 UI Component Mastery',
      description: 'Master UI component generation with V0',
      platform: 'V0',
      icon: '🎨',
      estimatedTime: '4 hours',
      difficulty: 'beginner',
      prerequisites: ['Basic React knowledge'],
      learningObjectives: [
        'Master UI component generation',
        'Understand Tailwind CSS integration',
        'Implement responsive design',
        'Optimize for Vercel deployment'
      ],
      lessons: [
        {
          id: 'v0-component-generation',
          title: 'Generating Beautiful UI Components',
          description: 'Learn to create stunning React components with V0',
          duration: '35 min',
          type: 'interactive',
          difficulty: 'beginner',
          content: `# V0 UI Component Generation

## Specialized UI Generation
V0 by Vercel specializes in generating high-quality React components optimized for modern web development.

## Key Features:
- **React Components**: Native React code generation
- **Tailwind CSS**: Optimized styling system
- **Responsive Design**: Mobile-first approach
- **Vercel Integration**: Perfect deployment workflow
- **Image-to-Code**: Convert designs to components
- **Iterative Refinement**: Improve components through chat

## Component Types:
- Navigation and headers
- Forms and inputs
- Cards and layouts
- Charts and data visualization
- Interactive elements
- E-commerce components

## Best Practices:
- Start with clear descriptions
- Use specific design requirements
- Iterate based on feedback
- Test across devices
- Optimize for performance

## Workflow:
1. Describe your component needs
2. Generate initial component
3. Refine through iterations
4. Test and deploy`,
          exercises: [
            {
              id: 'v0-dashboard',
              title: 'Create Dashboard Components',
              description: 'Build a complete dashboard using V0 components',
              type: 'project',
              instructions: [
                'Generate navigation component',
                'Create data visualization cards',
                'Build responsive grid layout',
                'Add interactive forms',
                'Deploy to Vercel'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ],
  'Rork': [
    {
      id: 'rork-mobile-development',
      title: 'Mobile App Development with Rork',
      description: 'Create native mobile apps using AI-powered development',
      platform: 'Rork',
      icon: '📱',
      estimatedTime: '7 hours',
      difficulty: 'advanced',
      prerequisites: ['Mobile development concepts', 'React Native basics'],
      learningObjectives: [
        'Master React Native generation',
        'Understand cross-platform development',
        'Implement native UI components',
        'Deploy to app stores'
      ],
      lessons: [
        {
          id: 'rork-react-native',
          title: 'React Native App Generation',
          description: 'Build native mobile apps with AI assistance',
          duration: '90 min',
          type: 'project',
          difficulty: 'advanced',
          content: `# Mobile App Development with Rork

## AI-Powered Mobile Development
Rork specializes in generating native mobile applications using React Native and AI assistance.

## Key Capabilities:
- **React Native Generation**: Native iOS and Android apps
- **Cross-platform**: One codebase, multiple platforms
- **Native UI Components**: Platform-specific interfaces
- **App Store Deployment**: Direct publishing workflow
- **Backend Integration**: API and data connections
- **Real Device Testing**: Test on actual devices

## Development Process:
1. Define app requirements
2. Generate base React Native structure
3. Customize UI components
4. Implement business logic
5. Test on multiple devices
6. Deploy to app stores

## Mobile-Specific Features:
- Native navigation patterns
- Device-specific optimizations
- Push notifications
- Camera and GPS integration
- Offline functionality
- Performance optimization

## Challenges and Solutions:
- Platform differences
- Performance optimization
- App store requirements
- Device compatibility
- User experience design`,
          exercises: [
            {
              id: 'rork-mobile-app',
              title: 'Build Complete Mobile App',
              description: 'Create a full-featured mobile application',
              type: 'project',
              instructions: [
                'Design app architecture',
                'Generate React Native components',
                'Implement navigation system',
                'Add native device features',
                'Test on iOS and Android',
                'Prepare for app store submission'
              ]
            }
          ],
          completed: false
        }
      ]
    }
  ]
};

// Merge with existing academy modules
export const completeAcademyModules = {
  ...academyModules,
  ...platformTutorials
};
