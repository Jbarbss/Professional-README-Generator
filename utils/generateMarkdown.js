const license = require('./license');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return license = `[![License MIT](https://img.shields.io/apm/l/pack)](https://spdx.org/licenses/MIT.html)`;
   } else if (license === "Apache License 2.0") {
    return license = `[![License Apache License 2.0](https://img.shields.io/aur/license/android-studio)](https://spdx.org/licenses/Apache-2.0.html)`;
   } else if (license === "GNU GPLv3") {
    return license = `[![License GNU GPLv3](https://img.shields.io/aur/license/pa)](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
   } else {
     return " ";
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
  
    return license = `https://opensource.org/licenses/MIT`;
    
  }
  else if (license === "Apache License 2.0") {
    return license = `https://opensource.org/licenses/Apache-2.0`;
  }
  else if (license === "GNU GPLv3") {
    return license = `https://opensource.org/licenses/GPL-3.0`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return license = `${ mitLicense }`;
  } else if (license === "Apache License 2.0") {
     return license = `${ apacheLicense }`;
  } else if (license === "GNU GPLv3") {
    return license = `${ gnuLicense }`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


}

module.exports = generateMarkdown;
