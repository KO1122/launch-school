// Searching 101

const rs = require("readline-sync");
let num1 = rs.question("Enter the 1st number: ");
let num2 = rs.question("Enter the 2nd number: ");
let num3 = rs.question("Enter the 3rd number: ");
let num4 = rs.question("Enter the 4th number: ");
let num5 = rs.question("Enter the 5th number: ");
let num6 = rs.question("Enter the last number: ");
let nums = [num1, num2, num3, num4, num5];

console.log(
  `\nThe number ${num6} ${
    nums.includes(num6) ? "appears" : "does not appear"
  } in ${nums}.`
);
