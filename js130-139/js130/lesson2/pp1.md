# Practice Problems: Hoisting and the var Statement

1. The code will display "Bye". If a function and var declaration share the same name, the var declaration will be discarded so foo will refer to the function declaration.
2. undefined, "Hello", "Bye", 2

3.

```javascript
bar();

function bar() {
  console.log("foo!");
}
```

4. NaN
5.

```javascript
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function () {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
```

6.

```javascript
function Pet(name, image) {
  this.name = name;
  this.image = image;
}

var catImage;
var pudding;
let Image;

Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
```
