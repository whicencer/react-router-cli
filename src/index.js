#!/usr/bin/env node

import inquirer from 'inquirer';
import { fullBaseRouting } from './commands/fullBaseRouting.js';

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to generate?',
      name: 'routing',
      choices: ['Base routing'],
    }
  ])
  .then((answer) => {
    switch (answer.routing) {
      case 'Base routing':
        inquirer.prompt([ { type: 'input', message: 'Folder name with routing', default: 'routing', name: 'folderName' } ])
          .then((answer) => {
            fullBaseRouting(answer.folderName);
          });
        break;
      default:
        break;
    }
  });