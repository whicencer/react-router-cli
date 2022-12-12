import fs from 'fs';
import { createProvider } from '../utils/createFiles/createProvider.js';
import { createRoutes } from '../utils/createFiles/createRoutes.js';
import { createTypings } from '../utils/createFiles/createTypings.js';
import { createRouting } from '../utils/createFiles/createRouting.js';
import { getCurrentPath } from '../utils/getCurrentPath.js';

export const fullBaseRouting = (folderName) => {
  fs.mkdirSync(getCurrentPath(`/src/${folderName}`), (err) => {
    if (err) throw err;
  });
  createProvider(folderName);
  createTypings(folderName);
  createRoutes(folderName);
  createRouting(folderName);


  fs.readFile(getCurrentPath('/src/App.jsx'), 'utf8', (err, contents) => {
    if (err) {
      console.log(err);
      return;
    }

    const Routing = contents.replace(/<\w+>\n\D+\w+\n\D+<\/\w+>/giu, '<div>\n\t\t\t<Routing />\n\t\t</div>');
    const RouterProvide = Routing.replace(/export default App/gi, 'export default routerProvider(App)');

    fs.writeFile(getCurrentPath('/src/App.jsx'), `import Routing from './${folderName}/routing';\nimport { routerProvider } from './${folderName}/router-provider';\n`+RouterProvide, err => {
      if (err) {
        throw err;
      }
    });
  });

  console.log('Nice, base routing was successfully generated!');
};