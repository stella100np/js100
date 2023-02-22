function flatten(arr) {
  return arr.reduce(function(acc, val) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}