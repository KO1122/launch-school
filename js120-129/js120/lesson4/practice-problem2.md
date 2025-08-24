# Code Reuse with Mixins

1.

```javascript
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  },
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

let car = new Car();
let truck = new Truck();
console.log("goFast" in car);
console.log("goFast" in truck);
```

2. The `this` keyword in a method has a method execution context and refers to the object that calls the method. The constructor property references the class that an object belongs to.
