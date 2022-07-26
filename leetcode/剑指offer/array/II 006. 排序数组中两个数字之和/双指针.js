/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
    双指针
*/
var twoSum = function (numbers, target) {
  const { length } = numbers
  let left = 0,
    right = length - 1
  while (left <= right) {
    let result = numbers[left] + numbers[right]
    if (result === target) {
      return [left, right]
    } else if (result < target) {
      left++
    } else {
      right--
    }
  }
  return null
}

console.log(twoSum([-1, 0], -1))
