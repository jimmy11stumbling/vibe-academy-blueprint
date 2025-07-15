
export interface PlatformData {
  overview: string;
  keyFeatures: string[];
  strengths: string[];
  limitations: string[];
  pricing: Record<string, string>;
  marketPosition: string;
}

export const platformData: Record<string, PlatformData> = {
  'Lovable 2.0': {
    overview: 'European AI startup revolutionizing full-stack development through chat-driven interfaces',
    keyFeatures: [
      'Chat-driven full-stack development',
      'Native Supabase integration',
      'Visual editing capabilities',
      'Multiplayer workspaces',
      'One-click deployment',
      'Security scanning',
      'Figma integration'
    ],
    strengths: [
      'Fastest time-to-market for MVPs',
      'No coding experience required',
      'Powerful backend integration',
      'Growing European ecosystem'
    ],
    limitations: [
      'Pricing can be expensive for large projects',
      'Recent stability issues with 2.0 launch',
      'Limited to web applications'
    ],
    pricing: {
      free: 'Limited daily credits',
      pro: '$25/month',
      teams: '$30/user/month',
      enterprise: 'Custom pricing'
    },
    marketPosition: 'Leading no-code platform for rapid full-stack development'
  },
  'Cursor': {
    overview: 'AI-first IDE built on VS Code, trusted by developers at major tech companies',
    keyFeatures: [
      'Codebase-aware AI chat',
      'Predictive editing',
      'Agent mode for complex tasks',
      'VS Code compatibility',
      'Enterprise security',
      'Privacy mode'
    ],
    strengths: [
      'Familiar VS Code interface',
      'Powerful AI integration',
      'Professional developer focus',
      'Strong funding and backing'
    ],
    limitations: [
      'Learning curve for AI features',
      'Can be overwhelming for beginners',
      'Subscription required for full features'
    ],
    pricing: {
      pro: '$20/month',
      enterprise: 'Custom pricing',
      api: 'Bring your own key option'
    },
    marketPosition: 'Leading AI-first IDE for professional developers'
  },
  'Replit': {
    overview: 'Collaborative browser-based IDE with 40M+ users and zero-setup development',
    keyFeatures: [
      'Real-time collaboration',
      'Zero-setup environment',
      'Built-in database (ReplDB)',
      'Authentication system',
      'AI agent assistance',
      'Mobile development'
    ],
    strengths: [
      'Massive community',
      'Perfect for education',
      'True collaborative coding',
      'Multi-language support'
    ],
    limitations: [
      'Performance can be slower than local development',
      'Limited offline capabilities',
      'Pricing for teams can add up'
    ],
    pricing: {
      starter: 'Free tier available',
      core: '$20/month',
      teams: '$35/user/month'
    },
    marketPosition: 'Dominant collaborative coding platform with educational focus'
  },
  'Windsurf': {
    overview: 'Enterprise-grade agentic code editor with FedRAMP certification and Cascade AI',
    keyFeatures: [
      'Cascade AI agent',
      'Multi-model support',
      'FedRAMP certification',
      'SOC 2 compliance',
      'On-premise deployment',
      'MCP support'
    ],
    strengths: [
      'Enterprise security focus',
      'Powerful agentic capabilities',
      'Government compliance',
      'Multi-model flexibility'
    ],
    limitations: [
      'Higher learning curve',
      'More expensive than alternatives',
      'Overkill for simple projects'
    ],
    pricing: {
      free: '25 credits/month',
      pro: '$15/month',
      teams: '$30/month',
      enterprise: '$60+/user/month'
    },
    marketPosition: 'Premium enterprise AI coding solution'
  },
  'Bolt': {
    overview: 'Revolutionary in-browser full-stack development using WebContainer technology',
    keyFeatures: [
      'WebContainer technology',
      'Full-stack browser development',
      'Real-time code execution',
      'Open source core',
      'GitHub integration',
      'Code export capabilities'
    ],
    strengths: [
      'Unique WebContainer technology',
      'True full-stack in browser',
      'Open source foundation',
      'No local setup required'
    ],
    limitations: [
      'Limited to JavaScript ecosystem',
      'Token-based pricing can be unpredictable',
      'Browser performance constraints'
    ],
    pricing: {
      free: '150K tokens/day',
      pro: '$20/month',
      teams: '$30/member/month'
    },
    marketPosition: 'Innovative browser-based full-stack development platform'
  },
  'Claude Code': {
    overview: 'Security-first CLI agent from Anthropic for terminal-based AI development',
    keyFeatures: [
      'Terminal-native interface',
      'Granular security permissions',
      'CLAUDE.md context files',
      'Advanced reasoning capabilities',
      'Code analysis and review',
      'Security-focused development'
    ],
    strengths: [
      'Excellent security model',
      'Advanced reasoning capabilities',
      'Terminal-native workflow',
      'Enterprise-grade features'
    ],
    limitations: [
      'CLI-only interface',
      'Steep learning curve',
      'Limited visual development'
    ],
    pricing: {
      free: 'Limited usage',
      pro: '$20/month',
      teams: '$30/member/month',
      enterprise: 'Custom pricing'
    },
    marketPosition: 'Security-first enterprise CLI development tool'
  },
  'Base44': {
    overview: 'All-in-one business application platform with integrated hosting and collaboration',
    keyFeatures: [
      'Business application builder',
      'Integrated hosting platform',
      'Team collaboration tools',
      'Custom workflow automation',
      'Enterprise SSO integration',
      'Advanced reporting and analytics'
    ],
    strengths: [
      'Complete business solution',
      'Strong collaboration features',
      'Enterprise-ready security',
      'Integrated hosting'
    ],
    limitations: [
      'Higher cost for small teams',
      'Learning curve for advanced features',
      'Limited customization'
    ],
    pricing: {
      free: 'Basic plan available',
      pro: '$25/user/month',
      business: '$50/user/month',
      enterprise: 'Custom pricing'
    },
    marketPosition: 'Enterprise business application platform'
  }
      'Multi-file refactoring',
      'Custom slash commands',
      'Enterprise security'
    ],
    strengths: [
      'Maximum security and control',
      'Developer-native terminal interface',
      'Powerful context management',
      'Anthropic\'s best-in-class models'
    ],
    limitations: [
      'High token consumption costs',
      'Steep learning curve',
      'Command-line only interface'
    ],
    pricing: {
      pro: '$17/month',
      max: '$100/month',
      api: 'Pay-per-token available'
    },
    marketPosition: 'Premium CLI-first AI development tool for power users'
  },
  'Gemini CLI': {
    overview: 'Open-source terminal AI agent from Google with massive context windows',
    keyFeatures: [
      'Open source foundation',
      '1M token context window',
      'Built-in web search',
      'MCP protocol support',
      'Multi-platform support',
      'Generous free tier'
    ],
    strengths: [
      'Completely open source',
      'Massive free usage limits',
      'Large context windows',
      'Google\'s latest AI models'
    ],
    limitations: [
      'Early alpha stability issues',
      'Model downgrades on free tier',
      'Limited advanced features'
    ],
    pricing: {
      free: 'Generous limits with Google account',
      paid: 'Usage-based API billing',
      enterprise: 'Google Cloud integration'
    },
    marketPosition: 'Open-source challenger with aggressive free tier strategy'
  },
  'Base44': {
    overview: 'Wix-acquired no-code platform with "Buttery Includes" all-in-one philosophy',
    keyFeatures: [
      'All-in-one backend included',
      'Built-in authentication',
      'Integrated database',
      'Enterprise SSO',
      'Multiple AI model support',
      'Instant deployment'
    ],
    strengths: [
      'True all-in-one solution',
      'No external service dependencies',
      'Wix ecosystem integration',
      'Enterprise-ready features'
    ],
    limitations: [
      'Less flexibility than modular approaches',
      'Newer platform with smaller community',
      'Limited customization options'
    ],
    pricing: {
      free: '25 messages/month',
      starter: '$20/month',
      builder: '$50/month',
      pro: '$100/month'
    },
    marketPosition: 'Comprehensive no-code solution backed by Wix\'s resources'
  },
  'V0': {
    overview: 'Vercel-native UI component generator optimized for React and Next.js',
    keyFeatures: [
      'React component generation',
      'Tailwind CSS optimization',
      'Image-to-code conversion',
      'Vercel deployment integration',
      'Iterative refinement',
      'Framework flexibility'
    ],
    strengths: [
      'Specialized UI generation',
      'Perfect Vercel integration',
      'High-quality React components',
      'Designer-developer bridge'
    ],
    limitations: [
      'UI-focused, not full-stack',
      'Best with Vercel ecosystem',
      'Limited to frontend development'
    ],
    pricing: {
      free: '200 credits',
      basic: '$10/month',
      standard: '$30/month',
      premium: '$50/month'
    },
    marketPosition: 'Leading UI component generator for React ecosystem'
  },
  'Rork': {
    overview: 'Mobile-first AI platform generating native iOS and Android apps with React Native',
    keyFeatures: [
      'React Native generation',
      'Cross-platform deployment',
      'Native UI components',
      'App store publishing',
      'Backend integration',
      'Real device testing'
    ],
    strengths: [
      'Mobile-specific focus',
      'True native app generation',
      'Cross-platform efficiency',
      'App store deployment'
    ],
    limitations: [
      'Stability and reliability issues',
      'Limited customer support',
      'High per-message pricing',
      'Mobile development complexity'
    ],
    pricing: {
      starter: '$20/month (100 messages)',
      pro: '$200/month (1000 messages)',
      enterprise: 'Custom pricing'
    },
    marketPosition: 'Specialized mobile app generator with execution challenges'
  }
};
