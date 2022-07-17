/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (const [index, num] of nums.entries()) {
    if (map.has(target - num)) {
      return [index, map.get(target - num)]
    } else {
      map.set(num, index)
    }
  }
  return []
}

console.log(twoSum([3, 3], 6))
