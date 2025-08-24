// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = "Hello";
myWord.concat(" there.");

console.log(myWord);

// It will log "Hello". Primitive values are immutable and so the .concat method returns a new string with its argument appended to the original string.
