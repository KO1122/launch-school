1. Constructor functions use PascalCase.
2. The code will have an error. lizzy is undefined and so cannot invoke the scamper() method.
3.

```javascript
function Lizard() {
  this.scamper = function () {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper();
```
