# Practice Problems

1.

```javascript
function makeCounterLogger(start) {
  return function (end) {
    let inc = start < end ? 1 : -1;
    for (let i = start; i !== end; i += inc) {
      console.log(i);
    }
    console.log(end);
  };
}
```

2.

```javascript
function makeList() {
  let list = [];

  return function (arg) {
    let idx = list.indexOf(arg);
    if (arg === undefined) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        list.forEach((item) => console.log(item));
      }
    } else if (idx !== -1) {
      list.splice(idx, 1);
      console.log(`${arg} removed!`);
    } else {
      list.push(arg);
      console.log(`${arg} added!`);
    }
  };
}
```

# More Practice Problems

1.

```javascript
function makeList() {
  return {
    items: [],
    add(item) {
      let idx = this.items.indexOf(item);
      if (idx === -1) {
        this.items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      let idx = this.items.indexOf(item);
      if (idx !== -1) {
        this.items.splice(idx, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach((item) => console.log(item));
      }
    },
  };
}
```

2.

```javascript
function makeList() {
  let items = [];
  return {
    add(item) {
      let idx = items.indexOf(item);
      if (idx === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
    remove(item) {
      let idx = items.indexOf(item);
      if (idx !== -1) {
        items.splice(idx, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach((item) => console.log(item));
      }
    },
  };
}
```
