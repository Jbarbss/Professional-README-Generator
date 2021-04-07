// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your full name?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?'
},
{
    type: 'input',
    name: 'githubUrl',
    message: 'What is your github URL?'
},
{
    type: 'input',
    name: 'githubRepo',
    message: 'What is your github repository URL?'
},
{
    type: 'input',
    name: 'githubPages',
    message: 'What is your github live pages URL?'
},
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
}, 
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project.'
},
{
    type: 'input',
    name: 'reason',
    message: 'Why did you build this project?'
},
{
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?'
},
{
    type: 'input',
    name: 'learn',
    message: 'What did you learn?'
},

{
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
{
    type: 'input',
    name: 'examples',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
},
{
    type: 'input',
    name: 'contributions',
    message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
},
{
    type: 'input',
    name: 'contributors',
    message: 'List your collaborators, if any, with links to their GitHub profiles.'
},
{
    type:"list",
    name:"license",
    message:'Which open source license would you like to use? ',
    choices:["MIT", "Apache License 2.0", "ISC", "None" ]
},

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('New README file had been successfully created ')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const readMeContent = generateMarkdown(answers);
        writeToFile('README.md', readMeContent);
    })
}

// Function call to initialize app
init();
