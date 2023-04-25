//Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
var introMessage="Please write the answer to the question starting with"+
" Capital letter. Press enter to continue"

//Create an array of questions for user input
var q0=introMessage;
var q1="Enter the title of your project: ", 
    q2 ="Enter the description including What was your motivation to do this project" +
    " and what the problem it solves",
    q3="Describe step by step how your app interacts with the user: ",
    q4="Write the license for this project",
    q5="Name the contributors and their respective contributions ",
    q6="Write tests Intructions"
    q7="Write questions about the app",
    q8="Include screenshots from your application. Otherwise press Enter. First write a brief title for the image: ",
    q9="write the relative path for the image saved in he same readme file branch. Otherwise press enter: ",
    q10 ="please provide the link to a walk through video";
    q11 ="Please provide the link to the deployed application: "
const questions = [q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];

//function to display questions and add answers to generatReadme
const promptUser = () => {
prompts = []
for(var i=0; i<12; i++) {
    prompts.push({
        type: 'input',
        name: 'ans' + i,
        message: questions[i],
    });
}
    return inquirer.prompt(prompts);
};

//creates a generateReadme function to get the answers from the user and generate the Readme file
const generateReadme = ({ ans0, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8,ans9,ans10,ans11 }) =>
`${ans0}
# ${ans1}//title
## Description
${ans2}
## Table of contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)

## Description
## Installation <a name="introduction"></a>
## Usage <a name="usage"></a>
## License <a name="license"></a>
## Contributing <name="contributing"></a>
## Tests <name="tests"></a>
## Questions <name="questions"></a>
## Screenshots
## Link to the walk through video
## Link to deployed application

## Usage
${ans3}
## Lisence
${ans4}
## Contributing
${ans5}
## Tests
${ans6}
## Questions
${ans7}
## Screenshots
![${ans8}](${ans9})
## Link to deployed application
${ans10}
## Link to the walk through video
${ans11} `;


//Create a function to initialize app
const init = () => {
    promptUser()
    //Create a function to write README file
    .then((answers) => writeFile('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();

