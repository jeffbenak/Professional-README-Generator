// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-green)

## Licensing
${data.license}

## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Instructions](#Instructions)
* [Github](#Github)
* [Email](#Email)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Instructions 
${data.instructions}
## Github
${data.Github}
## Email 
${data.email}
`;
}

module.exports = generateMarkdown;
