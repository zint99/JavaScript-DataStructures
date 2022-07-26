/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let result = []
  let notInarr2 = arr1
    .filter((item) => !arr2.includes(item))
    .sort((a, b) => a - b)
  console.log(notInarr2)
  for (let item of arr2) {
    result = [...result, ...arr1.filter((num) => num === item)]
  }
  return [...result, ...notInarr2]
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
)
