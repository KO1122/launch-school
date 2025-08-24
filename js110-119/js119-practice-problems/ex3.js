const p = console.log;

function isCorrectIdx(i, j) {
  return (i + 1) % 3 === 0 && (j + 1) % 2 === 0;
}

function toWeirdCase(original) {
  let res = "";
  let arr = original.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isCorrectIdx(i, j)) {
        res += arr[i][j].toUpperCase();
      } else {
        res += arr[i][j];
      }
    }
    if (i < arr.length - 1) {
      res += " ";
    }
  }
  return res;
}

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
