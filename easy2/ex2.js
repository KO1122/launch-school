// Greeting a user
// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

let readlineSync = require("readline-sync");
let name = readlineSync.question("What is your name? ");

if (name[name.length - 1] === "!") {
  console.log(
    `HELLO ${name
      .slice(0, name.length - 1)
      .toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${name}.`);
}
