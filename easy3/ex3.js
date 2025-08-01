// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(posInt) {
  let res = "";
  for (let i = 0; i < posInt; i++) {
    if (i % 2) {
      res += "0";
    } else {
      res += "1";
    }
  }
  console.log(res);
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
