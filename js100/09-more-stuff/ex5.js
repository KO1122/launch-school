// What does the following function do?

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

// It takes a string and splits it into an array of substrings based on a single whitespace as a delimiter. Then, it reverses the array. Finally, it creates a new array with all string elements replaced with the length of each string.
