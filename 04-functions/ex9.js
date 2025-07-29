function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber("Enter the first number: ");
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).
/*
Line 1: multiply, left, right 
Line 2: product, left, right 
Line 3: product
Line 6: getNumber, prompt
Line 7: parseFloat, question, prompt  
Line 10: left, getNumber 
Line 11: right, getNumber 
Line 12: console, left, right, multiply 
*/
