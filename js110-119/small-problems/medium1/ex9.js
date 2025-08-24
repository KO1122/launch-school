//Fibonacci Numbers (Memoization)

const memo = {};
function fibonacci(num) {
  if (memo[num]) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return memo[num];
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
