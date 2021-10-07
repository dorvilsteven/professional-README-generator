// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title? (Required)',
        validate: projectTitle => {
        if (projectTitle) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project? (Required)',
        validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Please enter your description!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Tell us how to install. (Required)',
        validate: installation => {
        if (installation) {
          return true;
        } else {
          console.log('Please enter your installation process!');
          return false;
        }
      }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const promptUser = () => {
    return inquirer
        .prompt(questions)
        .catch((error) => {
            console.log('Please try again.');
        });
}
// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(function(answers) {
            
        });
}

// Function call to initialize app
init();
