// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// It will log 5 and then 10. The num variable has global scope so it is accessible within the myFunc function. When the function is invoked, it first logs 5 to the console then reassigns num to 10. Then, the reassigned value is logged to the console.
