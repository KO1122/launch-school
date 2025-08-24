// Halvsies

function halvsies(arr) {
  let firstHalf = [];
  let secondHalf = [];
  let length = arr.length;
  let i = 0;

  while (i < Math.ceil(length / 2)) {
    firstHalf.push(arr[i]);
    i++;
  }

  while (i < length) {
    secondHalf.push(arr[i]);
    i++;
  }

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
