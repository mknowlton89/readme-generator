const inquirer = require('inquirer');
const fs = require('fs');

const readMeTemplate = (project) =>
    `# ${project.name}

## Description

${project.description}

## Table of Contents

- Installation Instructions
- Product Usage
- Product Licensing
- How to Contribute
- How to Test
- Frequently Asked Questions (FAQ)

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


`;

// Prompt users for name, location, bio, LinkedIN URL, GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief discription of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can someone install this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would someone use this project?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license does someone need for this project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How would someone contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are available for this project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What are some common questions someone might have about this project??',
        },
    ])
    .then((project) => {
        const readMeContent = readMeTemplate(project);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README!')
        );

    });