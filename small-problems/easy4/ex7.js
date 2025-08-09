// Letter Counter (Part 2)

function isLetter(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function wordSizes(str) {
  let words = str.split(" ");
  let res = {};
  for (let word of words) {
    if (word.length === 0) continue;
    let cnt = 0;
    for (let char of word) {
      if (isLetter(char)) {
        cnt++;
      }
    }
    res[cnt] = res[cnt] || 0;
    res[cnt]++;
  }
  return res;
}

console.log(wordSizes("Four score and seven."));
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(""));
