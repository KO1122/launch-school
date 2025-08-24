1.

```javascript
let str = "The Flintstones Rock!";
for (let i = 1; i <= 10; i++) {
  console.log(" ".repeat(i) + str);
}
```

2.

```javascript
let newStr = "";
for (let char of munstersDescription) {
  if (char === char.toLowerCase()) {
    newStr += char.toUpperCase();
  } else {
    newStr += char.toLowerCase();
  }
}
console.log(newStr);
```

3.

```javascript
while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
}
```

Bonus: It tests if the divisor is a factor of number

4. Yes, there is a difference between the two implementations. The first implementation mutates the original buffer array and then returns a reference to the array. The second implementation reassigns the buffer parameter to a new array and then returns a reference to the new array.
5. 0.89999999, false
6. false, Number.isNaN()
7. 34
8. Yes, Object.values() returns an array whose elements are the values of an object. When the forEach method is called, the familyMember parameter in the callback function refers to all of the . Since objects are mutable, the addition and reassignment operations being done to the age and gender properties of the munsters object are persisted even after the function finishes its execution.
9. "paper"
10. "no"
