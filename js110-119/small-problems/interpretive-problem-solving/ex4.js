// Seeing Stars

function star(n) {
  let half = Math.floor(n / 2);
  let res = [];
  for (let i = 0; i < half; i++) {
    let outerSpaces = " ".repeat(i);
    let innerSpaces = " ".repeat((n - 3 - i * 2) / 2);
    res.push(`${outerSpaces}*${innerSpaces}*${innerSpaces}*${outerSpaces}`);
  }
  res.push("*".repeat(n));
  res = res.concat(res.slice(0, half).reverse());
  console.log(res.join("\n"));
}

star(7);
star(9);
