import inquirer from "inquirer";

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
    console.log(answer.routing);
  });