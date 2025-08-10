// Fibonacci Numbers (Procedural)

function fibonacci(nth) {
  if (nth <= 2) return 1;
  let one = 1;
  let two = 1;
  nth -= 2;
  while (nth) {
    let temp = one + two;
    one = two;
    two = temp;
    nth--;
  }
  return two;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
