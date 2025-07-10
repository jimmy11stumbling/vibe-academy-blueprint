
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Code,
  Heart,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Platform: [
      { name: 'All Platforms', href: '/platforms' },
      { name: 'Platform Analysis', href: '/analysis' },
      { name: 'Interactive Demo', href: '/demo' },
      { name: 'Comparison Tool', href: '/platforms' }
    ],
    Resources: [
      { name: 'Learning Hub', href: '/resources' },
      { name: 'Documentation', href: '/resources' },
      { name: 'Code Examples', href: '/resources' },
      { name: 'Best Practices', href: '/resources' }
    ],
    Community: [
      { name: 'Discord Server', href: '#' },
      { name: 'GitHub Repository', href: '#' },
      { name: 'Twitter Updates', href: '#' },
      { name: 'LinkedIn Network', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@nocode-analysis.com' }
  ];

  return (
    <footer className="bg-muted/20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">NoCode Analysis</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Comprehensive analysis and insights into the leading AI development 
                platforms shaping the future of software creation.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.name}
                        {link.href.startsWith('#') && (
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Stay in the loop</h3>
              <p className="text-sm text-muted-foreground">
                Get weekly updates on platform developments and industry insights.
              </p>
            </div>
            <Button asChild>
              <Link to="/#newsletter">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© 2025 NoCode Analysis. Made with</span>
              <Heart className="h-3 w-3 fill-red-500 text-red-500" />
              <span>for developers everywhere.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
