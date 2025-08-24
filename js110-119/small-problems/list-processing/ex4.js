// Leading Substrings

function leadingSubstrings(str) {
  let res = [];
  for (let i = 1; i <= str.length; i++) {
    res.push(str.slice(0, i));
  }
  return res;
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
