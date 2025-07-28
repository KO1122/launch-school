// What happens when you run the following code? Why?
const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

// The program will run normally until the fourth console.log. At that point, an error will occur since NAME is a constant. It's value cannot be reassigned.
