const readline = require("readline-sync");

let loanAmount = readline.question("Input the loan amount");
let annualPercentageRate = readline.question("Input the loan amount");
let loanDurationInYears = readline.question();
let monthlyInterestRate = annualPercentageRate / 12;
let loanDurationInMonths = loanDurationInYears * 12;
