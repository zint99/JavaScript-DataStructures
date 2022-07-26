/*
    五种常见排序
        bubbleSort,selectionSort,insertionSort,mergeSort,quickSort
*/
/**
 *
 * @param {number[]} arr
 */
/*
    1.外层循环从右往左每次排好一个元素
    2.n个元素需要n-1次循环，每次排好一个元素后就不用在下次循环中两两比较
*/

const bubbleSort1 = (arr) => {
  const { length } = arr
  for (let end = length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}
const bubbleSort2 = (arr) => {
  const { length } = arr
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
/*
    选择排序
        两层循环，外层循环找当前剩余元素中最小的元素，内层循环两两比较找更小元素，有就替换
*/
const selectionSort = (arr) => {
  const { length } = arr
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        ;[arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}
/*
    插入排序
        两层循环，每次都是在对子数组排序。
        从第二项开始，决定该项应该插入在子数组哪个位置，每轮循环都排好一个子数组
*/
const insertionSort = (arr) => {
  const { length } = arr
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}
/*
    归并排序：分治，递归。
        首先将数组从中间划分为左右数组，直到最后长度为1，然后再归并的过程中排序
        基准条件：数组长度为1
*/
const mergeSort = (arr) => {
  const { length } = arr
  if (length === 1) return arr
  const mid = Math.floor(length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  const mergeArr = Array(left.length + right.length)
  let i = 0,
    j = 0,
    k = 0
  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergeArr[k] = left[i]
        i++
        k++
      } else {
        mergeArr[k] = right[j]
        j++
        k++
      }
    }
    if (i === left.length && j !== right.length) {
      mergeArr[k] = right[j]
      k++
      j++
    }
    if (j === right.length && i !== left.length) {
      mergeArr[k] = left[i]
      i++
      k++
    }
  }
  return mergeArr
}
/*
    快速排序：分治，递归
      将数组中间元素作为pivot，并将数组分为<=pivot的left和>pivot的right
      基准条件：数组长度<2
*/
const quickSort = (arr) => {
  const { length } = arr
  if (length < 2) return arr
  const middle = Math.floor(length - 1 / 2)
  const pivot = arr[middle]
  arr.splice(middle, 1)
  const left = quickSort(arr.filter((item) => item <= pivot))
  const right = quickSort(arr.filter((item) => item > pivot))
  return [...left, pivot, ...right]
}
const arr = [3, 5, 2, 4, 1]
console.log("bubbleSort1(arr)", bubbleSort1(arr))
console.log("bubbleSort2(arr)", bubbleSort2(arr))
console.log("selectionSort(arr)", selectionSort(arr))
console.log("insertionSort(arr)", insertionSort(arr))
console.log("mergeSort(arr)", mergeSort(arr))
console.log("quickSort(arr)", quickSort(arr))
