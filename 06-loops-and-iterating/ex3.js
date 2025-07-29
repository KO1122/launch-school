// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The condition for the while loop is incorrect. Instead of checking if the value of the counter is equal to 1, the code is assigning the value of counter to be 1. This means that the value of counter will never be greater than 2 and thus resulting in an infinite loop.
