// Convert a Signed Number to a String

function signedIntegerToString(num) {
  if (num > 0) {
    return "+" + integerToString(num);
  } else if (num < 0) {
    return "-" + integerToString(-num);
  } else {
    return "0";
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

function integerToString(num) {
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
