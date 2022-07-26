/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const arr = [...s]
  const left = arr.splice(0, n)
  return arr.concat(left).join("")
}
