// Unlucky Days

const FRIDAY = 5;

function fridayThe13ths(year) {
  let cnt = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === FRIDAY) {
      cnt++;
    }
  }
  return cnt;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
