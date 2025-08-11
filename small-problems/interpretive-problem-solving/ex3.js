// Now I Know My ABCs

function isBlockWord(str) {
  const BLOCKS = [
    "BO",
    "XK",
    "DQ",
    "CP",
    "NA",
    "GT",
    "RE",
    "FS",
    "JW",
    "HU",
    "VI",
    "LY",
    "ZM",
  ];

  str = str.toUpperCase();
  let deleteFlag;
  for (let char of str) {
    deleteFlag = false;
    for (let i = 0; i < BLOCKS.length; i++) {
      if (BLOCKS[i].includes(char)) {
        BLOCKS.splice(i, 1);
        deleteFlag = true;
      }
    }
    if (!deleteFlag) return false;
  }
  return true;
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
