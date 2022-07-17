/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const arr = []
  const maxLen = 10 ** n - 1
  for (let i = 1; i <= maxLen; i++) {
    arr.push(i)
  }
  return arr
}
