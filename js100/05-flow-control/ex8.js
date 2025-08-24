// Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange(integer) {
  if (integer > 100) {
    console.log(`${integer} is greater than 100`);
  } else if (integer >= 51) {
    console.log(`${integer} is between 51 and 100`);
  } else if (integer >= 0) {
    console.log(`${integer} is between 0 and 50`);
  } else {
    console.log(`${integer} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
