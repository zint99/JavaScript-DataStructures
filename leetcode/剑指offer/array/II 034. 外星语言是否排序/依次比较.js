/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
/* 
        1.依次比较前后两个word是否按要求排序
    */
var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    let smallerWordArr = [...words[i]],
      biggerWordArr = [...words[i + 1]],
      smallerWord,
      biggerWird

    while (smallerWordArr.length && biggerWordArr.length) {
      smallerWord = smallerWordArr.shift()
      biggerWird = biggerWordArr.shift()
      if (order.indexOf(smallerWord) > order.indexOf(biggerWird)) {
        return false //前后两个word不满足排序要求，直接return false
      } else if (order.indexOf(smallerWord) === order.indexOf(biggerWird)) {
        continue //跳过这个字符
      } else {
        break //符合要求，跳出本次while循环
      }
    }
    if (!biggerWordArr.length && smallerWordArr.length) {
      if (order.indexOf(smallerWord) === order.indexOf(biggerWird)) return false
      if (order.indexOf(smallerWord) < order.indexOf(biggerWird)) return true
    } //短的排在后面去了不符合要求，如['apple','app'] ["kuvp", "q"]区分这两种情况
  }
  return true //所有word都正确排序，返回true
}
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"))
