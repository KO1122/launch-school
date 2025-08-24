const p = console.log;

function longestVowelSubstring(str) {
  const VOWELS = "aeiou";
  let cnt = 0;
  let mxCnt = 0;
  for (let char of str) {
    if (VOWELS.includes(char)) {
      cnt++;
      mxCnt = Math.max(cnt, mxCnt);
    } else {
      cnt = 0;
    }
  }
  return mxCnt;
}

p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("many") === 1);
p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
