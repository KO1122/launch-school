const p = console.log;

function isValid(num) {
  return num % 7 === 0 || num % 11 === 0;
}

function sevenEleven(limit) {
  if (limit < 0) return 0;
  let num = 1;
  let sum = 0;
  while (num < limit) {
    if (isValid(num)) {
      sum += num;
    }
    num++;
  }
  return sum;
}

p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
