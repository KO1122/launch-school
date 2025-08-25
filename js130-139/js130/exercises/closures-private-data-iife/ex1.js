// Our very own bind()

let myBind = function (func, context) {
  return function () {
    return func.call(context);
  };
};
