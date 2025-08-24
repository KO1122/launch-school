// Fibonacci Number Location By Length

function findFibonacciIndexByLength(digits) {
  let one = 1n;
  let two = 1n;
  let count = 2n;
  while (String(two).length < digits) {
    let temp = one + two;
    one = two;
    two = temp;
    count++;
  }
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// findFibonacciIndexByLength(10000n) === 47847n;
