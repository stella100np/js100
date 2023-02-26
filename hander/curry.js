function curry(fn) {
  return function curried(...args) {
    if (args.length == fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const addCur = curry(add);
console.log(addCur(1)(2)(3));
