//Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

//Create an array of questions for user input
var introMessage="Plese start writing your answers with Capital letter. "+
"When done finish with a dot. Press enter to continue";
var q0=introMessage;
var q1="Enter the name of your application: ", 
    q2="What was your motivation?: ",
    q3="What problem does it solve?: ",
    q4="Describe step by step how your app interacts with the user: ",
    q5="What makes your project stand out?:",
    q6="Describe the challenges in making the app?: ",
    q7="what did you learn in making this app?: "
    q8="Is there any features you plan to implement in the future?: ",
    q9="Include screenshots from your application. Otherwise press Enter. First write a brief title for the image: ",
    q10="write the relative path for the image saved in he same readme file branch. Otherwise press enter: ",
    q11="Please provide the link to the deployed application: ";

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
# ${ans1}
## Motivation
${ans2}
## How It works
${ans3}
## What it solves
${ans4}
## Outstanding App's characteristics
${ans5}
## Challenges
${ans6}
## What was learnt
${ans7}
## Future Features
${ans8}
## Screenshots
![${ans9}](${ans10})
## Link to deployed application
${ans11}
    `;


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

