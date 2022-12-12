import fs from 'fs';
import generateRouting from '../generateFilesContent/generateRouting.js';
import { getCurrentPath } from '../getCurrentPath.js';

export const createRouting = (folderName) => {
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/routing.tsx`), generateRouting(), (err) => {
    if (err) throw err;
  });
};