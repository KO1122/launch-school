function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
  this.checkBatteryLevel = function () {
    console.log("The battery level of this phone is ...");
  };
  this.displayInfo = function () {
    console.log(`${brand} ${model} ${releaseYear}`);
  };
}

let phone1 = new Smartphone("Apple", "iPhone 12", 2020);
let phone2 = new Smartphone("Samsung", "Galaxy S21", 2021);

/*
Type of the objects: Smartphone
Constructor function: Smartphone function 
Instance objects: Objects assigned to phone1 and phone2
*/
