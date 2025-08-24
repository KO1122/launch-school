// Double Char (Part 2)

const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

function isConsonant(char) {
  return CONSONANTS.includes(char.toLowerCase());
}

function doubleConsonants(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (isConsonant(str[i])) {
      res.push(str[i], str[i]);
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}

console.log(doubleConsonants("String") === "SSttrrinngg"); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!") === "HHellllo-WWorrlldd!"); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th") === "JJullyy 4tthh"); // "JJullyy 4tthh"
console.log(doubleConsonants("") === ""); // ""
