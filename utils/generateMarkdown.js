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
function generateMarkdown(answers, license) {

  return `# ${answers.title}\n
  
  ### Table Of Contents\n
  1. [Description](#Description)
  2. [Installation](#Installation)
  4. [Application Screenshot](#Application Screenshot)
  5. [Contributions](#Contributions)
  6. [Contact](#Contact)
  ## Description \n
  ${answers.description}\n
  ${answers.reason}\n
  ${answers.problem}\n
  ${answers.learn}\n
  
  
  
 ## Installation\n
 ${answers.install}\n
 [Github Pages Live Site] ${answers.githubPages}\n
 [Github Repo Site] ${answers.githubRepo}
 ## Application Screenshot
 ![ScreenShot](${answers.screenshot} "ScreenShot")
 
 ## License\n
 ${renderLicenseBadge(answers.license)}\n
 ${renderLicenseLink(answers.license)}\n
 ${renderLicenseSection(answers.license)};
 
 
 ## Contributing\n
 ${answers.contributions}\n
 ${answers.contributors}\n
 

 ## Contact\n
 
 My github: ${answers.githubUrl}\n
 my Email: ${answers.email}
  `;
}






module.exports = generateMarkdown;
