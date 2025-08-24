// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// Nothing will be logged since a ReferenceError will be raised. A new num variable is declared and initialized on line 5. The console.log() on line 4 attempts to access the value of that num variable and not the one declared on line 3.
