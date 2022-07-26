/**
 *
 * @param {number[]} arr
 */
const mergeSort = (arr) => {
  const { length } = arr
  if (length === 1) return arr
  const middle = length >> 1,
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
const merge = (left, right) => {
  //merge left&right
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time("mergeSort..")
console.log("mergeSort(arr)", mergeSort(arr))
console.timeEnd("mergeSort..")
