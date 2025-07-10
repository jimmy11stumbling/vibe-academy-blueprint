
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  
  const { user, signOut, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Platforms', href: '/platforms', isHash: false },
    { name: 'Analysis', href: '/analysis', isHash: false },
    { name: 'Demo', href: '/demo', isHash: false },
    { name: 'Resources', href: '/resources', isHash: false },
    { name: 'Courses', href: '/courses', isHash: false },
    { name: 'Pricing', href: '/pricing', isHash: false },
  ];

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const handleAuthModeChange = (mode: 'login' | 'signup') => {
    setAuthModal(prev => ({ ...prev, mode }));
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleNavClick = (href: string, isHash: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (isHash) {
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

  if (loading) {
    return (
      <nav className="fixed top-0 w-full z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Vibe Coders</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Vibe Coders</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                link.isHash ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isHash)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <div className="hidden md:flex items-center space-x-2">
                {user ? (
                  <>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={() => openAuthModal('login')}>
                      Login
                    </Button>
                    <Button 
                      className="hero-gradient text-white hover:opacity-90"
                      onClick={() => openAuthModal('signup')}
                    >
                      Start Learning
                    </Button>
                  </>
                )}
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
                {navLinks.map((link) => (
                  link.isHash ? (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href, link.isHash)}
                      className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 bg-transparent border-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="pt-4 pb-2 border-t border-border/50 space-y-2">
                  {user ? (
                    <Button variant="ghost" className="w-full" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="ghost" 
                        className="w-full" 
                        onClick={() => openAuthModal('login')}
                      >
                        Login
                      </Button>
                      <Button 
                        className="w-full hero-gradient text-white hover:opacity-90"
                        onClick={() => openAuthModal('signup')}
                      >
                        Start Learning
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onModeChange={handleAuthModeChange}
      />
    </>
  );
};

export default Navigation;
