// How Many?

function countOccurrences(vehicles) {
  let occurences = {};
  for (let vehicle of vehicles) {
    occurences[vehicle] = occurences[vehicle] || 0;
    occurences[vehicle]++;
  }
  for (let [key, value] of Object.entries(occurences)) {
    console.log(`${key} => ${value}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
