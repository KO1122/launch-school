// 5: Scrabble Score

class Scrabble {
  static LETTER_VALUE = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  constructor(word) {
    this.word = word;
  }

  isLetter(char) {
    char = char.toLowerCase();
    return char >= "a" && char <= "z";
  }

  score() {
    if (!this.word) return 0;
    let total = 0;
    for (let char of this.word) {
      if (this.isLetter(char)) {
        for (let letters in Scrabble.LETTER_VALUE) {
          if (letters.includes(char.toUpperCase())) {
            total += Scrabble.LETTER_VALUE[letters];
          }
        }
      }
    }
    return total;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;
