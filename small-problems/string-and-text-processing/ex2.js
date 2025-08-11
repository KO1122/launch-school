// Delete Vowels

function removeVowels(arr) {
  return arr.map((str) =>
    str
      .split("")
      .filter((char) => !"aeiou".includes(char.toLowerCase()))
      .join("")
  );
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"]));
console.log(removeVowels(["green", "YELLOW", "black", "white"]));
console.log(removeVowels(["ABC", "AEIOU", "XYZ"]));
