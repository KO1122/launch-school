const p = console.log;

function mostCommonChar(str) {
  str = str.toLowerCase();
  let mxCnt = 0;
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] || 0;
    obj[char]++;
    if (obj[char] > mxCnt) {
      mxCnt = obj[char];
    }
  }

  for (let char of str) {
    if (obj[char] === mxCnt) {
      return char;
    }
  }
}

p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
