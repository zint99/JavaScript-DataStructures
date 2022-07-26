/**
 * @param {number} target
 * @return {number[][]}
 */
// 滑动窗口0-target-1，左窗口的边界应该小于target的一半
var findContinuousSequence = function (target) {
  let left = 1,
    right = 2,
    result = []
  while (left < target / 2) {
    let sum = 0,
      tempResultArr = []
    for (let i = left; i <= right; i++) {
      sum += i
      tempResultArr.push(i)
    }
    if (sum < target) {
      right++
    } else if (sum > target) {
      left++
    } else {
      result.push(tempResultArr)
      left++
      right++
    }
  }
  return result
}
