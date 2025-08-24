// How big is the room?
// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

let readlineSync = require("readline-sync");
console.log("Enter the room length (in meters):");
let length = readlineSync.prompt();
console.log("Enter the room width (in meters):");
let width = readlineSync.prompt();
let areaInMeters = length * width;
let areaInFeet = areaInMeters * 10.7639;
console.log("Area of room (in square meters): ", areaInMeters);
console.log("Area of room (in square feet): ", areaInFeet);
