const licenseDoc = require('./license');
let year = new Date();


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  };
  return `https://opensource.org/licenses/${license}`;

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (!license) {
    return '';
  };
  return licenseDoc[license]
  


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, license) {

  return `# ${answers.title}\n

  ${renderLicenseBadge(answers.license)}\n
  
  ### Table Of Contents\n
  1. [Description](#description)
  2. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributions](#contributions)
  6. [Test](#test)
  7. [Questions](#questions)


  ## Description \n
  ${answers.description}\n
  ${answers.reason}\n
  ${answers.problem}\n
  ${answers.learn}\n
  
  
  
 ## Installation\n
 ${answers.install}\n
 [Github Pages Live Site] ${answers.githubPages}\n
 [Github Repo Site] ${answers.githubRepo}\n

 ## Usage\n
 ${answers.examples}\n

 ## Contributing\n
 ${answers.contributions}\n
 ${answers.contributors}\n
 
 ## License\n
 ${renderLicenseBadge(answers.license)}\n
 ${renderLicenseLink(answers.license)}\n
 Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
 ${renderLicenseSection(answers.license)};\n
 
 
 ## Contact\n
 
 My Github: ${answers.githubUrl}\n
 my Email: ${answers.email};
};






module.exports = generateMarkdown;
