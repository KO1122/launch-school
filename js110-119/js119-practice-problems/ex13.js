const p = console.log;

function getCharCountObj(str) {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] || 0;
    obj[char]++;
  }
  return obj;
}

function unscramble(str1, str2) {
  let obj1 = getCharCountObj(str1);
  let obj2 = getCharCountObj(str2);
  for (let char in obj2) {
    if ((obj1[char] || 0) < obj2[char]) {
      return false;
    }
  }
  return true;
}

p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
