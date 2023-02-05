/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length;
  let first_point = len1 - 1;

  let len2 = num2.length;
  let second_point = len2 - 1;

  let add = 0;
  let ans = "";
  while (first_point >= 0 || second_point >= 0 || add !== 0) {
    // 不够的位数前面补零
    const x = first_point >= 0 ? num1.charAt(first_point) - "0" : 0;
    const y = second_point >= 0 ? num2.charAt(second_point) - "0" : 0;

    const result = x + y + add;
    //从前往后拼接
    ans = `${result % 10}` + ans;
    add = Math.floor(result / 10);
    first_point--;
    second_point--;
  }
  return ans;
};

console.log(addStrings("1", "12345"));
