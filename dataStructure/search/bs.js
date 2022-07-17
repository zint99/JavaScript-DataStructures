/*
    binarySearch
        @target
        @array -> 排序数组
            如果target>middleItem，加low
            如果target<middleItem，减hign
*/

const bs = (target, array) => {
  array.sort((a, b) => a - b)
  let low = 0,
    high = array.length - 1
  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    const selectedMiddleItem = array[middle]
    if (target > selectedMiddleItem) {
      low = middle + 1
    } else if (target < selectedMiddleItem) {
      high = middle - 1
    } else {
      return middle
    }
  }
  return `not exist`
}

const arr = [2, 31, 22, 98, 1, 65]
console.log(bs(2, arr))
