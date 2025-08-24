// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// The code logs 1 to the console. Executing the foo function does not affect the output since the bar variable in the foo function is locally scoped and is inaccessible outside of the function.
