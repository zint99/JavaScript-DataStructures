/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    for循环加散列表(obj或者map实现)
*/
// var search = function (nums, target) {
//   const obj = {}
//   for (let num of nums) {
//     if (obj[num] == null) {
//       obj[num] = 1
//     } else {
//       obj[num] += 1
//     }
//   }
//   return obj[target] ? obj[target] : 0
// }

/*
    双指针
        -注意head == tail时
*/
var search = function (nums, target) {
  let count = 0
  let head = 0,
    tail = nums.length - 1
  while (head <= tail) {
    if (head === tail) {
      if (nums[head] === target) {
        count++
        break
      } else {
        break
      }
    }
    if (nums[head] === target) {
      count++
    }
    if (nums[tail] === target) {
      count++
    }
    head++
    tail--
  }
  return count
}
console.log(search([1], 1))
