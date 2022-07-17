/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

/*
    1.自带的sort排序 x
*/
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b)
  return arr.splice(0, k)
}
// console.log(getLeastNumbers([3, 2, 1], 2))
// console.log(getLeastNumbers([0, 1, 2, 1], 1))
// console.log(getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4))
