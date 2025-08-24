# Practice Problems: Objects and Factories

1. Create three objects that represent the three books shown above. The method for the "Get Description" behavior should return a string like the following:

```javascript
"Me Talk Pretty One Day was written by David Sedaris.";
```

```javascript
let book1 = {
  title: "Mythos",
  author: "Stephen Fry",
  getDescription: function () {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book2 = {
  title: "Me Talk Pretty One Day",
  author: "David Sedaris",
  getDescription: function () {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book3 = {
  title: "Aunts aren't Gentlemen",
  author: "PG Wodehouse",
  getDescription: function () {
    return `${this.title} was written by ${this.author}.`;
  },
};
```

1. The code I wrote for problem #1 has a lot of unnecessary code. It repeats the getDescription method for each object.
2. Give

```javascript
function createBook(title, author) {
  return {
    title: title,
    author: author,

    getDescription: function () {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

book1.getDescription(); // "Mythos was written by Stephen Fry."
book2.getDescription(); // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription(); // "Aunts aren't Gentlemen was written by PG Wodehouse"
```

4. We now want to track which books we have and haven't read. Update the factory function so that it returns a book object that includes a property read that has an initial value of false.

```javascript
function createBook(title, author) {
  return {
    title: title,
    author: author,
    read: false,

    getDescription: function () {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}
```

5. Suppose that we want to add a book that we've already read. Modify the factory function to use an optional read parameter with a default value of false.

```javascript
function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription: function () {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}
```

6. Let's add a method, readBook, that marks a book object as read by setting the read property to true:

```javascript
function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription: function () {
      return `${this.title} was written by ${this.author}.`;
    },
    readBook: function () {
      this.read = true;
    },
  };
}
```

7. Finally, let's update getDescription function to reflect the read state directly, For instance:

```javascript
function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription: function () {
      return `${this.title} was written by ${this.author}. I have${
        this.read ? "" : "n't"
      } read it.`;
    },
    readBook: function () {
      this.read = true;
    },
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
book1.getDescription(); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
book1.getDescription(); // Mythos was written by David Fry. I have read it.
```
