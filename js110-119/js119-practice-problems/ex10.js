const p = console.log;

function getSubstrs(str) {
  let res = [];
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
}

function isEven(str) {
  return Number(str) % 2 === 0;
}

function evenSubstrings(str) {
  let cnt = 0;
  let substrs = getSubstrs(str);
  for (let substr of substrs) {
    if (isEven(substr)) {
      cnt++;
    }
  }
  return cnt;
}

p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
