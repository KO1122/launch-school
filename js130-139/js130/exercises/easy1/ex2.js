// Divisors

let p = console.log;
let divisors = function (num) {
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  return res;
};

p(divisors(1)); // [1]
p(divisors(7)); // [1, 7]
p(divisors(12)); // [1, 2, 3, 4, 6, 12]
p(divisors(98)); // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
// p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]
