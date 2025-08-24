// Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).
function isAlpha(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function cleanUp(str) {
  let res = "";
  for (const char of str) {
    if (isAlpha(char)) {
      res += char;
    } else {
      if (res[res.length - 1] !== " ") {
        res += " ";
      }
    }
  }
  return res;
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
console.log(cleanUp("-"));
