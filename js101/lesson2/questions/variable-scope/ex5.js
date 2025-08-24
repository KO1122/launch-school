// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

// It will log 5 to the console. The num variable is declared and initialized on line 1. When the myFunc function is invoked, it declares a new num variable as a parameter and reassigns it a value of 10. However, since the new num variable is locally scoped, it cannot be accessed outside of the function. Thus, the console will log the value of the num variable from line 1
