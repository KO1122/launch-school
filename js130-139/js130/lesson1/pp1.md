# Practice Problems: Emulating Iteration Methods

## Basic Emulation Problems

1.

```javascript
function filter(arr, callback) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
```

2.

```javascript
function map(arr, callback) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }
  return res;
}
```

## Emulating and Using the reduce Method

1.

```javascript
function reduce(arr, callback, initialValue) {
  let res = initialValue ?? arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && initialValue === undefined) {
      continue;
    }
    res = callback(res, arr[i]);
  }
  return res;
}
```

2.

```javascript
function filter(arr, callback) {
  return arr.reduce((acc, val) => {
    if (callback(val)) {
      acc.push(val);
      return acc;
    }
    return acc;
  }, []);
}
```

3.

```javascript
function map(arr, callback) {
  return arr.reduce((acc, val) => {
    acc.push(callback(val));
    return acc;
  }, []);
}
```
