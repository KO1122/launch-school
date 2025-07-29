// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

function oddLengths(arr) {
  return arr.map((str) => str.length).filter((n) => n % 2);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
