
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('system');

  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getEffectiveTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return getSystemTheme();
    }
    return currentTheme;
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme = savedTheme || 'system';
    
    setThemeState(initialTheme);
    updateDocumentClass(getEffectiveTheme(initialTheme));

    // Listen for system theme changes when theme is set to 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateDocumentClass(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const updateDocumentClass = (effectiveTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    updateDocumentClass(getEffectiveTheme(newTheme));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
