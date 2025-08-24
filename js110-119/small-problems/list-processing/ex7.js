// Sum of Sums

function sumOfSums(arr) {
  return arr.reduce((acc, num, idx) => acc + (arr.length - idx) * num, 0);
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
