// Letter Swap

function swap(str) {
  let words = str.split(" ");
  let res = [];
  for (let word of words) {
    let wordArr = word.split("");
    let temp = wordArr[0];
    wordArr[0] = wordArr[wordArr.length - 1];
    wordArr[wordArr.length - 1] = temp;
    res.push(wordArr.join(""));
  }
  return res.join(" ");
}

console.log(swap("Oh what a wonderful day it is"));
console.log(swap("Abcde"));
console.log(swap("a"));
