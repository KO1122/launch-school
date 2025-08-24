// Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

function multiply(n1, n2) {
  return n1 * n2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

function powerToTheN(num, power) {
  let prev = num;
  let res = num;
  for (let i = 0; i < power - 1; i++) {
    res = multiply(prev, num);
    prev = res;
  }
  return res;
}

console.log(powerToTheN(2, 2));
console.log(powerToTheN(2, 4));
console.log(powerToTheN(3, 5));
