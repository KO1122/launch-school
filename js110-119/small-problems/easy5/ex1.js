// Cute Angles

const DMS_MULTIPLIER = 60;

function dms(angleInDegrees) {
  let dmsComponents = [];

  for (let i = 0; i < 3; i++) {
    dmsComponents.push(Math.floor(angleInDegrees));
    angleInDegrees -= Math.floor(angleInDegrees);
    angleInDegrees *= DMS_MULTIPLIER;
  }

  let degree = dmsComponents[0];
  let minute = String(dmsComponents[1]).padStart(2, "0");
  let second = String(dmsComponents[2]).padStart(2, "0");
  return `${degree}°${minute}'${second}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
