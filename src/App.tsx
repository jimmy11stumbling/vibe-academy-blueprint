
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import CourseDetail from '@/pages/CourseDetail';
import Projects from '@/pages/Projects';
import Pricing from '@/pages/Pricing';
import Platforms from '@/pages/Platforms';
import Analysis from '@/pages/Analysis';
import Demo from '@/pages/Demo';
import Resources from '@/pages/Resources';
import UserProfile from '@/components/UserProfile';
import SearchComponent from '@/components/SearchComponent';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetail />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/platforms" element={<Platforms />} />
                  <Route path="/analysis" element={<Analysis />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/resources" element={<Resources />} />
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
