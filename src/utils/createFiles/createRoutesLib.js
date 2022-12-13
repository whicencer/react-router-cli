import fs from 'fs';
import generateRoutesLib from '../generateFilesContent/generateRoutesLib.js';
import { getCurrentPath } from '../getCurrentPath.js';

export const createRoutesLib = (folderName) => {
  // Private routes
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/lib/PrivateRoutes.tsx`), generateRoutesLib(true), (err) => {
    if (err) throw err;
  });

  // Public routes
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/lib/PublicRoutes.tsx`), generateRoutesLib(false), (err) => {
    if (err) throw err;
  });
};