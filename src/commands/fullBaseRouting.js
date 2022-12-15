import fs from 'fs';
import { createProvider } from '../utils/createFiles/createProvider.js';
import { createRoutes } from '../utils/createFiles/createRoutes.js';
import { createTypings } from '../utils/createFiles/createTypings.js';
import { createRouting } from '../utils/createFiles/createRouting.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';

export const fullBaseRouting = (folderName) => {
  createProvider(folderName);
  createTypings(folderName);
  createRoutes(folderName);
  createRouting(folderName);


  fs.readFile(getCurrentPath('/src/App.jsx'), 'utf8', (err, contents) => {
    if (err) {
      console.log(err);
      return;
    }

    const RouterProvide = contents.replace(/export default App/gi, 'export default routerProvider(App)');

    fs.writeFile(getCurrentPath('/src/App.tsx'), `import Routing from './${folderName}/routing';\nimport { routerProvider } from './${folderName}/router-provider';\n\n`+RouterProvide, 'utf8', err => {
      if (err) throw err;
    });
  });

  console.log('Nice, base routing was successfully generated!');
};