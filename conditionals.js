const raining = false;
const cold = false;
const temperature = 12;

// Logical Operators
const isCitizen = true;
const age = 26;

// if (raining) {
//   console.log(`Don't forget your umbrella!`);
// }

// if (cold) {
//   console.log(`Make sure you pick out a scarf!`);
// }

// console.log(`Now you're ready to go outside!`);

// if (cold) {
//   console.log('Make sure you pick out a scarf!');
// } else {
//   console.log('Short sleeves are fine.');
// }

// if (temperature < 0) {
//   console.log('Make sure you pick out a scarf!');
// } else if (temperature < 15) {
//   console.log('Short sleeves won\'t cut it!');
// } else {
//   console.log('Short sleeves are fine.');
// }
// console.log('Now you\'re ready to go outside!');

// if (isCitizen && age > 18) {
//   console.log('You are eligible to vote.');
// }

// if (temperature < -40 || temperature > 40) {
//   console.log('Maybe going outside isn\'t such a great idea...');
// }

// if (!raining) {
//   console.log('Leave your umbrella at home!');
// }

// Conditionals - whichSchool

// if (age < 13) {
//   return 'Elementary School';
// } else if (age >= 13 && age <= 18) {
//   return 'Secondary School';
// } else {
//   return 'Lighthouse Labs';
// }

var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!"; 

    // Block scope
    {
          var greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
         */
    } // block scope ends

    console.log( message ); // OK
    console.log( greet ); // ERROR. 
    // Variable greet can NOT be used outside the block

    console.log( opinion ); // OK    to use the gobal variable anywhere in the code

} // function scope ends

showMessage();