const inquirer = require('inquirer');
const fs = require('fs')




const generateReadMe = ({title, description, installation, usage, license , contributing, tests, questions  }) =>
`# ${title}


## Table of Contents

   Description
   Installation
   Usage
   License
   Contributing
   Tests 
   Questions

## Descrition

${description}

## Installation

${installation}

## Usage

${usage}

## License
${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questions}

`

inquirer
  .prompt([
    {
      type: 'input', 
      message: 'What is the title of your project?',
      name: 'title',
      
    },
    {
      type: 'input',                         
      message: 'Describe your Project! ',
      name: 'description',
      
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
        
      },
    {
      type: 'input',
      message: 'How do you use your project?',
      name: 'usage',
      
    },
    {
        type: 'checkbox',
        message: 'What license are you using?',
        name: 'license',
        choices: [ 'MIT', 'Apache','GNU', 'none']
        
      },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
        
      },
      
      {
        type: 'input',
        message: 'What tests did you run for this project?',
        name: 'tests',
        
      },
      {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
        
      },
  ])

  .then((data) => {
    const readMe = generateReadMe(data);
fs.writeFile('README.md', readMe, (err) =>

err ? console.log(err) : console.log('ReadMe has been generated')
);
  });