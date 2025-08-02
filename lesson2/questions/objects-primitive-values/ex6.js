// What will the following code log to the console and why? Don't run it until you have tried to answer.

let myWords = ["Hello"];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// It will log ['HELLO']. Arrays are mutable and the value of the array at index 0 is being reassigned to its previous value converted to uppercase.
