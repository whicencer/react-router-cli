import fs from 'fs';
import generateRoutes from '../generateFilesContent/generateRoutes.js';
import { getCurrentPath } from '../getCurrentPath.js';

export const createRoutes = (folderName) => {
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/routes.ts`), generateRoutes(), (err) => {
    if (err) throw err;
  }); 
};