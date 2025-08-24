// Capitalize Words

function wordCap(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(wordCap("four score and seven"));
console.log(wordCap("the javaScript language"));
console.log(wordCap('this is a "quoted" word'));
