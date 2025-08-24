// Uppercase Check

function isAlphabetic(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function isUppercase(str) {
  for (let char of str) {
    if (isAlphabetic(char)) {
      if (char !== char.toUpperCase()) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
