# Problems

## Assignment: Asynchronous Execution with setTimeout

1.

```javascript
function delayLog() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}

delayLog();
```

2. A var declaration has function scope. Due to closure, each invocation of the callback function gets the final value of delay.

3.

```javascript
setTimeout(function () {
  // 1
  console.log("Once"); // 5
}, 1000);

setTimeout(function () {
  // 2
  console.log("upon"); // 7
}, 3000);

setTimeout(function () {
  // 3
  console.log("a"); // 6
}, 2000);

setTimeout(function () {
  // 4
  console.log("time"); // 8
}, 4000);
```

4. g, f, d, z, n, s, q
5.

```javascript
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}
```

## Assignment: Repeating Execution with setInterval

https://launchschool.com/gists/b500899b

1.

```javascript
function startCounting() {
  let i = 1;
  setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
}
startCounting();
```

2.

```javascript
function startCounting() {
  let i = 1;
  let counterId = setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();
setTimeout(() => stopCounting(counterId), 10000);
```
