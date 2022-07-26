/**
 *
 * @param {number[]} arr
 */
const mergeSort = (arr) => {
  //递归划分左右子数组
  const { length } = arr
  if (length === 1) return arr
  const middle = length >> 1,
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */
const merge = (left, right) => {
  // merge为有序数组
  const result = []
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result //返回merge好的有序子数组
}

/**
 *
 * @param {number[]} arr
 */
const quickSort = (arr) => {
  //先确定pivot(取数组中间值，若数组为几乎排序好的数组则取两边值为Pivot其性能并不好)，然后再划分子数组。最后合并为有序子数组
  const { length } = arr
  if (length < 2) return arr
  const middle = length >> 1,
    pivot = arr.splice(middle, 1)[0],
    left = quickSort(arr.filter((num) => num <= pivot)),
    right = quickSort(arr.filter((num) => num > pivot))
  return [...left, pivot, ...right]
}

const arr = [2, 1, 31, 4, 15, 12, 13, 25, 3, 56, 7, 65, 24, 12]

// console.log("mergeSort(arr)", mergeSort(arr))
// console.log("quickSort(arr)", quickSort(arr))
