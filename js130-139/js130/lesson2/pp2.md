# Practice Problems: Closures

1. 1, 2, 3, 4
2. 1, 1, 1, 1
3. 1, 2, 1, 2
4. 1, 2, 1, 2
5.

```javascript
function makeMultipleLister(num) {
  return function () {
    for (let i = num; i < 100; i += num) {
      console.log(i);
    }
  };
}

let lister = makeMultipleLister(17);
lister();
```

6.

```javascript
let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}
```

7. The code will log 150.
8.

```javascript
function later(callback, arg) {
  return function () {
    callback(arg);
  };
}
```

9.

```javascript
function later2(func, arg1) {
  return function (arg2) {
    func(arg1, arg2);
  };
}
```

10.

```javascript
function bind(context, func) {
  return function () {
    func.call(context);
  };
}
```
