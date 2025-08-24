// Staggered Caps (Part 2)

function isAlphabetic(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function staggeredCase(str) {
  let count = 0;
  return str
    .split("")
    .map((char) => {
      if (isAlphabetic(char)) {
        if (count % 2 === 0) {
          count++;
          return char.toUpperCase();
        } else {
          count++;
          return char.toLowerCase();
        }
      }
      return char;
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
