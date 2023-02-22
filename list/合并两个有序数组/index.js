/**
 * 
 * @param {Number[]} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}