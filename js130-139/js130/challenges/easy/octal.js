// 7: Octal

class Octal {
  constructor(octalStr) {
    this.octalStr = octalStr;
  }

  isValidOctal(char) {
    return char >= 0 && char <= 7;
  }

  toDecimal() {
    let decimal = 0;
    let multiplier = 1;
    for (let i = this.octalStr.length - 1; i >= 0; i--) {
      let char = this.octalStr[i];
      if (!this.isValidOctal(char)) {
        return 0;
      }
      decimal += char * multiplier;
      multiplier *= 8;
    }
    return decimal;
  }
}

module.exports = Octal;
