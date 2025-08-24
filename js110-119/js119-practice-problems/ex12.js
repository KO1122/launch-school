const p = console.log;

function isAlphabetical(char) {
  return char >= "a" && char <= "z";
}

function isPangram(str) {
  str = str.toLowerCase();
  let obj = {};
  for (let char of str) {
    if (isAlphabetical(char)) {
      obj[char] = true;
    }
  }
  return Object.keys(obj).length === 26;
}

p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
