// Next Featured Number Higher than a Given Value

const MAX_VAL = 9876543201;

function isFeaturedNum(num) {
  if (num % 2 === 0) return false;
  let cnts = {};
  while (num) {
    let digit = num % 10;
    if (cnts[digit]) return false;
    cnts[digit] = true;
    num = Math.floor(num / 10);
  }
  return true;
}

function featured(num) {
  let multipleOf7;
  let mult = 1;

  while (true) {
    multipleOf7 = 7 * mult;
    if (multipleOf7 > MAX_VAL)
      return "There is no possible number that fulfills those requirements.";
    if (multipleOf7 > num && isFeaturedNum(multipleOf7)) {
      return multipleOf7;
    }
    mult++;
  }
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
