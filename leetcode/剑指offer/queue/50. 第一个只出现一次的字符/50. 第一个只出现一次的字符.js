/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const o = {}
  for (let letter of s) {
    if (o[letter]) {
      o[letter] += 1
    } else {
      o[letter] = 1
    }
  }
  if (Object.entries(o).find((item) => item[1] === 1)) {
    return Object.entries(o).find((item) => item[1] === 1)[0]
  } else {
    return ` `
  }
}

console.log('firstUniqChar("aabbcc")', firstUniqChar("aabbcc"))
console.log('firstUniqChar("abaccdeff")', firstUniqChar("abaccdeff"))
console.log("firstUniqChar('')", firstUniqChar(""))
