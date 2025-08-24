class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log(`Vehicle is accelerating!`);
  }

  decelerate() {
    console.log(`Vehicle is decelerating!`);
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log(`Car is honking!`);
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log(`Boat is anchoring!`);
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airlineName) {
    super(color, weight);
    this.airlineName = airlineName;
  }

  takeOff() {
    console.log(`Plane is taking off!`);
  }

  land() {
    console.log(`Plane is landing!`);
  }
}

let car = new Car("red", 3300, "BXY334");
let boat = new Boat("yellow", 12000, "Bahamas");
let plane = new Plane("blue", 83000, "Southwest");

// Demonstrate that cars and boats are both instance objects of the Vehicle class
console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);

// Cars are instance objects of the Car class, but boats are not instance objects of the Car class.
console.log(car instanceof Car);
console.log(boat instanceof Car);
