/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 *
 *
 */

//  1. 暴力解 filter为odd和even然后再concat
// var exchange = function (nums) {
//   const odd = nums.filter((num) => num % 2 === 1)
//   const even = nums.filter((num) => num % 2 === 0)
//   return [...odd, ...even]
// }

/*
    2. 双指针
        1、前后指针指向的元素满足前奇后偶则控制对应指针移动
        2、若
*/
var exchange = function (nums) {
  let head = 0,
    tail = nums.length - 1
  while (head < tail) {
    if (nums[head] % 2 === 0 && nums[tail] % 2 === 1) {
      ;[nums[head], nums[tail]] = [nums[tail], nums[head]]
    }
    if (nums[head] % 2 === 1) head++
    if (nums[tail] % 2 === 0) tail--
  }
  return nums
}

console.log(exchange([2, 44, 1, 3, 1, 1]))
