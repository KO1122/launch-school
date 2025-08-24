const p = console.log;

function isMatch(i, str, target) {
  return str.slice(i, i + target.length) === target;
}

function countSubstrings(str, target) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (isMatch(i, str, target)) {
      i += target.length;
      i--;
      cnt++;
    }
  }
  return cnt;
}

p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
