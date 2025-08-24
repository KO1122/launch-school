function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

Smartphone.prototype.checkBatteryLevel = function () {
  return `${this.brand} ${this.model} has 75% ` + "battery remaining.";
};

Smartphone.prototype.displayInfo = function () {
  return `${this.releaseYear} ${this.brand} ` + `${this.model}`;
};

let phone1 = new Smartphone("Apple", "iPhone 12", 2020);
let phone2 = new Smartphone("Samsung", "Galaxy S21", 2021);
