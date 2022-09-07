const codeArea = "```";
const licenseList = {
  'GPLv3': ['https://img.shields.io/badge/License-GPL%20v3-blue.svg','https://img.shields.io/badge/License-GPL%20v3-blue.svg'],
  'AGPLv3': ['https://img.shields.io/badge/License-AGPL%20v3-blue.svg','https://www.gnu.org/licenses/agpl-3.0'],
  'LGPLv3': ['https://img.shields.io/badge/License-LGPL%20v3-blue.svg','https://www.gnu.org/licenses/lgpl-3.0'],
  'Apachev2': ['https://img.shields.io/badge/License-Apache%202.0-blue.svg','https://opensource.org/licenses/Apache-2.0'],
  'Mozillav2': ['https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg','https://opensource.org/licenses/MPL-2.0'],
  'MIT': ['https://img.shields.io/badge/License-MIT-yellow.svg','https://opensource.org/licenses/MIT']
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'GNU AGPLv3': return licenseList.AGPLv3[0];
    case 'GNU GPLv3': return licenseList.GPLv3[0];
    case 'GNU LGPLv3': return licenseList.LGPLv3[0];
    case 'Mozilla Public License 2.0': return licenseList.Mozillav2[0];
    case 'Apache License 2.0': return licenseList.Apachev2[0];
    case 'MIT License': return licenseList.MIT[0];
    case 'The Unlicensed': return "";
    default: return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'GNU AGPLv3': return licenseList.AGPLv3[1];
    case 'GNU GPLv3': return licenseList.GPLv3[1];
    case 'GNU LGPLv3': return licenseList.LGPLv3[1];
    case 'Mozilla Public License 2.0': return licenseList.Mozillav2[1];
    case 'Apache License 2.0': return licenseList.Apachev2[1];
    case 'MIT License': return licenseList.MIT[1];
    case 'The Unlicensed': return "";
    default: return "";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # [![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)}) ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  ${codeArea}
  ${data.installation}
  ${codeArea}

  ## Usage
  ${data.usage}

  ##  License
  This project is licensed under the ${data.license}.

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, run the following command:
  ${codeArea}
  ${data.tests}
  ${codeArea}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/)
`;
}

module.exports = generateMarkdown;
