/**
 *
 * @param {number[]} arr
 */

/*
    从第二个元素开始，每一轮循环都是在对0~i的子数组排序，决定第i个元素应该插入的位置
*/
function insertionSort(arr) {
  const { length } = arr
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr
}

const arr = [3, 5, 1, 4, 2]

console.log("insertionSort(arr)", insertionSort(arr))
