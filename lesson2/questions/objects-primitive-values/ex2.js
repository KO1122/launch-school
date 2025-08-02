// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWord = "Hello";
myWord.repeat(3);
console.log(myWord);
myWord.replace("H", "J");
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

// It will log the string 'Hello' three times. A string is immutable so any string method returns a new string.
