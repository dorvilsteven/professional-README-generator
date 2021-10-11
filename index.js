// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/generateReadme');
const questions = require('./utils/questions');

const promptUser = () => {
    return inquirer
        .prompt(questions)
        .catch((error) => {
            console.log('Something went wrong, please try again.');
        });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => {
          console.log(answers);
            return generateMarkdown(answers);
        })
        .then((data) => {
          writeFile(data);
        });
}

// Function call to initialize app
init();
