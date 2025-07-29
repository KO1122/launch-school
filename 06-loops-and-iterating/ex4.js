// Does the following code produce an error? Why or why not? What output does this code send to the console?
for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// The following code does not produce an error. This is because the value of i is incremented for each iteration until it reaches the termination condition of 5. The output that the code sends to the console are the numbers 1 to 5.
