# Pass by Reference vs Pass by Value

1. It will log 'Hello' twice. The changeMyWord function defines a word variable. It will then log the value of word and afterwards convert its value to uppercase. The myWord variable is initialized to 'Hello' on line 6. Following that, the changeMyWord function is called with myWord as its argument. So, the first console.log will print the value of myWord which is 'Hello'. Even though the word variable is reassigned to its previous value converted to uppercase, this will not affect the myWord variable since functions passed with primitive values like strings act like pass-by-value.
2. It will print 'Hello' and then 'HELLO'. The changeMyWord function defines a word variable. It will then log the value of word, reassign word to word.toUpperCase() and then return the word variable's value. The myWord variable is initialized to 'Hello'. Afterwards, the myWord variable is reassigned to the return value of the changeMyWord function with myWord as its argument.
3. It will log 'Hello' twice and then 'HELLO'.
4. It will log ['Hello', 'Goodbye'] and then ['Hi', 'Goodbye']. When an array is passed into a function, it acts like pass-by-reference
5. It will log ['Hello', 'Goodbye'] twice
