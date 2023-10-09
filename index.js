const inquirer = require('inquirer');
const fs = require('fs')




const generateReadMe = ({title, description, installation, usage, license , contributing, tests, questions  }) =>
`# ${title}

${generateLicense(license)}

## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

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

// This function handles the licensing badges
function generateLicense(license) {
  // MIT License
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

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
      type: "list",
      message: "Select the type of license you would like for your project:",
      choices: [
        "MIT",
        "Apache 2.0 License",
        "IBM Public License Version 1.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
      name: "license",
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
fs.writeFile('READMEex.md', readMe, (err) =>

err ? console.log(err) : console.log('ReadMe has been generated')
);
  });