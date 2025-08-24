// Rotation (Part 3)

function rotateRightmostDigits(num, count) {
  let str = String(num);
  let firstPart = str.slice(0, str.length - count);
  let rotatedPart = str.slice(str.length - count).split("");
  rotatedPart.push(rotatedPart.shift());
  return Number(firstPart + rotatedPart.join(""));
}

function maxRotation(num) {
  let res = String(num);
  for (let i = res.length; i > 1; i--) {
    res = rotateRightmostDigits(res, i);
  }
  return res;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
