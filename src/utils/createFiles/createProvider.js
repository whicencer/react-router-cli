import fs from 'fs';
import generateProvider from '../generateFilesContent/generateProvider.js';
import { getCurrentPath } from '../getCurrentPath.js';

export const createProvider = (folderName) => {
  fs.writeFileSync(getCurrentPath(`/src/${folderName}/router-provider.tsx`), generateProvider(), (err) => {
    if (err) throw err;
  });

  console.log('Provider was generated successfully!');
};