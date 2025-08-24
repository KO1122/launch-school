# Debugging JS

1. There is no semicolon at the end of line 1. This causes the first three lines to be parsed as `let ladder = ''['head', ... ].forEach()`. Since the empty string does not contain such a property, the result is undefined, and this causes a TypeError since undefined does not have a forEach method.
2. We are not seeing the expected result because returning true inside of the callback function does not mean that the function will return true. The forEach method always returns undefined so the function will always return false.

```javascript
function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}
```

3. When using the + operator with objects as operands, in this case arrays, the objects will be converted to primitive values. Thus, the three arrays that compose the dishName variable will be converted to strings and concatenated with one another. The string data type does not have a join() method so a TypeError will occur.
4. The completeTasks function has a bug. The delete statement on line 17 is causing the unwanted behavior. When `delete todos[0]` is executed, the '0' property is removed from the array's property list. However, an empty slot remains in its place in the array. Also, the length property of the array will not be changed.

```javascript
// completeTasks function
while (todos.length > 0 && tasksComplete < n) {
  console.log(`${todos[0]} complete!`);
  todos.shift(0);
  tasksComplete++;
}
```

5. There are two range function declarations. JS does not support function overloading, so the second function declaration will override the first one. The second range function takes a single parameter and will end up calling itself which will create an infinite loop.

```javascript
function range(start, end = -1) {
  let range = [];
  if (end === -1) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}
```

6. The \w character class shortcut matches not only alphabetic characters but also digits and underscores. Use `/^[a-z]+ [a-z]+$/i`, to match multiple alphabetical words, with matches being case-insensitive.
7. There are no break keywords to accompany the cases. JS executes the code that matches the first case expression, then will continue to execute subsequent statements until it comes across a break statement.
8. The default sorting behavior of the sort() method is to convert its arguments to strings and then to sort them by their UTF-16 code values. To get the expected sorting result with numbers, you must define a callback function. In this case, the correct code to sort the array in ascending order would be `nums.sort((a, b) => a - b);`.
9. The toString method is returning the wrong string format.
10. You shouldn't mutate an array within the forEach method's callback function. What ends up happening is that some elements in the words array are skipped.
