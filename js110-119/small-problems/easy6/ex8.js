function reverseWords(str) {
  let words = str.split(" ");
  let res = [];
  words.forEach((word) => {
    if (word.length >= 5) {
      let reversedWord = word.split("").reverse().join("");
      res.push(reversedWord);
    } else {
      res.push(word);
    }
  });
  return res.join(" ");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
