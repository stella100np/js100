/**
 *
 * @param {Number[]} nums
 */
var permute = function (nums) {
  const result = [];
  let path = [];
  backTracking(nums, nums.length, []);
  return result;

  function backTracking(nums, k, used) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backTracking(nums, k, used);
      used[i] = false;
      path.pop();
    }
  }
};

console.log(permute([1,2,3]))