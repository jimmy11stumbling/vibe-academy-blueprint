
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
  }
};
