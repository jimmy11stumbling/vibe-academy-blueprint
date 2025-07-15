import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Home from '@/pages/Home';
import Platforms from '@/pages/Platforms';
import PlatformDetail from '@/pages/PlatformDetail';
import Courses from '@/pages/Courses';
import CourseDetail from '@/pages/CourseDetail';
import Academy from '@/pages/Academy';
import ModuleDetail from '@/pages/ModuleDetail';
import Resources from '@/pages/Resources';
import Analysis from '@/pages/Analysis';
import Demo from '@/pages/Demo';
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';
import Projects from '@/pages/Projects';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/NotFound';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UserProfile from '@/components/UserProfile';
import SearchComponent from '@/components/SearchComponent';

function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <ScrollToTopWrapper />
            <div className="min-h-screen bg-background text-foreground">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/platforms" element={<Platforms />} />
                  <Route path="/platforms/:platformId" element={<PlatformDetail />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course/:courseId" element={<CourseDetail />} />
                  <Route path="/academy" element={<Academy />} />
                  <Route path="/academy/course/:moduleId" element={<ModuleDetail />} />
                  <Route path="/academy/module/:moduleId" element={<ModuleDetail />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/analysis" element={<Analysis />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/search" element={<SearchComponent />} />
                </Routes>
              </main>
              <Footer />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'hsl(var(--background))',
                    color: 'hsl(var(--foreground))',
                    border: '1px solid hsl(var(--border))',
                  },
                }}
              />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;