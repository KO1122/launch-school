// Palindromic Strings (Part 2)

function isRealPalindrome(str) {
  str = str
    .toLowerCase()
    .split("")
    .filter(
      (char) => (char >= "a" && char <= "z") || (char >= "1" && char <= "9")
    );
  return str.join("") === str.reverse().join("");
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
