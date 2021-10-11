// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    if (license === 'Apache 2.0') {
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'Boost') {
      return '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
    } else if (license === 'BSD 3-Clause') {
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    } else if (license === 'BSD 2-Clause') {
      return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'Boost') {
      return 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'BSD 3-Clause') {
      return 'https://opensource.org/licenses/BSD-3-Clause';
    } else if (license === 'BSD 2-Clause') {
      return 'https://opensource.org/licenses/BSD-2-Clause';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `See [License](${renderLicenseLink(license)})`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { username,
          email,
          projectTitle:title, 
          description:des,
          link, 
          installation:install, 
          usage:use,
          license 
        } = data;
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description 
  ${des}

  ## Table of Contents

  * Installation
  * Usage
  * Credits
  * License
  * Questions

  ## Installation
  [${title}](${link})
  
  ${install}

  ## Usage
  ${use}

  ## License
  ${renderLicenseSection(license)}

  ## Questions
  
  [Github](https://www.github.com/${username})
  
  If by any chance you want to reach out directly to me with questions about ${title}, here's my email, ${email}. Feel free to send any questions, criticisms  my way, please allow at least 24 hours before a response.`;
}

module.exports = generateMarkdown;
