// Letter Counter (Part 1)

function wordSizes(str) {
  if (str.length === 0) return {};
  let words = str.split(" ");
  let res = {};
  for (let word of words) {
    res[word.length] = res[word.length] || 0;
    res[word.length]++;
  }
  return res;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
