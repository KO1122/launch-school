// After Midnight (Part 2)

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(str) {
  let hours = +str.slice(0, 2) % 24;
  let minutes = +str.slice(3);
  return hours * MINUTES_IN_HOUR + minutes;
}

function beforeMidnight(str) {
  let deltaMinutes = MINUTES_IN_DAY - afterMidnight(str);
  if (deltaMinutes === MINUTES_IN_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
