// 9: Beer Song

class BeerSong {
  static verse(number) {
    let result = "";
    if (number > 1) {
      result += `${number} bottles of beer on the wall, ${number} bottles of beer.\n`;
      result += `Take one down and pass it around, ${number - 1} bottle${
        number > 2 ? "s" : ""
      } of beer on the wall.\n`;
    } else if (number === 1) {
      result += "1 bottle of beer on the wall, 1 bottle of beer.\n";
      result +=
        "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else {
      result +=
        "No more bottles of beer on the wall, no more bottles of beer.\n";
      result += `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }
    return result;
  }

  static verses(start, end) {
    if (end === undefined) {
      end = start;
    }

    let result = "";
    for (let i = start; i >= end; i--) {
      result += this.verse(i);
      if (i > end) {
        result += "\n";
      }
    }

    return result;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
