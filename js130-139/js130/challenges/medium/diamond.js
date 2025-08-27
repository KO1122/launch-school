// 1: Diamond

class Diamond {
  static makeDiamond(letter) {
    let charCodeA = "A".charCodeAt();
    let start = 1;
    let end = letter.charCodeAt() - charCodeA + 1;

    let result = [];
    for (let i = start; i <= end; i++) {
      let char = String.fromCharCode(i + charCodeA - 1);
      let endSpace = " ".repeat(end - i);

      if (i === 1) {
        result.push(`${endSpace}${char}${endSpace}\n`);
      } else {
        let midSpace = " ".repeat(2 * (i - 1) - 1);
        result.push(`${endSpace}${char}${midSpace}${char}${endSpace}\n`);
      }
    }

    let reversePart = result.slice(0, end - 1).reverse();
    return result.concat(reversePart).join("");
  }
}

module.exports = Diamond;
