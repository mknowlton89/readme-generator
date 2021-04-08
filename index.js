const inquirer = require('inquirer');
const fs = require('fs');

let readMeTemplate = (`
# ${project.title}

## Description

${project.description}

## Table of Contents

${project.contents}

## Installation

${project.installation}

## Usage

${project.usage}

## License

${project.license}

## Contributing

${project.contributing}

## Tests

${project.tests}

# Questions

${project.questions}


`)

// Prompt users for name, location, bio, LinkedIN URL, GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'What is your location?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell me about yourself?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        },
    ])
    .then((project) => {
        const filename = "README.md";

        console.log(project);

       