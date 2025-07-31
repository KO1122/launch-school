// Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

function centerOf(string) {
  let length = string.length;
  let idx = Math.floor(length / 2);
  if (length % 2) {
    return string.slice(idx, idx + 1);
  } else {
    return string.slice(idx - 1, idx + 1);
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
