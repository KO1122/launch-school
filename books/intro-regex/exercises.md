# Introduction to Regular Expressions

## Basic Matching

1. /K/
2. /h/i
3. /dragon/
4. /(banana|orange|apple|strawberry)/
5. /(,| )/
6. /(blue|black)berry/

## Character Classes

1. /[kKs]/
2. /[bc][aou]t/i
3. /[0-9a-jA-J]/
4. /[A-WYZa-wyz]/
5. The pattern is not valid because it will include spaces and numbers.
6. /[^a-z \n\r]/i
7. They are not equivalent regex. The first one will match either ABC or abc, while the second one would match any string with 3 characters where a or A is the first, b or B is the second and c or C is the third character. One such counterexample is the string aBc.
8. They are equivalent.
9. /\[\^[0-9A-Za-z]-[0-9A-Za-z]\]/

## Character Class Shortcuts

1. /\s...\s/
2.
3. /\s[0-9A-F][0-9A-F][0-9A-F][0-9A-F]\s/i
4. /[a-z][a-z][a-z]/i

## Anchors

1. /^The\b/
2. /\bcat$/
3. /\b[a-z][a-z][a-z]\b/i
4. /^(A|The) [a-z][a-z][a-z][a-z] (dog|cat)$/

## Quantifiers

1. /\bb[a-z]*e\b/
2. /^.*\?$/
3. /^.+\?$/
4. /^https?:\/\/\S*$/
5. /^\s*https?:\/\/\S*\s*$/
6. /\bhttps?:\/\/\S*/
7. /\b([a-z]*i){3}[a-z]*\b/i
8. /\S+$/
9. /^,(\d+,){3,6}$/
10. /^(\d+,){2,5}\d+$/
11. /(^(\d+,){2}\d+$|(\d+,){5,}\d+$)/
12. /<h1>.*?<\/h1>/
 
## Using Regular Expressions

1.

```javascript
let isUrl = function(str) {
  return str.match(/^https?:\/\/\w+\.com$/) !== null;
}
```

2.

```javascript
let fields = function(str) {
  return str.split(/[\t ,]+/)
}
```

3.

```javascript
let mysteryMath = function(str) {
  return str.replace(/[+\-*\/]/, '?')
}
```

4.

```javascript
let mysteryMath = function(str) {
  return str.replace(/[+\-*\/]/g, '?')
}
```

5.

```javascript
let danish = function(str) {
  return str.replace(/\b(apple|blueberry|cherry)\b/, 'danish')
}
```