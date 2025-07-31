// How Old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

function randomNumber() {
  let min = 20;
  let max = 120;
  return Math.random() * (max - min + 1) + min;
}

console.log(`Teddy is ${Math.floor(randomNumber())} years old!`);
