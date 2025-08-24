// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

function allMatches(arr, regex) {
  let matches = [];
  for (let word of arr) {
    if (regex.test(word)) {
      matches.push(word);
    }
  }
  return matches;
}

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
