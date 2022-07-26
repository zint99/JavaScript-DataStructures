/**
 * @param {number[]} arr
 * @return {number}
    api战神max+indexOf
 */
var peakIndexInMountainArray = function (arr) {
  const max = Math.max(...arr)
  return arr.indexOf(max)
}
