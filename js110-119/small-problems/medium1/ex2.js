// Rotation (Part 2)

function rotateRightmostDigits(num, count) {
  let str = String(num);
  let firstPart = str.slice(0, str.length - count);
  let rotatedPart = str.slice(str.length - count).split("");
  rotatedPart.push(rotatedPart.shift());
  return Number(firstPart + rotatedPart.join(""));
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
