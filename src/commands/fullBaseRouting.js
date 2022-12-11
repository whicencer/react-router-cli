import fs from 'fs';
import { createProvider } from './createProvider.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';

export const fullBaseRouting = (folderName) => {
  fs.mkdirSync(getCurrentPath(`/src/${folderName}`), (err) => {
    if (err) throw err;
  });
  createProvider(folderName);  
  console.log('Nice, base routing was successfully generated!');
};