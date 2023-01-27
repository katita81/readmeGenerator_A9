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
const questions = [q1,q2,q3,q4,q5,q6,q8,q9,q10];


var displayQs=()=>questions.forEach(element => {
    console.log(element);
 })

module.exports = {
 displayQs
    

   
    
//   sum: (a, b) => a + b,
//   difference: (a, b) => a - b,
//   product: (a, b) => a * b,
//   quotient: (a, b) => a / b,
}
