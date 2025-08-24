// List of Digits

function digitList(num) {
  let res = [];
  while (num) {
    res.push(num % 10);
    num = Math.floor(num / 10);
  }
  return res.reverse();
}

console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]
