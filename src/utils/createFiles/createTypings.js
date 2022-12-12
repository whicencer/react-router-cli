import fs from 'fs';
import generateRoutesTyping from '../generateFilesContent/generateRoutesTyping.js';
import { getCurrentPath } from '../getCurrentPath.js';

export const createTypings = (folderName) => {
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/router-typings.ts`), generateRoutesTyping(), (err) => {
    if (err) throw err;
  }); 
};