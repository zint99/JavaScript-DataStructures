/**
 *
 * @param {number[]} arr
 *  递归的基准条件是arr的长度为1，算法重点在merge的时候如何排序
 *  先将数组划分为最小单元，并在merge的时候排序
 *  i,j分别为left和right数组的指针，mergeArr为left和right排序merge后的数组
 *
 */
function mergeSort(arr) {
  const { length } = arr
  if (length === 1) return arr
  const middle = Math.floor(length / 2)
  const leftArr = mergeSort(arr.slice(0, middle))
  const rightArr = mergeSort(arr.slice(middle, length))
  let i = 0,
    j = 0,
    mergeArr = []
  while (i < leftArr.length || j < rightArr.length) {
    if (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        mergeArr.push(leftArr[i])
        i++
      } else {
        mergeArr.push(rightArr[j])
        j++
      }
    }
    if (i === leftArr.length && j < rightArr.length) {
      mergeArr.push(rightArr[j])
      j++
    }
    if (j === rightArr.length && i < leftArr.length) {
      mergeArr.push(leftArr[i])
      i++
    }
  }
  return mergeArr
}

const arr = [3, 5, 2, 1, 1]
console.log("mergeSort(arr)", mergeSort(arr))
