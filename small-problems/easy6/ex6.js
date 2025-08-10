// Sequence Count

function sequence(count, start) {
  let res = [];
  for (let i = 0; i < count; i++) {
    res.push(start * (i + 1));
  }
  return res;
}

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
