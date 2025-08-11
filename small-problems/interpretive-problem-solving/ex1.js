// 1000 Lights
function lightsOn(switches) {
  let numArr = [];
  for (let i = 1; i <= switches; i++) {
    numArr.push(i);
  }
  let switchArr = new Array(switches).fill(true);

  for (let i = 2; i <= switches; i++) {
    for (let j = i - 1; j < switches; j += i) {
      switchArr[j] = !switchArr[j];
    }
  }

  return numArr.filter((_, i) => switchArr[i]);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
