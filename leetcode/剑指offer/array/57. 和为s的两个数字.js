/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 1.数组已经按升序排列
 * 2.双指针分别指向数组头尾
 * 3.当head<tail时进入循环
 * 4.若两数相加满足条件则返回结果
 * 5.若小于target则证明head小了，将head后移
 * 6.若大于target则证明tail大了，将tail前移
 * 7.若head = tail则退出循环，证明数组中无相加为target的两数。返回false
 */
var twoSum = function (nums, target) {
  let head = 0
  let tail = nums.length - 1
  while (head < tail) {
    if (nums[head] + nums[tail] === target) {
      return [nums[head], nums[tail]]
    } else if (nums[head] + nums[tail] < target) {
      head++
    } else {
      tail--
    }
  }
  return false //无结果
}

// console.log(twoSum([2, 7, 11, 15], 26))
