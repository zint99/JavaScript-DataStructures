/**
 * @param {number[]} numbers
 * @return {number}
 */

/*
    @ 旋转后的numbers中，第一个小于首项的元素一定是最小值
        若找不到则说明旋转为原数组，此时首项是最小值，返回首项
 */
var minArray = function (numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[0]) {
      return numbers[i]
    }
  }
  return numbers[0]
}

console.log("minArray([4, 5, 3, 3, 3])", minArray([4, 5, 3, 3, 3]))
