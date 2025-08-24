# Function Context

1. The code logs NaN. Anywhere outside of a function, the this keyword is bound to the global object or undefined in strict mode.
2. `this` in a function execution context refers to the global object.

```javascript
let franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    let self = this;
    return [1, 2, 3].map(function (number) {
      return self.name + " " + number;
    });
  },
};
```

3.

```javascript
let franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    return [1, 2, 3].map(
      function (number) {
        return this.name + " " + number;
      }.bind(this)
    );
  },
};
```

4.

```javascript
function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function (value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}
```
