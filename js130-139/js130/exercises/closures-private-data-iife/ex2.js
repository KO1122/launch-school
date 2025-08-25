// myBind() Improved

let myBind = function (func, context, ...args1) {
  return function (...args2) {
    args1.push(...args2);
    return func.call(context, ...args1);
  };
};

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
