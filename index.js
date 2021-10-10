// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use the product. (Required)',
        validate: usage => {
        if (usage) {
          return true;
        } else {
          console.log('Please enter your usage instructions!');
          return false;
        }
      }
    }
];

const promptUser = () => {
    return inquirer
        .prompt(questions)
        .catch((error) => {
            console.log('Something went wrong, please try again.');
        });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => {
            return generateMarkdown(answers)
        })
        .then(() => {
          
        });
}

// Function call to initialize app
init();
