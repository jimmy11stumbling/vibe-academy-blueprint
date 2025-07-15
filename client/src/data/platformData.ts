export interface PlatformData {
  overview: string;
  keyFeatures: string[];
  strengths: string[];
  limitations: string[];
  pricing: Record<string, string>;
  marketPosition: string;
}

export const platformData = {
  'Lovable 2.0': {
    overview: 'European startup revolutionizing full-stack development through chat-driven interfaces. Build complete applications by describing what you want in natural language.',
    keyFeatures: [
      'Chat-driven full-stack development',
      'Native Supabase integration for backend',
      'Real-time visual editing and previews',
      'Multiplayer workspaces for team collaboration',
      'One-click deployment to production',
      'Built-in authentication and user management',
      'Figma to code conversion',
      'Security scanning and compliance'
    ],
    strengths: [
      'Zero coding required - purely conversational',
      'Complete full-stack capabilities in one platform',
      'Fast iteration and prototyping',
      'Strong European backing (Accel, 20VC)',
      'Excellent for non-technical founders',
      'Comprehensive backend integration'
    ],
    limitations: [
      'Limited customization for complex requirements',
      'Credit-based pricing can be expensive',
      'Relatively new platform with evolving features',
      'Learning curve for effective prompting'
    ],
    pricing: {
      'Free': '5 credits/day',
      'Pro': '$25/month',
      'Enterprise': 'Custom pricing'
    },
    marketPosition: 'Leading the charge in conversational full-stack development, positioning itself as the go-to platform for non-technical founders and rapid prototyping.'
  },
  'Cursor': {
    overview: 'AI-first IDE built on VS Code, designed for professional developers who want to maintain full control while leveraging AI assistance.',
    keyFeatures: [
      'Codebase-aware AI chat with full context',
      'Predictive editing with Tab-to-Accept',
      'Agent mode for complex multi-file tasks',
      'Complete VS Code compatibility',
      'Privacy mode for sensitive code',
      'Enterprise-grade security features',
      'Custom model support',
      'Advanced refactoring capabilities'
    ],
    strengths: [
      'Full-stack development with AI assistance',
      'Professional developer focused',
      'Maintains code quality and standards',
      'Excellent for complex enterprise projects',
      'Strong privacy and security features',
      'Seamless VS Code migration'
    ],
    limitations: [
      'Requires coding knowledge to be effective',
      'Learning curve for AI collaboration',
      'Subscription cost for full features',
      'Still need to understand underlying technologies'
    ],
    pricing: {
      'Free': 'Limited features',
      'Pro': '$20/month',
      'Enterprise': 'Custom pricing'
    },
    marketPosition: 'Dominant in the professional AI-assisted development space, backed by major investors and used by millions of developers worldwide.'
  },
  'Replit': {
    overview: 'The world\'s most popular collaborative coding platform with 40M+ users, offering zero-setup development environments.',
    keyFeatures: [
      'Real-time collaborative coding',
      'Zero setup development environment',
      'Built-in database (ReplDB)',
      'Instant deployment and hosting',
      'Mobile app for coding on the go',
      'AI Agent for code generation',
      'Support for 50+ programming languages',
      'Integrated version control'
    ],
    strengths: [
      'Complete full-stack development platform',
      'Massive community and ecosystem',
      'Perfect for learning and education',
      'Excellent collaboration features',
      'Mobile development capabilities',
      'Strong free tier'
    ],
    limitations: [
      'Performance limitations on free tier',
      'Limited customization options',
      'Dependency on internet connection',
      'Can be slow for large projects'
    ],
    pricing: {
      'Free': 'Basic features',
      'Core': '$20/month',
      'Teams': '$35/user/month'
    },
    marketPosition: 'Leading educational and collaborative coding platform, essential for learning and team development with unmatched community support.'
  },
  'Windsurf': {
    overview: 'Enterprise-grade agentic code editor with FedRAMP certification, designed for secure, scalable development environments.',
    keyFeatures: [
      'Powerful Cascade agent for complex tasks',
      'Multi-model AI support (OpenAI, Claude, Gemini)',
      'FedRAMP and SOC 2 compliance',
      'On-premise deployment options',
      'Advanced context understanding',
      'Enterprise security controls',
      'Custom workflow automation',
      'Integration with existing dev tools'
    ],
    strengths: [
      'Enterprise-grade security and compliance',
      'Powerful AI agent capabilities',
      'Supports complex full-stack projects',
      'Government and enterprise ready',
      'Multi-model AI flexibility',
      'Advanced automation features'
    ],
    limitations: [
      'Complex setup for enterprise features',
      'Higher cost for full capabilities',
      'Learning curve for advanced features',
      'Overkill for simple projects'
    ],
    pricing: {
      'Free': '25 credits/month',
      'Pro': '$15/month',
      'Teams': '$30/month'
    },
    marketPosition: 'Leading enterprise AI development solution with unique security certifications, perfect for government and large enterprise use cases.'
  },
  'Bolt': {
    overview: 'Revolutionary platform running full-stack development entirely in the browser using WebContainer technology.',
    keyFeatures: [
      'WebContainer technology for browser-based Node.js',
      'Full-stack development without local setup',
      'Real-time code execution and preview',
      'GitHub integration and export',
      'Open-source foundation',
      'Complete npm ecosystem support',
      'Instant deployment capabilities',
      'Collaborative development features'
    ],
    strengths: [
      'True full-stack development in browser',
      'Zero setup required',
      'Revolutionary WebContainer technology',
      'Strong open-source community',
      'Excellent for learning and prototyping',
      'Fast iteration cycles'
    ],
    limitations: [
      'Limited to web technologies',
      'Browser performance constraints',
      'Newer platform with evolving features',
      'Limited enterprise features'
    ],
    pricing: {
      'Free': '150K tokens/day',
      'Pro': '$20/month',
      'Teams': '$30/member/month'
    },
    marketPosition: 'Pioneering browser-based full-stack development, ideal for modern web applications and rapid prototyping.'
  },
  'Claude Code': {
    overview: 'Security-first CLI agent by Anthropic, designed for professional developers who prioritize security and control.',
    keyFeatures: [
      'Terminal-native development experience',
      'Security-first architecture',
      'Granular permission controls',
      'Project-specific context management',
      'Custom slash commands',
      'Enterprise security features',
      'Audit trails and monitoring',
      'MCP protocol support'
    ],
    strengths: [
      'Unmatched security and privacy',
      'Professional developer focused',
      'Excellent for complex full-stack projects',
      'Terminal-native workflow',
      'Fine-grained control over AI actions',
      'Enterprise-ready features'
    ],
    limitations: [
      'Command-line interface only',
      'Requires technical expertise',
      'Learning curve for setup',
      'Limited visual interface'
    ],
    pricing: {
      'Pro': '$17/month',
      'Max': '$100/month',
      'API': 'Usage-based'
    },
    marketPosition: 'Premier security-focused AI development tool, trusted by enterprises and security-conscious developers worldwide.'
  },
  'Gemini CLI': {
    overview: 'Google\'s open-source AI development tool with massive context windows and free tier, perfect for individual developers.',
    keyFeatures: [
      'Open-source with full transparency',
      'Massive 1M+ token context windows',
      'Built-in web search capabilities',
      'Generous free tier limits',
      'MCP protocol integration',
      'Real-time information access',
      'Cross-platform compatibility',
      'Google Cloud integration'
    ],
    strengths: [
      'Completely open-source',
      'Excellent free tier offering',
      'Massive context window capabilities',
      'Great for full-stack development',
      'Strong Google ecosystem integration',
      'Perfect for learning and experimentation'
    ],
    limitations: [
      'Limited enterprise features',
      'Newer platform with evolving capabilities',
      'Requires technical setup',
      'Limited visual interface'
    ],
    pricing: {
      'Free': 'Generous limits',
      'API': 'Usage-based pricing'
    },
    marketPosition: 'Leading open-source AI development solution, perfect for individual developers and those wanting transparency and control.'
  },
  'Base44': {
    overview: 'Comprehensive no-code platform acquired by Wix, following the "Buttery Includes" philosophy where everything is included.',
    keyFeatures: [
      'All-in-one development platform',
      'Built-in backend and database',
      'Native user authentication',
      'Enterprise SSO integration',
      'Multiple AI model support',
      'Instant deployment and hosting',
      'Business-focused templates',
      'Comprehensive admin tools'
    ],
    strengths: [
      'Complete full-stack solution',
      'Perfect for business applications',
      'No external dependencies needed',
      'Enterprise-ready features',
      'Strong Wix ecosystem integration',
      'Excellent for non-technical users'
    ],
    limitations: [
      'Limited customization options',
      'Vendor lock-in with Wix',
      'Can be expensive for advanced features',
      'Learning curve for complex features'
    ],
    pricing: {
      'Free': '25 messages/month',
      'Starter': '$20/month',
      'Pro': '$100/month'
    },
    marketPosition: 'Comprehensive business application platform, perfect for entrepreneurs and businesses needing complete solutions.'
  },
  'V0': {
    overview: 'Vercel\'s specialized UI component generator, designed for creating beautiful React components with Tailwind CSS.',
    keyFeatures: [
      'Specialized React component generation',
      'Tailwind CSS optimization',
      'Image-to-code conversion',
      'Figma design integration',
      'Responsive design generation',
      'Vercel deployment integration',
      'Component library creation',
      'Design system support'
    ],
    strengths: [
      'Excellent for UI/UX development',
      'Perfect React and Tailwind integration',
      'High-quality code generation',
      'Great for design systems',
      'Seamless Vercel deployment',
      'Professional design output'
    ],
    limitations: [
      'Limited to frontend development',
      'Requires backend integration separately',
      'Focused only on React ecosystem',
      'Limited customization options'
    ],
    pricing: {
      'Free': '200 credits',
      'Basic': '$10/month',
      'Premium': '$50/month'
    },
    marketPosition: 'Leading UI component generation platform, essential for modern React development and design systems.'
  },
  'Rork': {
    overview: 'Specialized mobile app development platform using React Native, perfect for creating cross-platform mobile applications.',
    keyFeatures: [
      'React Native app generation',
      'Cross-platform mobile development',
      'App store deployment assistance',
      'Backend integration support',
      'Native device feature access',
      'Real device testing',
      'Performance optimization',
      'Mobile-first design patterns'
    ],
    strengths: [
      'Specialized mobile development',
      'Cross-platform compatibility',
      'Native performance capabilities',
      'App store deployment support',
      'Perfect for mobile-first startups',
      'React Native expertise'
    ],
    limitations: [
      'Limited to mobile applications',
      'Requires mobile development knowledge',
      'Smaller community compared to others',
      'Limited web application support'
    ],
    pricing: {
      'Starter': '$20/month',
      'Pro': '$200/month'
    },
    marketPosition: 'Specialized mobile development platform, ideal for entrepreneurs and startups focusing on mobile-first applications.'
  }
}