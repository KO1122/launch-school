// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let res = [];
  let length = str.length;
  for (let i = 0; i < length; i++) {
    if (i + 1 < length && str[i] !== str[i + 1]) {
      res.push(str[i]);
    }
  }
  res.push(str[length - 1]);
  return res.join("");
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
