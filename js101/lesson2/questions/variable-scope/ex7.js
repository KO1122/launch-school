// What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// This will not log anything since an infinite loop will occur. The while loop references the num declared on line 1 with a value of 1. However, the num that is incremented within the while block is the one defined on line 6.
