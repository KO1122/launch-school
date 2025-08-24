// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// It will log 10. The outer scope variable is reassigned when the myFunc function is invoked.
