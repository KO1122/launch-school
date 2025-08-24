const readline = require("readline-sync");

function isInvalidNumber(number) {
  return number < 0 || Number.isNaN(number);
}

console.log("Welcome to Mortgage Calculator!");

let loanAmount = Number(readline.question("Input the loan amount (in USD): "));
while (isInvalidNumber(loanAmount)) {
  loanAmount = Number(readline.question("Input the loan amount (in USD): "));
}

let annualPercentageRate =
  Number(readline.question("Input the annual percentage rate (in %): ")) / 100;
while (isInvalidNumber(annualPercentageRate)) {
  annualPercentageRate =
    Number(readline.question("Input the annual percentage rate (in %): ")) /
    100;
}

let loanDurationInYears = Number(
  readline.question("Input the loan duration (in years): ")
);
while (isInvalidNumber(loanDurationInYears)) {
  loanDurationInYears = Number(
    readline.question("Input the loan duration (in years): ")
  );
}

let monthlyInterestRate = annualPercentageRate / 12;
let loanDurationInMonths = loanDurationInYears * 12;

let monthlyPayment =
  loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

console.log(`Your monthly payment will be $${monthlyPayment.toFixed(2)}`);
