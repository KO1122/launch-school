# Practice Problems: Object Prototypes

1. It will log the number 2 to the console. The baz variable does not have its own foo property so JS must look up the prototype chain to see if any of baz's prototypes has it. Fortunately, the qux object has a foo property with the value of 1. With this in mind, 1 + 1 equals 2 and this is what will be outputted.
2. It will log 3 to the console. baz has a foo property of 2 and qux has a foo property of 1.
3. It will log 4. Since baz doesn't have a foo property, JS must search up the prototype chain and finds the property in qux. Since qux has its foo property reassigned to 2, 2 + 2 which is 4 is outputted.

4.

```javascript
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
}
```

5. These loops will not always log the same results. This is because a for...in loop includes the properties of an object's prototypes. However, the `Object.keys()` method does not include properties of prototypes.
6. Use `Object.create(null)`. You can determine whether an object has a prototype by using `Object.getPrototypeOf(obj)`.
