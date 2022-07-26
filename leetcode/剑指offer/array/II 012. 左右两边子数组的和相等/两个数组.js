/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    用两个数组leftSum,rightSum存放不同中心时左右的和，然后再对比左右和是否相等
  */
var pivotIndex = function (nums) {
  const leftSum = [],
    rightSum = []
  nums.forEach((pivot, index) => {
    leftSum.push(
      index === 0 ? 0 : nums.slice(0, index).reduce((pre, cur) => pre + cur)
    )
    rightSum.push(
      index === nums.length - 1
        ? 0
        : nums.slice(index + 1).reduce((pre, cur) => pre + cur)
    )
  })
  for (let index in leftSum) {
    if (leftSum[index] === rightSum[index]) return index
  }
  return -1
}
