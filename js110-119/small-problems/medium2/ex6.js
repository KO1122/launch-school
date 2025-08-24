// Sum Square - Square Sum

function sumSquareDifference(n) {
  let squareOfSum = ((n * (n + 1)) / 2) ** 2;
  let sumOfSquares = 0;
  for (let i = 1; i <= n; i++) {
    sumOfSquares += i ** 2;
  }
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
