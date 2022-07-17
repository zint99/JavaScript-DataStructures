/**
 * @param {number[]} nums
 * @return {number}
 *
 */

/*  
    @ map比array速度快
    * map||array
        1.遍历数组，查询当前元素是否已经在map或array中存在
        2.若存在说明重复，不存在就将此元素放入
*/
// var findRepeatNumber = function (nums) {
//   const map = new Map()
//   for (let num of nums) {
//     if (map.has(num)) return num
//     map.set(num, 1)
//   }
//   return undefined
// }

/*
 * 使用obj实现哈希表,for-of比for慢
 */
// var findRepeatNumber = function (nums) {
//   const o = {}
//   for (let num of nums) {
//     if (o[num] === num) return num
//     o[num] = num
//   }
//   return undefined
// }

// var findRepeatNumber = function (nums) {
//   const o = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (o[nums[i]] === nums[i]) return nums[i]
//     o[nums[i]] = nums[i]
//   }
//   return undefined
// }

/*
 * 原地置换
 */

var findRepeatNumber = function (nums) {
  let cur
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i]
      } else {
        cur = nums[i]
        nums[i] = nums[cur]
        nums[cur] = cur
        // ;[nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]]
      }
    }
  }
  return undefined
}

/* ----------------------------------------------------------------------------------- */
console.log(findRepeatNumber([2, 1, 1, 2]))
