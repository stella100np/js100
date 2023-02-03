/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  //如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）
  let start = 0;
  //窗口的结束位置就是遍历数组的指针
  let end = 0;

  // 满足其和 ≥ s 的长度最小的 连续 子数组
  let sum = 0; 
  let ans = Infinity;
  while (end < nums.length) {
    sum = sum + nums[end]
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum = sum - nums[start]
      start++
    }
    end++
  }
  return ans === Infinity ? 0 : ans
}

// 滑动窗口
console.log(minSubArrayLen(7,[2,3,1,2,4,3] ))