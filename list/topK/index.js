/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  /**
    * 
    * @param {number[]} nums 
    * @param {number} i 
    * @param {number} j 
    */
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp
  }
  let heapSize = nums.length;



  buildHeap(nums, heapSize)
  for (let i = nums.length -1; i>= nums.length-k+1; i--) {
    swap(nums, 0, i)
    heapSize--
    maxHeapify(nums, 0, heapSize)
  }
  return nums[0]



  function buildHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      maxHeapify(nums, i, heapSize)
    }
  }

  /**
   * 
   * @param {number[]} nums 
   * @param {number} i 
   * @param {number} heapSize 
   */
  function maxHeapify(nums, i, heapSize) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < heapSize && nums[left] > nums[largest]) {
      largest = left
    }
    if (right < heapSize && nums[right] > nums[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(nums, i, largest)
      maxHeapify(nums, largest, heapSize)
    }


  }

};