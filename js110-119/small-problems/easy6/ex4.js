// Counting Up

function sequence(num) {
  let res = [];
  for (let i = 1; i <= num; i++) {
    res.push(i);
  }
  return res;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
