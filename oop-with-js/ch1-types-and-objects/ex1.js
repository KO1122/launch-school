/*
Create an object that represents a Cessna 152 aircraft. The aircraft should include information that shows its fuel capacity of 24.5 gallons and a cruising speed of 111 knots. The aircraft should be able to take off and land.

Identify the state and behavior items in this object.
*/

let cessna = {
  fuelCapacity: 24.5,
  cruisingSpeed: 111,
  takeOff() {
    console.log("Aircraft is taking off!");
  },
  land() {
    console.log("Aircraft is landing!");
  },
};

/* 
State: fuelCapacity, cruisingSpeed
Behavior: takeOff(), land()
*/
