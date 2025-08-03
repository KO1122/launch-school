1. advice.replaceAll("important", "urgent");
2. numbers.slice().reverse(), [...numbers].sort((num1, num2) => num2 - num1)
3. numbers.includes(number1)
4. "Four score and " + famousWords  
   "Four score and ".concat(famousWords)
5. numbers.splice(2, 1);
6. let newFlintstones = flintstones.flat();
7. Object.entries(flintstones).filter((entry) => entry[0] === "Barney").pop();
8. Array.isArray(numbers)  
   Array.isArray(table)
9. let padding = Math.floor((40 - title.length) / 2);  
   title.padStart(padding + title.length);
10. statement1
    .split(" ")
    .reduce((acc, word) => acc + word.includes("t"), 0);
