function Person(name) {
  this.name = name;
  return "hello";
}

let person = new Person("Brad");
console.log(person);
