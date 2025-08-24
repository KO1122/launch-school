// Lettercase Percentage Ratio

function isLowerCase(char) {
  return char >= "a" && char <= "z";
}

function isUpperCase(char) {
  return char >= "A" && char <= "Z";
}

function letterPercentages(str) {
  let lowerCnt = 0;
  let upperCnt = 0;
  let neitherCnt = 0;
  let length = str.length;
  for (let char of str) {
    if (isLowerCase(char)) lowerCnt++;
    else if (isUpperCase(char)) upperCnt++;
    else neitherCnt++;
  }
  let lowerPercent = ((lowerCnt / length) * 100).toFixed(2);
  let upperPercent = ((upperCnt / length) * 100).toFixed(2);
  let neitherPercent = ((neitherCnt / length) * 100).toFixed(2);
  return {
    lowercase: lowerPercent,
    uppercase: upperPercent,
    neither: neitherPercent,
  };
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
