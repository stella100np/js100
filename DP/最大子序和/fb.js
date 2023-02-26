/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Array(n)
  dp[0] = 1;
  dp[1] = 2;
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
};