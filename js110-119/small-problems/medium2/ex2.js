// Triangle Sides

function triangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return "invalid";
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  if (arr[0] + arr[1] < arr[2]) return "invalid";
  if (a == b && b == c) return "equilateral";
  if (a == b || b == c || a == c) return "isosceles";
  return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
