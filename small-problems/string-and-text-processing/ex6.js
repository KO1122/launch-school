// Staggered Caps (Part 1)

function staggeredCase(str) {
  return str
    .split("")
    .map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL_CAPS"));
console.log(staggeredCase("ignore 77 the 4444 numbers"));
