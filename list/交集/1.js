function intersection(a, b) {
    let set1 = new Set(a);
    let result = [];
    for (let x of b) {
      if (set1.has(x)) {
        result.push(x);
      }
    }
    return result;
  }

console.log(intersection([1, 23, 4, 5, 0], [1, 59, 20, 3,9,0]));
