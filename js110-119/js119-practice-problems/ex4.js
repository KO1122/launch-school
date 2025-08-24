const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function closestNumbers(arr) {
  let minDist = Infinity;
  let res = [-1, -1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (Math.abs(arr[i] - arr[j]) < minDist) {
          minDist = Math.abs(arr[i] - arr[j]);
          res[0] = arr[i];
          res[1] = arr[j];
        }
      }
    }
  }
  return res;
}

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
