const inquirer = require('inquirer');
const fs = require('fs');


const readMeTemplate = (project) =>

    `# ${project.name}

## <h2>Description</h2>

${project.description}

## <h2 id="">Table of Contents</h2>

- <a href="#installation">Installation Instructions</a>
- <a href="#usage">Product Usage</a>
- <a href="#license">Product Licensing</a>
- <a href="#contributing">How to Contribute</a>
- <a href="#tests">How to Test</a>
- <a href="#questions">Frequently Asked Questions (FAQ)</a>

## <h2 id="installation">Installation</h2>

${project.installation}

## <h2 id="usage">Usage</h2>

${project.usage}

## <h2 id="license">License</h2>

${project.badges}

## <h2 id="contributing">Contributing</h2>

${project.contributing}

## <h2 id="tests">Tests</h2>

${project.tests}

# <h2 id="questions">Questions? Reach out to me directly!</h2>

<a href="${project.github}">My GitHub</a>

<a href="mailto:${project.email}">Send me an email! (No spam, please)<a/>`;


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
            message: 'Give a brief description of your project?',
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
            type: 'checkbox',
            name: 'badges',
            message: 'What license does someone need for this project?',
            choices: ['APM', 'CPAN', 'GitHub', 'NPM'],
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
            name: 'github',
            message: 'What is your GitHub URL?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email (so people can contact you with questions, if needed?',
        },
    ])
    .then((project) => {

        const badges = project.badges;

        console.log(badges.length);


        const readMeContent = readMeTemplate(project);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README!')
        );

    });