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
