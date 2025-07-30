/*
Consider the following code:

function foo(bar) {
  console.log(bar());
}

foo();    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]

As written, this code will raise an error on line 5. Without modifying the function definition of foo, update this code to print the desired text.
*/

function foo(bar) {
  console.log(bar());
}

foo(() => "Welcome"); // Should print 'Welcome'
foo(() => 3.1415); // Should print 3.1415
foo(() => [1, 2, 3]); // Should print [1, 2, 3]
