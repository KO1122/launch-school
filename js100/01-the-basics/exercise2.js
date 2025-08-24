let onesPlace = 4936 % 10;
let tensPlace = ((4936 - onesPlace) / 10) % 10;
let hundredsPlace = ((4936 - onesPlace - tensPlace * 10) / 100) % 10;
let thousandsPlace =
  ((4936 - onesPlace - tensPlace * 10 - hundredsPlace * 100) / 1000) % 10;
console.log(thousandsPlace, hundredsPlace, tensPlace, onesPlace);
