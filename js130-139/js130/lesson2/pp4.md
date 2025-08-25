# Practice Problems: Shorthand Notation

1.

```javascript
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
```

2.

```javascript
function foo() {
  return {
    bar: function () {
      console.log("bar");
    },
    qux: function (arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function (arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}
```

3.

```javascript
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;
```

4.

```javascript
function foo(arr) {
  return [arr[2], 5, arr[0]];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];
```

5.

```javascript
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);
```

6.

```javascript
function product(numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product([2, 3, 4, 5]);
```

7.

```javascript
const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo); // 42
console.log(rest); // { bar: 3.1415, qux: 'abc' }
```

8.

```javascript
let first = obj.first;
let second = obj.second;
let rest = {
  third: obj.third,
  rest: obj.rest,
};
```

9.

```javascript
let [one, two, three] = arr;
let { a, b, c } = obj;
```

10.

```javascript
let [first, ...arr2] = arr;
```

11.

```javascript
let [, second] = arr;
```

12.

```javascript
const obj = { a: "a", b: "b", c: "c" };
let { c: tail, ...obj2 } = obj;
console.log(tail);
console.log(obj2);
```

13.

```javascript
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
```

14.

```javascript
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(...[1, 2, 3, 4]));
```

15.

```javascript
const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));
```

Only the first two elements in `arr` are being passed as arguments to prod so the result will be 2.

16. In line 7, `{...obj}` on the right side uses the spread operator to separate `obj` to its properties. These properties are placed into a new object and assigned to the `obj2` variable. In line 8, object destructuring and the rest operator is used to combine all of the properties of `obj` into a new `obj3` object.

17.

```javascript
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // added missing code
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type); // cat
console.log(age); // 9
console.log(colors); // [ 'black', 'white' ]
```

18.

```javascript
function func(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["John", "Max", "Well", "Jr", "Doe"];
let { first, last, middle } = func(...arr);
```
