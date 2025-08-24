// Convert a String to a Number

function stringToInteger(str) {
  let num = 0;
  let place = Math.pow(10, str.length - 1);
  for (let i = 0; i < str.length; i++) {
    num += str[i] * place;
    place /= 10;
  }
  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
