// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Which license would you like to use for your application?(Use down and up arrows to choose)',
        name: 'license',
        choices: ['GNU-APGPLv3', 'GNU-GPLv3', 'GNU-LGPLv3', 'Mozilla-Public-License-2.0', 'Apache-License-2.0', 'MIT-License'],
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err)throw err
        console.log('file Written');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        const markDown = generateMarkDown(answers)
        console.log(markDown);
        writeToFile('README.md', markDown)
    }).catch(function(err){
        console.log(err);
    })
}

// Function call to initialize app
init();
