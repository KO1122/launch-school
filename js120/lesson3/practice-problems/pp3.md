# Practice Problems - Constructors and Prototypes

1. The code logs NaN twice. When `RECTANGLE.area()` is invoked, its execution context is the `RECTANGLE` object itself which doesn't have a width or height property. This will be the same case when `RECTANGLE.perimeter()` is called.

2.

```javascript
let RECTANGLE = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);
```

3.

```javascript
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty("area")); // => false
```

4. The code will log true. The `ninja` instance will invoke the `swingSword` method. However, the instance doesn't have the method. So, JS looks up the prototype chain and finds the method in `ninja`'s object prototype.
5. An error will occur. Even though we're reassigning Ninja.prototype to an entirely new object, the ninja object's prototype still refers to the original prototype defined during constructor invocation.

6.

```javascript
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function () {
  this.swung = !this.swung;
  return this;
};

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung); // logs `true`
console.log(ninjaB.swing().swung); // logs `true`
```

7.

```javascript
let ninjaA;

{
  const Ninja = function () {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();
// let ninjaB = Object.create(ninjaA);

console.log(ninjaA.constructor === ninjaB.constructor); // => true
```

8.

```javascript
function User(first, last) {
  if (this instanceof User) {
    this.name = first + " " + last;
  } else {
    return new User(first, last);
  }
}

let name = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe
```
