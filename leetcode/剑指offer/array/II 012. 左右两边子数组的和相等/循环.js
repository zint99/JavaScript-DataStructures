/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    循环，依次测试每个元素是否为中心
  */
var pivotIndex = function (nums) {
  let pivot, leftSum, rightSum
  ;(left = []), (right = [])
  for (let i = 0; i < nums.length; i++) {
    pivot = nums[i]
    left = nums.slice(0, i)
    right = nums.slice(i + 1)
    if (left.length) {
      leftSum = left.reduce((p, c) => p + c)
    } else {
      leftSum = 0
    }
    if (right.length) {
      rightSum = right.reduce((p, c) => p + c)
    } else {
      rightSum = 0
    }
    if (leftSum === rightSum) {
      return i
    }
  }
  return -1
}
