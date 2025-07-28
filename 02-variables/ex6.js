// Will this program produce an error when run? Why or why not?
const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// The program will not produce an error. The two FOO constants are independent of one another.
