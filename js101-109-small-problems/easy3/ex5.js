// Right Triangles
// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

function triangle(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += " ".repeat(n - i - 1) + "*".repeat(i + 1) + "\n";
  }
  console.log(res);
}

triangle(5);
triangle(9);
