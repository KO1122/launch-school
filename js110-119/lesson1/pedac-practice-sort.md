# PEDAC Guided Practice: Sort by Most Adjacent Consonants

## Step 1: Understand the Problem

Input: An array of strings  
Output: A new array where the strings are sorted to the highest number of adjacent consonants a particular string contains

Requirements  
Explicit:

- If two strings have the same highest number of adjacent consonants, then they should retain their original order in relation to each other
- Consonants are considered to be adjacent if:
  1. They are next to each other in the same word
  2. There is a space between two consonants in adjacent words
- The letters 'y' and 'w' should be treated as consonants

Implicit:

- Strings without consonants will go first

Questions:

- What is considered to be a consonant?
- What does it mean for consonants to be adjacent?
- How will a string be formatted? What characters will appear in a string?

## Step 2: Examples and test cases

```javascript
let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
```

## Step 3: Data Structures

I will need to use the array data structure.

## Step 4: Algorithm

1. Loop through the list
2. Identify how many adjacent consonants a string has
3. Sort the strings by number of adjacent consonants. The string with the hightest number of adjacent consonants goes first.

## Step 5: Implement a Solution in Code

```javascript
function removeSpaces(str) {
  return str.split(" ").join("");
}

function countAdjacentConsonants(str) {
  let CONS = "bcdfghjklmnpqrstvwxyz";
  let cnt = 0;
  let mxCnt = 0;
  for (let i = 0; i + 1 < str.length; i++) {
    if (CONS.includes(str[i]) && CONS.includes(str[i + 1])) {
      cnt++;
    } else {
      cnt = 0;
    }
    mxCnt = Math.max(mxCnt, cnt);
  }
  return mxCnt > 0 ? mxCnt + 1 : mxCnt;
}

function sortStringsByConsonants(arr) {
  let adjCnt = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.includes(" ")) {
      str = removeSpaces(str);
    }
    adjCnt[arr[i]] = countAdjacentConsonants(str);
  }
  let newArr = arr.slice().sort((a, b) => adjCnt[b] - adjCnt[a]);
  return newArr;
}
```
