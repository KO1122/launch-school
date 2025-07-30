// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// It logs [1, 4, 3]. Both array1 and array2 reference the same array in memory so changing array1's value at index 1 will also affect array2.
