// function compose(...funcs) {
//     return function(arg) {
//       return funcs.reduceRight((acc, cur) => cur(acc), arg);
//     }
//   }
  const compose = (...fns) => value => fns.reduceRight ((acc, fn) => fn (acc), value);
  
  function addOne(num) {
    return num + 1;
  }
  
  function double(num) {
    return num * 2;
  }
  
  function square(num) {
    return num ** 2;
  }
  
  const addOneThenDoubleThenSquare = compose(square, double, addOne);
  
  const result = addOneThenDoubleThenSquare(2);
  
  console.log(result); // 81
  