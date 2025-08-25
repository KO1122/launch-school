// Find Missing Numbers

let p = console.log;

let missing = function (arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let res = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      res.push(i);
      e;
    }
  }
  return res;
};

p(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4])); // []
p(missing([1, 5])); // [2, 3, 4]
p(missing([6])); // []
