
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        // Already on home page, just scroll to section
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home page first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const footerLinks = {
    'Product': [
      { name: 'Courses', href: '/#courses', isHash: true },
      { name: 'Projects', href: '/projects', isHash: false },
      { name: 'Community', href: '/#community', isHash: true },
      { name: 'Pricing', href: '/pricing', isHash: false },
    ],
    'Company': [
      { name: 'About', href: '#', isHash: false },
      { name: 'Blog', href: '#', isHash: false },
      { name: 'Careers', href: '#', isHash: false },
      { name: 'Contact', href: '#', isHash: false },
    ],
    'Support': [
      { name: 'Help Center', href: '#', isHash: false },
      { name: 'Privacy Policy', href: '#', isHash: false },
      { name: 'Terms of Service', href: '#', isHash: false },
      { name: 'Cookie Policy', href: '#', isHash: false },
    ],
  };

  return (
    <footer className="border-t border-border/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Vibe Coders</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering the next generation of no-code builders with hands-on learning and community support.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.isHash ? (
                      <button
                        onClick={() => handleHashLink(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm bg-transparent border-none cursor-pointer p-0"
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              © 2024 Vibe Coders Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
