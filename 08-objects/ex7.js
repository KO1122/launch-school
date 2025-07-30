// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

// The two snippets will not produce the same output. The Object.keys() method will not include any properties from the prototype while the for ... in loop will.
