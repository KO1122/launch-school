// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let readlineSync = require("readline-sync");
let integer = Number(
  readlineSync.question("Please enter an integer greater than 0: ")
);
let operation = readlineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

function calculate(integer, operation) {
  let res;
  if (operation === "s") {
    res = 0;
    for (let i = 1; i <= integer; i++) {
      res += i;
    }
  } else {
    res = 1;
    for (let i = 1; i <= integer; i++) {
      res *= i;
    }
  }
  return res;
}

let strOpr = operation === "s" ? "sum" : "product";
console.log();
console.log(
  `The ${strOpr} of the integers between 1 and ${integer} is ${calculate(
    integer,
    operation
  )}.`
);
