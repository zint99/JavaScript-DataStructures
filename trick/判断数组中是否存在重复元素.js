/**
 *
 * @param {number[]} arr
 */
function isRepeat(arr) {
  return new Set(arr).size !== arr.length
}

console.log("isRepeat([1,2,3])", isRepeat([1, 2, 3]))
console.log("isRepeat([1,2,2])", isRepeat([1, 2, 2]))
