/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    middle
  while (left <= right) {
    middle = (left + right) >> 1
    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return left
}
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1, 3], 2))
