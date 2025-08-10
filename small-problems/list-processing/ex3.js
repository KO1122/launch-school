// Multiply All Pairs

function multiplyAllPairs(arr1, arr2) {
  let res = [];
  for (let n1 of arr1) {
    for (let n2 of arr2) {
      res.push(n1 * n2);
    }
  }
  return res.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
