let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function sum(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2) {
      return acc + num;
    }
    return acc;
  }, 0);
}

arr.sort((a, b) => sum(a) - sum(b));
console.log(arr);
