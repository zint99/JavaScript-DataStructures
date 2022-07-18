/**
 *
 * @param {number[]} arr
 *  递归的基准条件是arr的长度为1
 *  归并过程中排序，若左边的首项都大于右边的尾项，如[3,4]和[1,2]则将交换位置[...right,...left]
 *
 */
function mergeSort(arr) {
  const { length } = arr
  const middle = Math.floor(length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle, length)
  return length === 1
    ? arr
    : mergeSort(leftArr)[0] <= mergeSort(rightArr)[rightArr.length - 1]
    ? [...mergeSort(leftArr), ...mergeSort(rightArr)]
    : [...mergeSort(rightArr), ...mergeSort(leftArr)]
}

const arr = [3, 2, 1, 0]
console.log("mergeSort(arr)", mergeSort(arr))
