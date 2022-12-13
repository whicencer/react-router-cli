import fs from 'fs';
import generateRoutes from '../utils/generateFilesContent/generateRoutes.js';
import generateRouting from '../utils/generateFilesContent/generateRouting.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';
import { fullBaseRouting } from './fullBaseRouting.js';
import { createRoutesLib } from '../utils/createFiles/createRoutesLib.js';

export const privateRouting = (folderName) => {
  fullBaseRouting(folderName);

  // add privateRoutes to ./routes.ts
  fs.readFile(getCurrentPath(`/src/${folderName}/routes.ts`), 'utf-8', (err) => {
    if (err) throw err;

    fs.writeFile(getCurrentPath(`/src/${folderName}/routes.ts`), generateRoutes(true), (err) => {
      if (err) throw err;
    });
  });

  // Create ./lib
  fs.mkdir(getCurrentPath(`/src/${folderName}/lib`), (err) => {
    if (err) throw err;
  });
  createRoutesLib(folderName);

  // Routing component
  fs.readFile(getCurrentPath(`/src/${folderName}/routing.tsx`), 'utf-8', (err) => {
    if (err) throw err;

    fs.writeFile(getCurrentPath(`/src/${folderName}/routing.tsx`), generateRouting(true), err => {
      if (err) throw err;
    })
  });
};