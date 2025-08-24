// Grocery List

function buyFruit(arr) {
  let res = [];
  for (let [fruit, num] of arr) {
    for (let i = 0; i < num; i++) {
      res.push(fruit);
    }
  }
  return res;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
