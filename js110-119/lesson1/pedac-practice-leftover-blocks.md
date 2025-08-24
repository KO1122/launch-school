# PEDAC Guided Practice: Leftover Blocks

## Step 1: Understand the Problem

Input: Number of cubes  
Output: Number of cubes leftover after building the tallest possible valid structure

Requirements  
Explicit:

- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks

Implicit:

- The second layer will contain at least four blocks
- The number of blocks in a layer is the number of blocks on one side of the layer multiplied by itself

Questions:

- How de we determine if a layer is valid?
- Will there always be blocks leftover?

## Step 2: Examples and test cases

```javascript
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```

Do the test cases confirm or refute different elements of your original analysis and mental mode?

- The test cases confirm my original analysis.

Do they answer any of the questions that you had, or do they perhaps raise further questions?

- They answer the questions that I had.

## Step 3: Data Structures

I don't need a data structure. The answer can be calculated numerically.

## Step 4: Algorithm

1. Begin with
   - A count variable that represents the total number of blocks
2. Create a loop that will go through the possible square numbers
3. If the current square number is lesser than or equal to the value of the count variable, subtract the count variable by the current square number
4. Terminate the loop when the count variable greater than or equal to the square number

## Step 5: Implement a Solution in Code

```javascript
function calculateLeftoverBlocks(blockNum) {
  let i = 1;
  let square = i * i;
  while (blockNum >= square) {
    blockNum -= square;
    i++;
    square = i * i;
  }
  return blockNum;
}
```
