function getUUID() {
  const SECTIONS = [8, 4, 4, 4, 12];
  let res = [];
  for (let section of SECTIONS) {
    let hexadecimalStr = "";
    for (let i = 0; i < section; i++) {
      hexadecimalStr += getRandomHexadecimalChar();
    }
    res.push(hexadecimalStr);
  }
  return res.join("-");
}

function getRandomHexadecimalChar() {
  let choices = "0123456789abcdef";
  let randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
}

console.log(getUUID());
