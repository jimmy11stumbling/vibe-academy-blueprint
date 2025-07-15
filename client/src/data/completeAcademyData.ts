
import { academyModules } from './academyData';
import { platformTutorials } from './platformTutorials';

// Complete academy modules including all platforms
export const completeAcademyModules = {
  ...academyModules,
  ...platformTutorials
};
