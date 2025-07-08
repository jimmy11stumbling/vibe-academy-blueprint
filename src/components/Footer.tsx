
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: 'No-Code Fundamentals', href: '/courses/fundamentals' },
      { name: 'Bubble Development', href: '/courses/bubble' },
      { name: 'Webflow Mastery', href: '/courses/webflow' },
      { name: 'Automation with Zapier', href: '/courses/zapier' },
      { name: 'Database Design', href: '/courses/database' }
    ],
    resources: [
      { name: 'Community', href: '/#community' },
      { name: 'Projects Gallery', href: '/projects' },
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Templates', href: '/templates' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partnership', href: '/partnership' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refund' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/vibecoders' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/vibecoders' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/vibecoders' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/vibecoders' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/vibecoders' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    console.log('Newsletter subscription:', email);
    // Newsletter subscription logic would go here
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the latest no-code tips, course updates, and exclusive content delivered to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit" className="hero-gradient text-white hover:opacity-90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold">Vibe Coders</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Empowering creators to build amazing applications without code. 
                Join thousands of students learning the future of software development.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@vibecoders.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Vibe Coders. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
