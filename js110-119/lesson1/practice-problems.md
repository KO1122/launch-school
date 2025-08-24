# Practice Problems

1. The return value will be [1, 2, 3]. The filter method performs selection based on the truthiness of the callback function. Since the callback will always return the truthy value 'hi', none of the elements of the array will be filtered out.
2. The return value will be [undefined, undefined, undefined]. The map method transforms the elements of an array based on the callback function. Since there is no return statement in the callback, it will return undefined.
3. The return value will be [1, 4, 9]. The callback function returns the value of the element squared.
4. The return value is 11. The pop method returns the last value in the array which is 'caterpillar'. It's length is 11.
5. The callback's return value will be 2, 4, 6. The return value of every will be true.
6. The return value will be [ 1, 1, 1, 1, 1 ]. The fill() method changes all elements within a range of indices in an array to a given value. It is a mutating method. We can find out though MDN.
7. The return value will be [undefined, 'bear']. The callback function returns the element if the element's length is greater than 3. However, it implicitly returns undefined otherwise.
8.

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};
for (let i = 0; i < flintstones.length; i++) {
  obj[flintstones[i]] = i;
}
console.log(obj);
```

9.

```javascript
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let sumOfAges = 0;
Object.values(ages).forEach((age) => {
  sumOfAges += age;
});
console.log(sumOfAges);
```

10.

```javascript
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let minAge = Infinity;
Object.values(ages).forEach((age) => (minAge = Math.min(minAge, age)));
console.log(minAge);
```

11.

```javascript
let statement = "The Flintstones Rock";
let obj = {};
statement
  .split("")
  .filter((char) => char !== " ")
  .forEach((char) => {
    obj[char] = obj[char] || 0;
    obj[char]++;
  });
console.log(obj);
```
