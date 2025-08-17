let Student = {
  name: "Lisa",
  age: 24,
  marks: 78.9,
  display() {
    console.log("Name:", this.name);
  },
};

// create object from Student prototype
let std1 = Object.create(Student);
console.log({ hello: 1 });
console.log(Object.getPrototypeOf(std1));

// Output: Name: Sheeran
