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
/**
 *
 * @param {number[]} arr
 */
const quickSort = (arr) => {
  const { length } = arr
  if (length <= 1) return arr
  const middle = length >> 1
  const pivot = arr.splice(middle, 1)[0]
  const left = arr.filter((num) => num <= pivot),
    right = arr.filter((num) => num > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time("mergeSort time")
console.log("mergeSort(arr)", mergeSort(arr))
console.timeEnd("mergeSort time")

console.time("quickSort time")
console.log("quickSort(arr)", quickSort(arr))
console.timeEnd("quickSort time")
