// What does the following code log to the console, and why?
function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

// The following code logs "Product2", "Product3" and "Product not found!". The serial value matches case "113" and so "Product2" will be logged to the console. Since there is no break statement to stop the fall-through, all subsequent cases will be executed as well.
