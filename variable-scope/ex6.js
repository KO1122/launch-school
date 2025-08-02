// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

// It will log 3. The num variable declared and initialized on line 1 has global scope. This means it can be accessed within a while block. In the while block, the num variable is reassigned with a value that is one greater than its previous value. The while loop terminates when the value of num is greater than or equal to 3.
