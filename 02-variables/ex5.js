let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

// What does this program log to the console? Why?
// It will log 'bar' to the console. The second foo variable is block-scoped so it will not be accessible outside of the block. As such, the first foo variable with 'bar' will be logged to the console.
