// Convert a Number to a String

function integerToString(num) {
  if (num === 0) return "0";

  let numToStrObj = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  let res = "";
  while (num > 0) {
    let digit = num % 10;
    res = numToStrObj[digit] + res;
    num = Math.floor(num / 10);
  }

  return res;
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
