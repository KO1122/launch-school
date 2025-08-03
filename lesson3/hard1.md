1. No, the two functions will return different things.
2. It outputs { first: [1, 2] }
3. A. ["one"], ["two"], ["three"]
   B. ["one"], ["two"], ["three"]
   C. ["two"], ["three"], ["one"]
4. Variables: boo function, scare parameter, myBoo, console, halloweenCollection, myBoo global  
    Primitive values (13):

   - scare parameter value "Happy Halloween",
   - myBoo variable value "HAPPY HALLOWEEN!!!",
   - 'greet', 'scare', 'wish'
   - "Happy Halloween", "Boo", "May all your pumpkins be glowing"
   - "greet", "Happy Halloween"
     Objects:
     - boo function
     - halloweenCollection's assigned object literal

5.

```javascript
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}
```
