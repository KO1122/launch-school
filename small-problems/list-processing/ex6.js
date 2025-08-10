// Palindromic Substrings

function getSubstrings(str) {
  let substrings = [];
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

function isPalindrome(str) {
  if (str.length === 1) return false;
  return str === str.split("").reverse().join("");
}

function palindromes(str) {
  let res = [];
  let substrings = getSubstrings(str);
  for (let substring of substrings) {
    if (isPalindrome(substring)) {
      res.push(substring);
    }
  }
  return res;
}

console.log(palindromes("abcd"));
console.log(palindromes("madam"));
console.log(palindromes("hello-madam-did-madam-goodbye"));
console.log(palindromes("knitting cassettes"));
