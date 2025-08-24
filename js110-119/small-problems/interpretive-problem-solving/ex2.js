// Diamonds

function diamond(n) {
  let half = Math.floor(n / 2);
  let diamonds = [];
  for (let i = 0; i <= half; i++) {
    let numOfDiamonds = i * 2 + 1;
    let spaces = " ".repeat((n - numOfDiamonds) / 2);
    let content = "*".repeat(numOfDiamonds);
    diamonds.push(spaces + content + spaces + "\n");
  }
  let res = diamonds.concat(diamonds.slice(0, half).reverse());
  console.log(res.join(""));
}

diamond(1);
diamond(3);
diamond(9);
