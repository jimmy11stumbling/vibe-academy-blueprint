
import { academyModules, learningPaths } from './academyData';
import { platformTutorials } from './platformTutorials';

// Complete academy modules including all platforms
export const completeAcademyModules = {
  ...academyModules,
  ...platformTutorials
};

// Export learning paths from academyData
export { learningPaths };
