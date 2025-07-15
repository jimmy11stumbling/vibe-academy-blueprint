export interface Platform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  category: string;
  pricing: {
    free: boolean;
    starter?: string;
    pro?: string;
    enterprise?: string;
  };
  features: string[];
  strengths: string[];
  limitations: string[];
  techStack: string[];
  useCase: string;
  targetAudience: string;
  rating: number;
  userCount: string;
  website: string;
  documentation: string;
  tutorials: string[];
  integrations: string[];
  learningPath: string;
}

export const platforms: Platform[] = [
  {
    id: 'lovable',
    name: 'Lovable 2.0',
    tagline: 'Chat-driven full-stack development platform',
    description: 'Revolutionary AI-powered platform that allows you to build complete full-stack applications through natural language conversations. Simply describe what you want, and Lovable generates production-ready code with modern frameworks.',
    logo: '🚀',
    category: 'AI-Powered Development',
    pricing: {
      free: false,
      starter: '$20/month',
      pro: '$50/month',
      enterprise: 'Custom'
    },
    features: [
      'Natural language to full-stack app generation',
      'Real-time collaborative editing',
      'Automatic deployment and hosting',
      'Database design and integration',
      'API generation and documentation',
      'Modern React/Node.js stack',
      'Git integration and version control',
      'Production-ready code output'
    ],
    strengths: [
      'Fastest time from idea to deployed app',
      'No coding experience required',
      'Handles complex full-stack architecture',
      'Automatic best practices implementation',
      'Seamless deployment pipeline'
    ],
    limitations: [
      'Limited customization for advanced developers',
      'Requires subscription for full features',
      'Learning curve for prompt engineering'
    ],
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    useCase: 'Rapid prototyping, MVP development, business applications',
    targetAudience: 'Entrepreneurs, product managers, non-technical founders',
    rating: 4.8,
    userCount: '50K+',
    website: 'https://lovable.dev',
    documentation: 'https://docs.lovable.dev',
    tutorials: [
      'Getting Started with Lovable',
      'Building Your First App',
      'Advanced Features and Deployment'
    ],
    integrations: ['GitHub', 'Stripe', 'Auth0', 'PostgreSQL', 'Vercel'],
    learningPath: '/academy/platform/lovable'
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    tagline: 'AI-powered code editor for professional developers',
    description: 'Advanced IDE with built-in AI assistance that helps professional developers write code faster and more efficiently. Features intelligent autocomplete, code generation, and debugging assistance.',
    logo: '🎯',
    category: 'AI-Enhanced IDE',
    pricing: {
      free: true,
      pro: '$20/month',
      enterprise: '$40/month'
    },
    features: [
      'AI-powered code completion',
      'Natural language code generation',
      'Intelligent debugging assistance',
      'Multi-language support',
      'Git integration',
      'Terminal integration',
      'Extension marketplace',
      'Collaborative editing'
    ],
    strengths: [
      'Professional developer focused',
      'Excellent AI code assistance',
      'Fast and responsive interface',
      'Strong debugging capabilities',
      'Good free tier'
    ],
    limitations: [
      'Requires coding knowledge',
      'Limited no-code features',
      'Steeper learning curve for beginners'
    ],
    techStack: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java'],
    useCase: 'Professional software development, code optimization, debugging',
    targetAudience: 'Professional developers, software engineers, tech teams',
    rating: 4.7,
    userCount: '200K+',
    website: 'https://cursor.sh',
    documentation: 'https://docs.cursor.sh',
    tutorials: [
      'Getting Started with Cursor',
      'AI-Assisted Development',
      'Advanced Features and Customization'
    ],
    integrations: ['GitHub', 'GitLab', 'VS Code Extensions', 'Docker', 'AWS'],
    learningPath: '/academy/platform/cursor'
  },
  {
    id: 'replit',
    name: 'Replit',
    tagline: 'Collaborative coding platform with zero setup',
    description: 'Browser-based development environment that enables real-time collaboration, instant deployment, and zero-setup coding across multiple programming languages and frameworks.',
    logo: '🔧',
    category: 'Cloud Development Platform',
    pricing: {
      free: true,
      starter: '$7/month',
      pro: '$20/month',
      enterprise: 'Custom'
    },
    features: [
      'Zero-setup development environment',
      'Real-time collaborative coding',
      'Instant deployment and hosting',
      'Multi-language support',
      'Built-in database integration',
      'Package management',
      'Live coding sessions',
      'Educational tools and templates'
    ],
    strengths: [
      'No local setup required',
      'Excellent for learning and collaboration',
      'Instant sharing and deployment',
      'Great community and templates',
      'Strong educational focus'
    ],
    limitations: [
      'Performance limitations for large projects',
      'Internet connection required',
      'Limited customization options'
    ],
    techStack: ['JavaScript', 'Python', 'Java', 'C++', 'HTML/CSS', 'React', 'Node.js'],
    useCase: 'Education, prototyping, collaborative development, learning',
    targetAudience: 'Students, educators, developers, teams',
    rating: 4.5,
    userCount: '20M+',
    website: 'https://replit.com',
    documentation: 'https://docs.replit.com',
    tutorials: [
      'Getting Started with Replit',
      'Collaborative Development',
      'Deployment and Hosting'
    ],
    integrations: ['GitHub', 'PostgreSQL', 'MongoDB', 'Express', 'Next.js'],
    learningPath: '/academy/platform/replit'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    tagline: 'Enterprise-grade AI development platform',
    description: 'Advanced AI-powered development platform designed for enterprise teams with features for large-scale application development, security, and team collaboration.',
    logo: '🌊',
    category: 'Enterprise AI Development',
    pricing: {
      free: false,
      pro: '$99/month',
      enterprise: 'Custom'
    },
    features: [
      'Enterprise-grade security',
      'Advanced AI code generation',
      'Team collaboration tools',
      'Scalable architecture design',
      'Compliance and audit trails',
      'Custom model training',
      'Advanced debugging tools',
      'Performance optimization'
    ],
    strengths: [
      'Enterprise security features',
      'Scalable for large teams',
      'Advanced AI capabilities',
      'Compliance ready',
      'Professional support'
    ],
    limitations: [
      'High cost for small teams',
      'Complex setup process',
      'Requires technical expertise'
    ],
    techStack: ['Microservices', 'Kubernetes', 'Docker', 'Cloud Native', 'API Gateway'],
    useCase: 'Enterprise applications, large-scale systems, regulated industries',
    targetAudience: 'Enterprise developers, large organizations, regulated industries',
    rating: 4.6,
    userCount: '10K+',
    website: 'https://windsurf.dev',
    documentation: 'https://docs.windsurf.dev',
    tutorials: [
      'Enterprise Development Setup',
      'Advanced AI Features',
      'Security and Compliance'
    ],
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Jenkins', 'Terraform'],
    learningPath: '/academy/platform/windsurf'
  },
  {
    id: 'bolt',
    name: 'Bolt',
    tagline: 'Full-stack development in the browser with WebContainer',
    description: 'Revolutionary platform that runs a complete Node.js environment in the browser using WebContainer technology, enabling full-stack development without any local setup.',
    logo: '⚡',
    category: 'Browser-Based Development',
    pricing: {
      free: true,
      pro: '$15/month',
      enterprise: '$30/month'
    },
    features: [
      'WebContainer technology',
      'Full Node.js in browser',
      'Instant preview and deployment',
      'Package installation in browser',
      'File system access',
      'Terminal in browser',
      'Hot reload functionality',
      'Collaborative development'
    ],
    strengths: [
      'Revolutionary browser technology',
      'No local setup required',
      'Full-stack capabilities',
      'Instant sharing and preview',
      'Good performance'
    ],
    limitations: [
      'Browser resource limitations',
      'Limited to web technologies',
      'New technology with learning curve'
    ],
    techStack: ['WebContainer', 'Node.js', 'JavaScript', 'TypeScript', 'React', 'Vue'],
    useCase: 'Web development, prototyping, education, collaboration',
    targetAudience: 'Web developers, educators, teams, freelancers',
    rating: 4.4,
    userCount: '100K+',
    website: 'https://bolt.new',
    documentation: 'https://docs.bolt.new',
    tutorials: [
      'WebContainer Fundamentals',
      'Full-Stack in Browser',
      'Advanced Features and Deployment'
    ],
    integrations: ['npm', 'GitHub', 'Vercel', 'Netlify', 'Vite'],
    learningPath: '/academy/platform/bolt'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    tagline: 'AI-powered coding assistant by Anthropic',
    description: 'Advanced AI coding assistant that helps with code generation, debugging, code review, and technical documentation across multiple programming languages.',
    logo: '🤖',
    category: 'AI Coding Assistant',
    pricing: {
      free: true,
      pro: '$20/month',
      enterprise: 'Custom'
    },
    features: [
      'Multi-language code generation',
      'Intelligent code review',
      'Bug detection and fixing',
      'Technical documentation',
      'Code optimization suggestions',
      'Architecture recommendations',
      'Test case generation',
      'Refactoring assistance'
    ],
    strengths: [
      'Excellent code quality',
      'Strong reasoning capabilities',
      'Good at explaining complex code',
      'Versatile language support',
      'Strong safety features'
    ],
    limitations: [
      'Requires integration setup',
      'No standalone IDE',
      'API rate limits'
    ],
    techStack: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust'],
    useCase: 'Code assistance, debugging, documentation, code review',
    targetAudience: 'Developers, technical writers, code reviewers',
    rating: 4.6,
    userCount: '500K+',
    website: 'https://claude.ai',
    documentation: 'https://docs.anthropic.com',
    tutorials: [
      'Getting Started with Claude',
      'Advanced Coding Techniques',
      'Integration and Workflows'
    ],
    integrations: ['VS Code', 'GitHub', 'GitLab', 'API', 'Slack'],
    learningPath: '/academy/platform/claude-code'
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    tagline: 'Google AI integration for command-line development',
    description: 'Command-line tool that integrates Google Gemini AI into your development workflow, providing AI assistance directly in your terminal for coding, debugging, and project management.',
    logo: '💎',
    category: 'AI CLI Tool',
    pricing: {
      free: true,
      pro: '$10/month',
      enterprise: 'Custom'
    },
    features: [
      'Command-line AI integration',
      'Terminal-based code generation',
      'Project scaffolding',
      'Automated testing',
      'Documentation generation',
      'Code analysis and metrics',
      'Git workflow automation',
      'Package management assistance'
    ],
    strengths: [
      'Integrates with existing workflow',
      'Lightweight and fast',
      'Good for automation',
      'Cost-effective',
      'Command-line efficiency'
    ],
    limitations: [
      'Command-line only interface',
      'Requires terminal knowledge',
      'Limited visual capabilities'
    ],
    techStack: ['CLI', 'Python', 'Node.js', 'Shell Scripts', 'Git', 'Docker'],
    useCase: 'Automation, CLI workflows, DevOps, project management',
    targetAudience: 'CLI users, DevOps engineers, automation specialists',
    rating: 4.3,
    userCount: '75K+',
    website: 'https://ai.google.dev',
    documentation: 'https://docs.google.dev/gemini',
    tutorials: [
      'CLI Setup and Configuration',
      'Workflow Automation',
      'Advanced CLI Features'
    ],
    integrations: ['Git', 'Docker', 'npm', 'pip', 'GitHub Actions'],
    learningPath: '/academy/platform/gemini-cli'
  },
  {
    id: 'base44',
    name: 'Base44',
    tagline: 'All-in-one development and deployment platform',
    description: 'Comprehensive platform that combines development tools, hosting, database management, and deployment in a single integrated environment for rapid application development.',
    logo: '🏗️',
    category: 'All-in-One Platform',
    pricing: {
      free: true,
      starter: '$25/month',
      pro: '$75/month',
      enterprise: 'Custom'
    },
    features: [
      'Integrated development environment',
      'Built-in hosting and deployment',
      'Database management tools',
      'API development and testing',
      'User authentication system',
      'File storage and CDN',
      'Analytics and monitoring',
      'Team collaboration features'
    ],
    strengths: [
      'All-in-one solution',
      'Rapid deployment',
      'Integrated backend services',
      'Good for full-stack apps',
      'Simplified workflow'
    ],
    limitations: [
      'Vendor lock-in',
      'Limited customization',
      'Smaller community'
    ],
    techStack: ['Full-Stack', 'Database', 'API', 'Hosting', 'CDN', 'Auth'],
    useCase: 'Full-stack applications, rapid prototyping, small to medium apps',
    targetAudience: 'Full-stack developers, startups, small teams',
    rating: 4.2,
    userCount: '25K+',
    website: 'https://base44.com',
    documentation: 'https://docs.base44.com',
    tutorials: [
      'Platform Overview',
      'Full-Stack Development',
      'Deployment and Scaling'
    ],
    integrations: ['GitHub', 'Stripe', 'Auth0', 'AWS S3', 'CloudFlare'],
    learningPath: '/academy/platform/base44'
  },
  {
    id: 'v0',
    name: 'V0',
    tagline: 'AI-powered UI component generation by Vercel',
    description: 'Innovative platform by Vercel that generates React components and UI elements from natural language descriptions, perfect for rapid UI development and prototyping.',
    logo: '🎨',
    category: 'UI Generation Platform',
    pricing: {
      free: true,
      pro: '$20/month',
      enterprise: 'Custom'
    },
    features: [
      'Natural language to UI components',
      'React component generation',
      'Tailwind CSS styling',
      'Interactive preview',
      'Component export and sharing',
      'Design system integration',
      'Responsive design generation',
      'Accessibility compliance'
    ],
    strengths: [
      'Excellent UI generation quality',
      'Vercel ecosystem integration',
      'Modern React components',
      'Good accessibility features',
      'Active development'
    ],
    limitations: [
      'UI-focused only',
      'Limited to React',
      'Requires design knowledge'
    ],
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js', 'Shadcn/ui'],
    useCase: 'UI development, prototyping, design systems, frontend development',
    targetAudience: 'Frontend developers, UI/UX designers, product teams',
    rating: 4.5,
    userCount: '150K+',
    website: 'https://v0.dev',
    documentation: 'https://v0.dev/docs',
    tutorials: [
      'Getting Started with V0',
      'Component Generation Techniques',
      'Design System Integration'
    ],
    integrations: ['Vercel', 'Next.js', 'React', 'Tailwind CSS', 'GitHub'],
    learningPath: '/academy/platform/v0'
  },
  {
    id: 'rork',
    name: 'Rork',
    tagline: 'AI-powered mobile app development platform',
    description: 'Specialized platform for creating native mobile applications using AI assistance, with focus on React Native development and cross-platform mobile app creation.',
    logo: '📱',
    category: 'Mobile Development Platform',
    pricing: {
      free: false,
      starter: '$30/month',
      pro: '$80/month',
      enterprise: 'Custom'
    },
    features: [
      'Native mobile app generation',
      'React Native development',
      'Cross-platform deployment',
      'App store optimization',
      'Push notification system',
      'Offline functionality',
      'Performance optimization',
      'Mobile UI/UX patterns'
    ],
    strengths: [
      'Mobile-first approach',
      'Native performance',
      'Cross-platform development',
      'App store ready',
      'Mobile best practices'
    ],
    limitations: [
      'Mobile-only focus',
      'Higher cost',
      'Limited web capabilities'
    ],
    techStack: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Native APIs'],
    useCase: 'Mobile app development, cross-platform apps, native mobile features',
    targetAudience: 'Mobile developers, app entrepreneurs, businesses needing mobile apps',
    rating: 4.4,
    userCount: '30K+',
    website: 'https://rork.dev',
    documentation: 'https://docs.rork.dev',
    tutorials: [
      'Mobile Development Fundamentals',
      'React Native with AI',
      'App Store Deployment'
    ],
    integrations: ['Expo', 'App Store', 'Google Play', 'Firebase', 'Native APIs'],
    learningPath: '/academy/platform/rork'
  }
];

export const getplatformByDd = (id: string): Platform | undefined => {
  return platforms.find(platform => platform.id === id);
};

export const getPlatformsByCategory = (category: string): Platform[] => {
  return platforms.filter(platform => platform.category === category);
};

export const getPopularPlatforms = (): Platform[] => {
  return platforms.sort((a, b) => b.rating - a.rating).slice(0, 6);
};