const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function smallerNumbersThanCurrent(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let seen = [];
    let cnt = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] > arr[j] && seen.indexOf(arr[j]) === -1) {
        seen.push(arr[j]);
        cnt++;
      }
    }
    res.push(cnt);
  }
  return res;
}

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));

/* PEDAC
P: Understand the problem 
Input: Array of numbers (integers)
Output: Array of numbers 

D: Data Structure 
Array 

A: Algorithm 
- Initialize a count variable 
- Start off by looping through the input array
- For a given element, loop through the other elements using an inner loop and compare their values 
  - Create an array to keep track of elements that have been previously seen 
  - If the inner loop encounters the given element, just skip it 
  - If the given element is larger than the compared element, increment the count variable 
  - Once all elements have finished being compared with the given element, push the count variable to a results array 
- Return the results array 
*/
