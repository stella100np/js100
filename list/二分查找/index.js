/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1
  let mid = 0
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

//NOTICE: 数组为有序数组，同时题目还强调数组中无重复元素
console.log(binarySearch([1, 2, 3, 4, 7, 9, 10], 7))