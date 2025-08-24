// Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

let readlineSync = require("readline-sync");
let noun = readlineSync.question("Enter a noun: ");
let verb = readlineSync.question("Enter a verb: ");
let adjective = readlineSync.question("Enter a adjective: ");
let adverb = readlineSync.question("Enter a adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
