const p = console.log;

function equalSumIndex(arr) {
  let rightSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
