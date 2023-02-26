// https://leetcode.cn/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = []
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (hash[target - element] !== undefined) {
      return [i, hash[target - element]]
    }
    hash[element] = i
  }
  return []
};