/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const o = {}
  for (let i = 0; i < numbers.length; i++) {
    if (o[target - numbers[i]]) {
      return [o[target - numbers[i]][1], i]
    } else {
      o[numbers[i]] = [numbers[i], i]
    }
  }
  return null
}

console.log(twoSum([-1, 0], -1))
