// Lettercase Counter

function isAlphabetic(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}
function letterCaseCount(str) {
  let lowercaseCnt = 0;
  let uppercaseCnt = 0;
  let neitherCnt = 0;

  for (let char of str) {
    if (isAlphabetic(char)) {
      if (char === char.toLowerCase()) {
        lowercaseCnt++;
      } else {
        uppercaseCnt++;
      }
    } else {
      neitherCnt++;
    }
  }

  return {
    lowercase: lowercaseCnt,
    uppercase: uppercaseCnt,
    neither: neitherCnt,
  };
}

console.log(letterCaseCount("abCdef 123"));
console.log(letterCaseCount("AbCd +Ef"));
console.log(letterCaseCount("123"));
console.log(letterCaseCount(""));
