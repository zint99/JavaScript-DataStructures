/**
 *
 * @param {number} min
 * @param {number} max
 */
function addMin2Max(min, max) {
  if (min === max) return min
  return min + addMin2Max(min + 1, max)
}

console.log("addMin2Max(1,100)", addMin2Max(1, 100))
console.log("addMin2Max(2,4)", addMin2Max(2, 4))
