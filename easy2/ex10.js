// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

let readlineSync = require("readline-sync");
let curAge = Number(readlineSync.question("What is your age? "));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire? ")
);
let interval = retirementAge - curAge;

let curYear = new Date().getFullYear();
console.log(`It's ${curYear}. You will retire in ${curYear + interval}.`);
console.log(`You have only ${interval} years of work to go!`);
