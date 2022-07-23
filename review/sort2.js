// bubbleSort,insertionSort,selectionSort,mergeSort,quickSort
const swap = (arr, i, j) => {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}
const bubbleSort = (arr) => {
  const { length } = arr
  for (let end = length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
    }
  }
  return arr
}
//每次循环都决定arr[i]应该插入到子数组的哪个位置
const insertionSort = (arr) => {
  const { length } = arr
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}
const selectionSort = (arr) => {
  const { length } = arr
  //取第i轮循环时剩余数组中的最小值
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}
const mergeSort = (arr) => {
  const { length } = arr
  if (length === 1) {
    return arr
  }
  const middle = length >> 1,
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
const merge = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (right.length) {
    result.push(right.shift())
  }
  while (left.length) {
    result.push(left.shift())
  }
  return result
}
const quickSort = (arr) => {
  const { length } = arr
  if (length < 2) return arr
  const middle = length >> 1,
    pivot = arr.splice(middle, 1)[0],
    left = arr.filter((item) => item <= pivot),
    right = arr.filter((item) => item > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = []
for (let i = 100; i > 0; i--) {
  arr.push(i)
}
// console.time("bubbleSort(arr)")
// console.log("bubbleSort(arr)", bubbleSort(arr))
// console.timeEnd("bubbleSort(arr)") //bubbleSort(arr): 13.742ms

// console.time("insertionSort(arr)")
// console.log("insertionSort(arr)", insertionSort(arr))
// console.timeEnd("insertionSort(arr)") //insertionSort(arr): 10.572ms

// console.time("selectionSort(arr)")
// console.log("selectionSort(arr)", selectionSort(arr))
// console.timeEnd("selectionSort(arr)") //selectionSort(arr): 15.949ms

// console.time("mergeSort(arr)")
// console.log("mergeSort(arr)", mergeSort(arr))
// console.timeEnd("mergeSort(arr)") //mergeSort(arr): 8.271ms

// console.time("quickSort(arr)")
// console.log("quickSort(arr)", quickSort(arr))
// console.timeEnd("quickSort(arr)") //quickSort(arr): 7.41ms
