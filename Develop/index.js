// TODO: Include packages needed for this application
const inquirer = require('inquirer');


const { writeFile } = require('fs').promises;




// TODO: Create an array of questions for user input

var q1="Enter the name of your application", 
    q2="What was your motivation?",
    q3="Why did you build this project",
    q4="What problem does it solve?",
    q5="What did you learn?", 
    q6="What makes your project stand out?",
    q7="Describe the challenges in making the app?",
    q8="Is there any features you plan to implement in the future?",
    q9="Include screenshots from your application",
    q10="Please provide the link to the deployed application";
const questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];




// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const promptUser = () => {
  prompts = []
  for(var i=0; i<10; i++) {
    prompts.push({
      type: 'input',
      name: 'ans' + i,
      message: questions[i],
    });
  }

  return inquirer.prompt(prompts);
};


const generateReadme = ({ ans0, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9 }) =>
  `# ${ans0}
     ${ans1}
     ${ans2}
     ${ans3}
     ${ans4}
     ${ans5}
     ${ans6}
     ${ans7}
     ${ans8}
     ${ans9}

    `;


//Create a function to initialize app
const init = () => {
  promptUser()
  
    .then((answers) => writeFile('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();

