class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(width) {
    if (width <= 0) throw new RangeError("width must be positive");
    this.#width = width;
  }

  set height(height) {
    if (height <= 0) throw new RangeError("height must be positive");
    this.#height = height;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}
