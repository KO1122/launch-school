const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function getPrefixes(str) {
  let prefixes = [];
  for (let i = 0; i < str.length; i++) {
    prefixes.push(str.slice(0, i + 1));
  }
  return prefixes;
}

function isValid(prefix, str) {
  let i = 0;
  while (i < str.length) {
    if (prefix === str.slice(i, i + prefix.length)) {
      i += prefix.length;
    } else {
      return false;
    }
  }
  return true;
}

function repeatedSubstring(str) {
  let prefixes = getPrefixes(str);

  for (let prefix of prefixes) {
    if (isValid(prefix, str)) {
      return [prefix, str.length / prefix.length];
    }
  }
}

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
