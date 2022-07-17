/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length >> 1
  const map = new Map()
  for (let num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    if (map.get(num) > len) return num
  }
}

// console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))
