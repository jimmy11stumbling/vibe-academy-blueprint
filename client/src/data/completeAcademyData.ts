import { academyModules, learningPaths } from './academyData';
import { platformTutorials } from './platformTutorials';

// Complete academy modules including all platforms
export const completeAcademyModules = {
  ...academyModules,
  ...platformTutorials
};

// Learning Paths that combine multiple modules
export const learningPaths = [
  {
    id: 'fullstack-fundamentals',
    title: 'Full-Stack Fundamentals',
    description: 'Master the essential skills for building complete applications',
    modules: ['app-planning', 'blueprint-creation', 'prompt-engineering'],
    duration: '9.5 hours',
    difficulty: 'Beginner',
    price: 'FREE'
  },
  {
    id: 'platform-mastery',
    title: 'Platform Mastery Track',
    description: 'Deep dive into specific no-code platforms',
    modules: Object.keys(completeAcademyModules).slice(0, 5),
    duration: '40+ hours',
    difficulty: 'Intermediate',
    price: '$99'
  },
  {
    id: 'advanced-development',
    title: 'Advanced Development',
    description: 'Master complex integrations and enterprise solutions',
    modules: Object.keys(completeAcademyModules).slice(5),
    duration: '35+ hours', 
    difficulty: 'Advanced',
    price: '$149'
  }
];

export { completeAcademyModules };