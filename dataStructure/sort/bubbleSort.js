/*
    冒泡排序O(n^2)
        比较所有相邻的两项，交换位置
    [3,2,1,0]
        i,j=0,0 [2,3,1,0]
        i,j=0,1 [2,1,3,0]
        i,j=0,2 [2,1,0,3]

        i,j=1,0 [1,2,0,3]
        i,j=1,1 [1,0,2,3]
        i,j=1,2 [1,0,2,3]

        i,j=2,0 [0,1,2,3]
        i,j=2,1 
        i,j=2,2

        i,j=3,0
        i,j=3,1
        i,j=3,2
    修改冒泡排序
        避免内循环中已经排序好的不必要的比较
            外面每一轮可以排序好一个元素，外循环进入下一轮后就不用再关心上一轮已经排序好的元素了，所以可以在此轮的内循环中减去上轮外循环的索引
    [3,2,1,0]
        此轮循环将3排好顺序
        i,j=0,0 [2,3,1,0]
        i,j=0,1 [2,1,3,0]
        i,j=0,2 [2,1,0,3]
        此轮不用再管3，并把2排好
        i,j=1,0 [1,2,0,3]
        i,j=1,1 [1,0,2,3]
        此轮只用关心0，1
        i,j=2,0 [0,1,2,3]
        此轮直接跳过
        i,j=3,0
        i,j=3,1
        i,j=3,2
*/

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array
}

const advancedBubbleSort = (array) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array
}

const advancedBubbleSort2 = (array) => {
  const { length } = array
  for (let end = length - 1; end > 0; end--) {
    for (let j = 0; j < end; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array
}
// console.log(bubbleSort([3, 2, 1, 0, -1]))
console.log("advancedBubbleSort([3,2,1,0])", advancedBubbleSort([3, 2, 1, 0]))

console.log("advancedBubbleSort2([3,2,1,0])", advancedBubbleSort2([3, 2, 1, 0]))
