/**
 *
 * @param {number[]} arr
 *     快速排序O(nlogn)
        * 分治，将原始数组分为小数组
        * 递归, 基准条件len<2。数组只有一个元素说明已经排好序
        *   quickSort
        *       1.排好序了，返回此数组
        *       2.继续递归
        [3,2,1,0]
        pivot = 2 ,leftArr = [1,0],rightArr = [3]
        return [...qs([1,0]),2,...qs([3])] = [0,1,2,3]
        [1,0]
        pivot = 1, leftArr = [0]
        return [...[0],1,...[]] = [0,1]

 */
const quickSort = (arr) => {
  const { length } = arr
  if (length < 2) {
    return arr
  }
  const low = 0,
    high = length - 1
  const pivot = arr[Math.floor((low + high) / 2)]
  arr.splice(Math.floor((low + high) / 2), 1)
  const leftArr = arr.filter((item) => item <= pivot)
  const rightArr = arr.filter((item) => item > pivot)
  //   return quickSort(leftArr).concat(pivot, quickSort(rightArr))
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const array = [3, 2, 1, 2, 1, -1, 0]
console.log("quickSort(array)", quickSort(array))
