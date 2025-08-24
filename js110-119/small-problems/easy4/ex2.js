// Palindromic Strings (Part 1)

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l <= r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true
