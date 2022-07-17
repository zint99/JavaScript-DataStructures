/**
 *
 * @param {number[]} arr
 * selectionSort:O(n^2)
 *  外层循环,n个元素只需要执行n-1次，每次arr[i]作为当前轮的最小元素
 *  内层循环从当前最小元素的后子数组开始，如果有比最小值小的元素则交换
 */
const selectionSort = (arr) => {
  const { length } = arr
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log("selectionSort([3,2,1])", selectionSort([3, 2, 1]))
console.log("selectionSort([3,2,1,0])", selectionSort([3, 2, 1, 0]))
