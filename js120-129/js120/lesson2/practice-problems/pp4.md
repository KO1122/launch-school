# Practice Problems: Dealing with Context Loss

1. It will output "undefined undefined is a undefined". The difference between actual and desired output is due to the fact that the turk.getDescription method is being invoked in a function execution context where this is bound to the global object.
2.

```javascript
let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);
```

3.

```javascript
let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);
```

4. The code will not produce the following output. When the forEach function invokes its fallback function, the fallback's execution context will be bound to the global object.

5.

```javascript
const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    let self = this;
    this.titles.forEach(function (title) {
      console.log(self.seriesTitle + ": " + title);
    });
  },
};

TESgames.listGames();
```

6.

```javascript
const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + ": " + title);
    }, this);
  },
};

TESgames.listGames();
```

7.

```javascript
const TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames: function () {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ": " + title);
    });
  },
};

TESgames.listGames();
```

8. The value of foo.a will be 0.
9.

```javascript
let foo = {
  a: 0,
  incrementA: function () {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);
```
