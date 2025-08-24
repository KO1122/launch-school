function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Number is not an integer");
    return;
  }
  let parity = num % 2 ? "odd" : "even";
  console.log(parity);
}
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(3.7);
