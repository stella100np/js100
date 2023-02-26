/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] > 0) {
      return
    }
    if (nums[i] == nums[i - 1]) {
      continue
    }
    while (left < right) {
      let _sum = nums[i] + nums[left] + nums[right]
      if (_sum > 0) {
        right--
      } else if (_sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left], nums[right]])
        //TODO:
        while (right > left && nums[right] == nums[right - 1]) {
          right--
        }
        while (right > left && nums[left] == nums[left + 1]) {
          left++
        }
        right--
        left++
      }


    }

  }
};