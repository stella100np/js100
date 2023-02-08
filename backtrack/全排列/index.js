/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  let path = [];
  let used = new Array(nums.length).fill(false)

  /**
   * 
   * @param {number[]} nums 
   * @param {number[]} path 
   */
  function backtracking(nums, used) {
    if (path.length == nums.length) {
      result.push([...path])
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }

      used[i] = true;
      path.push(nums[i])
      backtracking(nums, used)
      path.pop()
      used[i] = false;
    }
  }
  backtracking(nums,used)
  return result
};