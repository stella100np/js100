/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // 整个流程就是上浮下沉
 var findKthLargest = function(nums, k) {
    let heapSize=nums.length

    build(nums,heapSize)
    for(let i=nums.length-1;i>=nums.length-k+1;i--){
        swap(nums,0,i)
        --heapSize // 下沉后的元素不参与到大顶堆的调整
        // 重新调整大顶堆
         maxHeapify(nums, 0, heapSize);
    }
    return nums[0]

    /**
     * 
     * @param {number[]} nums 
     * @param {number} heapSize 
     */
    function build(nums,heapSize) {
        for (let i = Math.floor(heapSize/2)-1; i>=0;i--) {
            maxHeapify(nums,i,heapSize)
        }
    }

    function maxHeapify(nums,i,heapSize) {
        let left = 2*i+1;
        let right = 2*i+2;
        let largest = i;
        if (left< heapSize && nums[left] > nums[largest]) {
            largest = left
        }
        if (right< heapSize && nums[right] > nums[largest]) {
            largest = right
        }
        if (largest !== i) {
            swap(nums,i,largest);
            maxHeapify(nums,largest,heapSize)
        }
    }

    function swap(a,  i,  j){
         let temp = a[i];
         a[i] = a[j];
         a[j] = temp;
    }
 };

 console.log(findKthLargest([4,6,8,5,9,3],3))