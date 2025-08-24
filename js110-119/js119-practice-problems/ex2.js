const p = console.log;

function minimumSum(arr) {
  if (arr.length < 5) return null;
  let minSum = Infinity;
  let total = 0;
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    total += arr[r];
    if (r - l + 1 === 5) {
      minSum = Math.min(minSum, total);
      total -= arr[l];
      l++;
    }
  }
  return minSum;
}

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
