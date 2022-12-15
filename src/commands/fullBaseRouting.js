import fs from 'fs';
import { createProvider } from '../utils/createFiles/createProvider.js';
import { createRoutes } from '../utils/createFiles/createRoutes.js';
import { createTypings } from '../utils/createFiles/createTypings.js';
import { createRouting } from '../utils/createFiles/createRouting.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';

export const fullBaseRouting = (folderName, pathApp) => {
  createProvider(folderName);
  createTypings(folderName);
  createRoutes(folderName);
  createRouting(folderName);

  const currentNesting = '.'.repeat(pathApp.split('/').length-2);

  fs.readFile(getCurrentPath(pathApp), 'utf8', (err, contents) => {
    if (err) {
      console.log(err);
      return;
    }
    const RouterProvide = contents.replace(/export default App/gi, 'export default routerProvider(App)');

    fs.writeFile(getCurrentPath(pathApp), `import Routing from '${currentNesting}/${folderName}/routing';\nimport { routerProvider } from '${currentNesting}/${folderName}/router-provider';\n\n`+RouterProvide, 'utf8', err => {
      if (err) throw err;
    });
  });

  console.log('Nice, base routing was successfully generated!');
};