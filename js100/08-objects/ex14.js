// Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + " " + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello("Hi", "Grace");
let foo = xyzzy();

/*
Variables: hello, greeting, name, xyzzy, howdy, foo
Object property names: a, b, c, d, 0, 1, 2 
Primitives: " ", 1, 2, 3, 4, 5, "Hi", "Grace", 'a', 'b', 'c', 'd', 0, 1, 2
Objects:  hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} };, [3, 4, 5], {}
*/
