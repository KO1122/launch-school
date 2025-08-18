# Practice Problems: Object Orientation

1.

```javascript
let scissors = {
  id: 0,
  name: "Scissors",
  stock: 8,
  price: 10,
};

let drill = {
  id: 1,
  name: "Cordless Drill",
  stock: 15,
  price: 45,
};
```

2.

```javascript
function setProductPrice(product, newPrice) {
  if (newPrice < 0) {
    console.log("Invalid price");
  } else {
    product.price = newPrice;
  }
}
```

3.

```javascript
function describeProduct(product) {
  console.log("Name: " + product.name);
  console.log("ID: " + product.id);
  console.log("Price: $" + product.price);
  console.log("Stock: " + product.stock);
}
```

4.

```javascript
let scissors = {
  id: 0,
  name: "Scissors",
  stock: 8,
  price: 10,
  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log("Invalid price!");
    }
  },

  describe() {
    console.log("Name: " + this.name);
    console.log("ID: " + this.id);
    console.log("Price: $" + this.price);
    console.log("Stock: " + this.stock);
  },
};

let drill = {
  id: 1,
  name: "Cordless Drill",
  stock: 15,
  price: 45,
  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log("Invalid price!");
    }
  },

  describe() {
    console.log("Name: " + this.name);
    console.log("ID: " + this.id);
    console.log("Price: $" + this.price);
    console.log("Stock: " + this.stock);
  },
};
```

5.

```javascript
function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log("Invalid price!");
      }
    },

    describe() {
      console.log("Name: " + this.name);
      console.log("ID: " + this.id);
      console.log("Price: $" + this.price);
      console.log("Stock: " + this.stock);
    },
  };
}
```

6.

```javascript
let scissors = createProduct(0, "Scissors", 10, 8);
let drill = createProduct(1, "Cordless Drill", 15, 45);
```
