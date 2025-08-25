// Encrypted Pioneers

const namesStr = `Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq voa Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu`;

const lowercase = "abcdefghijklmnopqrstuvwxyz";

let decryptRot13 = function (name) {
  let decryptedWords = [];
  let words = name.split(" ");

  for (let word of words) {
    let decryptedWord = "";
    for (let j = 0; j < word.length; j++) {
      let lowerChar = word[j].toLowerCase();
      let idx = lowercase.indexOf(lowerChar);

      if (idx === -1) {
        decryptedWord += lowerChar;
        continue;
      }

      let decryptedIdx = (idx - 13 + 26) % 26;
      let decryptedChar = lowercase[decryptedIdx];
      if (word[j] === lowerChar) {
        decryptedWord += decryptedChar;
      } else {
        decryptedWord += decryptedChar.toUpperCase();
      }
    }
    decryptedWords.push(decryptedWord);
  }

  return decryptedWords.join(" ");
};

let decipher = function (namesStr) {
  let namesArr = namesStr.split("\n");
  for (let name of namesArr) {
    console.log(decryptRot13(name));
  }
};

decipher(namesStr);
