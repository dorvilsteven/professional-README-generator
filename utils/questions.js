// TODO: Create an array of questions for user input
module.exports = [
    {
        type: 'input', 
        name: 'username',
        message: 'What is your github username?',
        validate: (username) => {
            if (username) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }   
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email?',
        validate: (email) => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }   
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title? (Required)',
        validate: (projectTitle) => {
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
        validate: (description) => {
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
        name: 'link',
        message: 'Please provide a link to your application. (Required)',
        validate: (link) => {
            if (link) {
                return true;
            } else {
                console.log('Please provide a link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Tell us how to install. (Required)',
        validate: (installation) => {
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
        validate: (usage) => {
            if (usage) {
                return true;
            } else {
                console.log('Please enter your usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['Apache 2.0', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause']
    }
];