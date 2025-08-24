// Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

function shortLongShort(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  if (length1 > length2) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

let res1 = shortLongShort("abc", "defgh"); // "abcdefghabc"e
let res2 = shortLongShort("abcde", "fgh"); // "fghabcdefgh"
let res3 = shortLongShort("", "xyz"); // "xyz"
console.log(res1);
console.log(res2);
console.log(res3);
