const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

var introMessage="Please write the answer to the question starting with"+
" Capital letter. Press enter to continue"

//Create an array of questions for user input
var q0=introMessage;
var q1="Enter the title of your project: ",
    q2 ="Enter the description including What was your motivation to do this project" +
        " and what the problem it solves",
    q3="Enter instructions for Installation",
    q4 ="What licence are you using?",
    q5 = "Usage: Describe step by step how your app interacts with the user:",
    q6="Name the contributors and their respective contributions ",
    q7="Write tests Intructions",
    q8="Write questions about the app and report any issues",
    q9="Enter users email",
    q10="Enter users Github username",
    q11="Include screenshots from your application. Otherwise press Enter. First write a brief title for the image: ",
    q12="write the relative path for the image or screenshots saved in the same readme file branch. Otherwise press enter: ",
    q13 ="please provide the link to a walk through video",
    q14 ="Please provide the link to the deployed application: "
const questions = [q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14];

//function to display questions and add answers to generatReadme
const promptUser = () => {
prompts = []
for(var i=0; i<15; i++) {
    prompts.push({
        type: 'input',
        name: 'ans' + i,
        message: questions[i],
    });
}
    return inquirer.prompt(prompts);
};

//creates a generateReadme function to get the answers from the user and generate the Readme file
const generateReadme = ({ ans0, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8,ans9,ans10,ans11, ans12, ans13,ans14 }) =>
`${ans0}
# ${ans1}
## Description
${ans2}
## Table of contents

2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
6. [Contributions](#contributions)
7. [Test](#tests)
8. [Questions and issues](#questions-and-issues)
9. [User details](#user-details)
10. [Screenshots](#screenshots)
11. [Link to deployed application](#link-to-deployed-application)
12. [Link to walk through video](#link-to-walk-throughvideo)

## Installation
${ans3}

## License
### Badge
${renderLicenseBadge(ans4)}

### License Link
${renderLicenseLink(ans4)}

### License Section
${renderLicenseSection(ans4)}

## Usage
${ans5}
## Contributions
${ans6}
## Tests
${ans7}
## Questions and issues
${ans8}
## User details
### User email
${ans9}
### User Github username
${ans10}
## Screenshots
![${ans11}](${ans12})
## Link to deployed application
${ans13}
## Link to the walk through video
${ans14} `;




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache')
    return '[![License](<https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0.>)'
  
  if (license == 'GNU')
    return '[![License: GPL v3](<https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0>)'

  if (license == 'MIT') {
    return '[![License: MIT](<https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT>)'
  }

  return 'Licence not found.'

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=='Apache'){
    return '<https://opensource.org/licenses/Apache-2.0>'
  }
  if(license == 'GNU')
    return '<https://www.gnu.org/licenses/gpl-3.0>'

  if(license == 'MIT')
    return '<https://opensource.org/licenses/MIT>'
  
  else
    return '';
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  if (license == 'Apache') {
    return 'Copyright '+'[yyyy]'+ '<name of authour>'+
  'Licensed under the Apache License, Version 2.0(the "License"); '+
  'you may not use this file except in compliance with the License. '+
  'You may obtain a copy of the License at'+

  'http://www.apache.org/licenses/LICENSE-2.0 '+

  'Unless required by applicable law or agreed to in writing, software '+
  'distributed under the License is distributed on an "AS IS" BASIS, '+
  'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.'+
  'See the License for the specific language governing permissions and '+
  'limitations under the License.'
  }
  if (license == 'GNU')
    return 'Copyright (C) <year> <name of author>'+

    'This program is free software: you can redistribute it and / or modify '+
    'it under the terms of the GNU General Public License as published by '+
    'the Free Software Foundation, either version 3 of the License, or '+
    '(at your option) any later version. '+

    'This program is distributed in the hope that it will be useful, '+
    'but WITHOUT ANY WARRANTY; without even the implied warranty of '+
    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the ' +
    'GNU General Public License for more details.'

    'You should have received a copy of the GNU General Public License '+
    'along with this program.If not, see < https://www.gnu.org/licenses/>.'

  if (license == 'MIT') {
    return 'Copyright <YEAR> <COPYRIGHT HOLDER> '+

'Permission is hereby granted, free of charge, to' +
'any person obtaining a copy of this software and '+
'associated documentation files(the “Software”), to '+ 
'deal in the Software without restriction, including '+
'without limitation the rights to use, copy, modify, '+ 
'merge, publish, distribute, sublicense, and / or '+
'sell copies of the Software, and to permit persons '+ 
'to whom the Software is furnished to do so, subject '+ 
'to the following conditions:'+

'The above copyright notice and this permission notice '+ 
'shall be included in all copies or substantial portions '+  
'of the Software. '+

'THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF '+ 
'ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT '+ 
'LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS '+ 
'FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO '+ 
'EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE' + 
'FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN '+ 
'AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, '+ 
'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE' + 
'OR OTHER DEALINGS IN THE SOFTWARE.'
  }

  else
    return 'No license';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown() {
  promptUser()


    //Create a function to write README file
    .then((answers) => writeFile('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

module.exports = generateMarkdown;
