# Practice Problems: Immediately Invoked Function Expressions

1. The code will have an error. The function needs to be enclosed by parentheses to be an IIFE.
2.

```javascript
(function () {
  console.log("Sometimes, syntax isn't intuitive!");
})();
```

3. The code produces an error since the sum identifier is assigned the value of 0 and cannot run as a function.

```javascript
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function (arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);
```

4.

```javascript
(function (num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
})(7);
```

5. No, it is not accessible in the global scope.
6.

```javascript
let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);
```

7.

```javascript
(function countdown(num) {
  if (num < 0) return;
  console.log(num);
  countdown(num - 1);
})(7);
```
