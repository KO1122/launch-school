// Convert a String to a Signed Number

function stringToSignedInteger(str) {
  let signFlag = 1;
  let i = 0;
  if ("+-".includes(str[0])) {
    signFlag = str[0] === "+" ? 1 : -1;
    i++;
  }

  let num = 0;
  let place = Math.pow(10, str.length - i - 1);
  for (; i < str.length; i++) {
    num += str[i] * place;
    place /= 10;
  }
  return num * signFlag;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
