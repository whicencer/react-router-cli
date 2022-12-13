#!/usr/bin/env node

import fs from 'fs';
import inquirer from 'inquirer';
import { fullBaseRouting } from './commands/fullBaseRouting.js';
import { privateRouting } from './commands/privateRouting.js';
import { getCurrentPath } from './utils/getCurrentPath.js';

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to generate?',
      name: 'routing',
      choices: ['Base routing', 'Public/Private routing'],
    }
  ])
  .then((answer) => {
    switch (answer.routing) {
      case 'Base routing':
        inquirer.prompt([ { type: 'input', message: 'Folder name with routing', default: 'routing', name: 'folderName' } ])
          .then((answer) => {
            fs.mkdirSync(getCurrentPath(`/src/${answer.folderName}`), (err) => {
              if (err) throw err;
            });
            fullBaseRouting(answer.folderName);
          });
        break;
      case 'Public/Private routing':
        inquirer.prompt([ { type: 'input', message: 'Folder name with routing', default: 'routing', name: 'folderName' } ])
          .then((answer) => {
            fs.mkdirSync(getCurrentPath(`/src/${answer.folderName}`), (err) => {
              if (err) throw err;
            });
            privateRouting(answer.folderName);
          });
      default:
        break;
    }
  });