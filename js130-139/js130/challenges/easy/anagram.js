// 4: Anagrams

class Anagram {
  constructor(word) {
    this.word = word;
  }

  getSortedChars(word) {
    return word.split("").sort();
  }

  isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    if (word1 === word2) return false;
    if (word1.length !== word2.length) return false;
    let charArr1 = this.getSortedChars(word1);
    let charArr2 = this.getSortedChars(word2);
    for (let i = 0; i < charArr1.length; i++) {
      if (charArr1[i] !== charArr2[i]) return false;
    }
    return true;
  }

  match(possibleMatches) {
    let anagrams = [];
    for (let word of possibleMatches) {
      if (this.isAnagram(this.word, word)) {
        anagrams.push(word);
      }
    }
    return anagrams;
  }
}

module.exports = Anagram;
