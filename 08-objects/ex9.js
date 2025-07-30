// What does the following program log to the console? Why?

let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
Logs:
"hi"
"hello"

The value of the foo object's 'a' key will be mutated by the bar function so foo.a will have a value of "hi". Though the qux variable is being passed into the bar function as argument2 and its value is being reassigned, the scope of this only extends within the function as argument2 is locally scoped. Thus, when qux is accessed from outside of the function, its value is that of the qux variable that is globally scoped which is "hello".
*/
