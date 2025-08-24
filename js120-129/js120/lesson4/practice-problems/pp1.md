# Practice Problems: Subtyping with Classes

1. The `play` method in the Bingo class would override the one in the Game class. This means that the Bingo class would have its own play implementation unique from the Game class.

2.

```javascript
class Greeting {
  greet(str) {
    console.log(str);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}
```
