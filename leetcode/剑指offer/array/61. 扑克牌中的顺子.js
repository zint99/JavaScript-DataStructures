/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var isStraight = function (nums) {
//   if (nums.includes(0)) {
//     const arr = nums.filter((num) => num !== 0)
//     // 有0的情况下不能出现对子
//     for (let i = 0; i < arr.length; i++) {
//       const newArr = [...arr]
//       newArr.splice(i, 1)
//       if (newArr.includes(arr[i])) return false
//     }
//     arr.sort((a, b) => a - b)
//     // 判断所需要0的个数与拥有0的个数
//     const zeroNums = nums.length - arr.length
//     let arrNeedZeroNums = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//       arrNeedZeroNums += arr[i + 1] - arr[i] - 1
//     }
//     return arrNeedZeroNums <= zeroNums ? true : false
//   } else {
//     //没有0，则排序后的数组必须后一个比前一个大1才判断为顺子
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i + 1] - nums[i] !== 1) return false
//     }
//     return true
//   }
// }

// 2.判断最大最小值
var isStraight = function (nums) {
  const arr = nums.filter((num) => num !== 0)
  if (arr.length !== new Set(arr).size) return false //存在重复对子
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return max - min <= 4
}

console.log(isStraight([1, 2, 4, 3, 5]))
