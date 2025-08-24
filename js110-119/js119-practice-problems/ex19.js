const p = console.log;

function oddFellow(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = obj[num] || 0;
    obj[num]++;
  }

  for (let num in obj) {
    if (obj[num] % 2) {
      return Number(num);
    }
  }
}

p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
