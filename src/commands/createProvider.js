import fs from 'fs';
import path from 'path';
import generateProvider from '../utils/generateProvider.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';

export const createProvider = (folderName = 'providers') => {
  if (folderName === 'providers') fs.mkdirSync(getCurrentPath(`/src/${folderName}`), err => console.log(err));
  fs.writeFile(getCurrentPath(`/src/${folderName}/router-provider.tsx`), generateProvider(), (err) => {
    if (err) throw err;
  });

  // Provide provider into App file
  fs.readFile(getCurrentPath('/src/App.jsx'), 'utf8', (err, contents) => {
    if (err) {
      console.log(err);
      return;
    }

    const wrappingProvider = contents.replace(/export default App;/gi, 'export default routerProvider(App);');

    fs.writeFile(getCurrentPath('/src/App.jsx'), `import { routerProvider } from './${folderName}'\n`+wrappingProvider, err => {
      if (err) {
        throw err;
      }
    });
  });

  console.log('Provider was generated successfully!');
};