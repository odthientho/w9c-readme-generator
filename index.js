// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, 
    {   
        type: 'input',
        name: 'title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicensed'],
        message: 'What kind of license should your project have?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileREADME = fileName.split('/')[2];
    const pathToREADME = fileName.replace(fileREADME,"");

    fs.mkdir(pathToREADME, { recursive: true }, (err) => { if (err) throw err; });
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
        .then((answers) => {
            let data = generateMarkdown(answers);
            writeToFile("./outputs/README.md", data);
        })
        .catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();
