const p = console.log;

function whatIsDifferent(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = obj[num] || 0;
    obj[num]++;
  }
  for (let num in obj) {
    if (obj[num] === 1) {
      return Number(num);
    }
  }
}

p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
