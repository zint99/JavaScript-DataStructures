/**
 * @param {number[]} arr
 * @return {number}
 */

/* 
    找开始降序的第一个值
 */
var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i
    }
  }
}
