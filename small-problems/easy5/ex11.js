// After Midnight (Part 1)

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(minutes) {
  let clockHours;
  let clockMinutes;

  let hours = minutes / MINUTES_IN_HOUR;
  let hour24Format = Math.floor(hours) % HOURS_IN_DAY;

  clockMinutes = Math.floor((hours - Math.floor(hours)) * MINUTES_IN_HOUR);

  if (minutes >= 0) {
    clockHours = hour24Format;
  } else {
    clockHours = (HOURS_IN_DAY + Math.ceil(hour24Format)) % HOURS_IN_DAY;
  }

  clockHours = String(clockHours).padStart(2, "0");
  clockMinutes = String(clockMinutes).padStart(2, "0");
  return `${clockHours}:${clockMinutes}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
