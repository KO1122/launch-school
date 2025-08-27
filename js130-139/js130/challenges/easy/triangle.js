// 1: Triangles

class Triangle {
  constructor(side1, side2, side3) {
    this.isValidTriangle(side1, side2, side3);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if (
      this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  isValidTriangle(...sides) {
    if (sides.length !== 3) throw new Error("A triangle must have 3 sides.");

    sides.forEach((side) => {
      if (side <= 0) {
        throw new Error("Side lengths must be greater than 0.");
      }
    });

    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] <= sides[2]) {
      throw new Error(
        "The sum of any two sides must exceed the length of the third side."
      );
    }
  }
}

module.exports = Triangle;
