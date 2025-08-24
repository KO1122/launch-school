// Combining Arrays

function union(arr1, arr2) {
  let unionArr = [];
  arr1.forEach((num) => {
    if (!unionArr.includes(num)) unionArr.push(num);
  });
  arr2.forEach((num) => {
    if (!unionArr.includes(num)) unionArr.push(num);
  });
  return unionArr;
}

console.log(union([1, 3, 1, 5], [3, 3, 6, 9])); // [1, 3, 5, 6, 9]
