import inquirer from 'inquirer';
import { createProvider } from './commands/createProvider.js';
import { fullBaseRouting } from './commands/fullBaseRouting.js';

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to generate?',
      name: 'routing',
      choices: ['Full base routing', 'Router provider'],
    }
  ])
  .then((answer) => {
    switch (answer.routing) {
      case 'Full base routing':
        inquirer.prompt([ { type: 'input', message: 'Folder name with routing', default: 'react-fullbase-routing', name: 'folderName' } ])
          .then((answer) => {
            fullBaseRouting(answer.folderName);
          });
        break;
      case 'Router provider':
        inquirer.prompt([ { type: 'input', message: 'Specify the folder in which to place the provider', default: 'providers', name: 'folderName' } ])
          .then((answer) => {
            createProvider(answer.folderName);
          })
      default:
        break;
    }
  });