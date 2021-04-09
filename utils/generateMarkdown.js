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

  function generateMarkdown(answers) {
    //Generate table of contents if true
      let tableOfContents = ` ## Table of Contents`;
      if(answers.install) {
        tableOfContents += `\n1. [Description](#description)\n`;
      }
      if(answers.install) {
        tableOfContents += `\n2. [Installation](#installation)\n`;
      }
      if (answers.usage) {
        tableOfContents += `\n3. [Usage](#usage)\n`;
      }
      if(answers.tests) {
        tableOfContents += `\n4. [Tests](#tests)\n`;
      }
      if (answers.contributors) {
        tableOfContents += `\n5. [Contributions](#contributions)\n`;
      }
      if (answers.questions) {
        tableOfContents += `\n6. [Questions](#questions)\n`;
      }
    ​
    //generate README title and display license badge
      let readMe = `# ${answers.title}\n`;
      readMe += `\n${renderLicenseBadge(answers.license)}\n`
    ​
      
    ​
     tableOfContents += `\n## Description\n ${answers.description}\n`;
    ​
     readMe += tableOfContents;
    ​
     if (answers.install != "") {
       readMe += `\n ## Installation\n${answers.install}\n`
       readMe += `\n [Github Live Site]${answers.githublive}\n`
       readMe += `\n [Github Repo Site]${answers.githubRepo}`
     }
    ​
     if (answers.examples != "") {
       readMe += `\n ## Usage\n ${answers.examples}\n`;
     }
     
    if (answers.installation != "") {
      readMe += `\n ## License\n ${renderLicenseBadge(answers.license)}\n
       ${renderLicenseLink(answers.license)}\n
        Licensed under the ${answers.license} License\n
        Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
        ${renderLicenseSection(answers.license)}\n`;
    }
    ​
    if (answers.contributors != "") {
      readMe += `\n ## Contributing\n${answers.contributors}`;
    }
    ​
    if (answers.tests === true) {
      readMe += `\n ## Tests \n ${answers.tests}`;
    }
    ​
    readMe += `\n ## Questions\n For additional questions about usage, installation or application improvement contact me through\n
    Github: ${answers.githubUrl}\n
    Email: ${answers.email}`;
    ​
    return readMe;
    ​
    ​}




//   return `# ${answers.title}\n

//   ${renderLicenseBadge(answers.license)}\n
  
//   ### Table Of Contents\n
//   1. [Description](#description)
//   2. [Installation](#installation)
//   4. [Usage](#usage)
//   5. [Contributions](#contributions)
//   6. [Test](#test)
//   7. [Questions](#questions)


//   ## Description \n
//   ${answers.description}\n
//   ${answers.reason}\n
//   ${answers.problem}\n
//   ${answers.learn}\n
  
  
  
//  ## Installation\n
//  ${answers.install}\n
//  [Github Pages Live Site] ${answers.githubPages}\n
//  [Github Repo Site] ${answers.githubRepo}\n

//  ## Usage\n
//  ${answers.examples}\n

//  ## Contributing\n
//  ${answers.contributions}\n
//  ${answers.contributors}\n
 
//  ## License\n
//  ${renderLicenseBadge(answers.license)}\n
//  ${renderLicenseLink(answers.license)}\n
//  Copyright \u00A9 [${year.getFullYear()}] [${answers.name}]
//  ${renderLicenseSection(answers.license)};\n
 
 
//  ## Contact\n
 
//  My Github: ${answers.githubUrl}\n
//  my Email: ${answers.email}
//  `
// };






module.exports = generateMarkdown;
