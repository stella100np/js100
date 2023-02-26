/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let first_point = len1 - 1;
  let sec_point = len2 - 1;

  let result = "";
  let add = 0;
  //NOTE: 指针可以为0
  while (first_point >= 0 || sec_point >= 0 || add !== 0) {
    let x1 = first_point >= 0 ? parseInt(num1[first_point]) : 0;
    let x2 = sec_point >= 0 ? parseInt(num2[sec_point]) : 0;
    //NOTE:加上进位
    let sum = x1 + x2 + add;
    result = `${sum % 10}` + result;
    add = Math.floor(sum / 10);
    first_point--;
    sec_point--;
  }
  return result;
};
