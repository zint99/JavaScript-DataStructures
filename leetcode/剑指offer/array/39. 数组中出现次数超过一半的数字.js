/**
 * @param {number[]} nums
 * @return {number}
 * 1.使用对象存储数组中每个数字和其出现的次数
 * 2.获取对象的entries
 * 3.find出现次数大于数组长度一半的一项
 * 4.返回number类型的结果
 */
var majorityElement = function (nums) {
  const o = {}
  nums.forEach((item) => {
    if (o.hasOwnProperty(item)) {
      o[item] = o[item] + 1
    } else {
      o[item] = 1
    }
  })
  return +Object.entries(o).find((item) => item[1] > nums.length / 2)[0]
}
