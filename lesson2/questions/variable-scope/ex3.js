// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// It logs 5. The num variable is declared and intialized with a value of 5. When the function is invoked, it declares and initializes a new num variable. However, this num variable has local scope and is only accessible within the function. As such, the num variable that will be logged is the globally-scoped one with a value of 5.
