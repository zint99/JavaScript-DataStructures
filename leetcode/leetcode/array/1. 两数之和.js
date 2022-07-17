/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const backUp = [...nums]
  backUp.sort((a, b) => a - b)
  console.log(backUp)
  let head = 0,
    tail = nums.length - 1
  while (head < tail) {
    if (backUp[head] + backUp[tail] === target) {
      return [
        nums.indexOf(backUp[head]),
        nums.indexOf(
          backUp[tail],
          backUp[head] === backUp[tail] ? nums.indexOf(backUp[head]) + 1 : 0
        ),
      ]
    } else if (backUp[head] + backUp[tail] < target) {
      head++
    } else {
      tail--
    }
  }
  return []
}

// console.log(twoSum([-1, -2, -3, -4, -5], -8))
