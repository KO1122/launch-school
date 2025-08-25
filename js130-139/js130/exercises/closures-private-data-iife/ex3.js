// Make a Stack

let newStack = function () {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      for (let val of stack) {
        console.log(val);
      }
    },
  };
};
