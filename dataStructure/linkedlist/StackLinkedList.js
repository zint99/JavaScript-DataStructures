/*
    使用双向链表创建栈
*/

const { DoublyLinkedList } = require("./DoublyLinkedList")

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList()
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.isEmpty()
      ? undefined
      : this.items.removeAt(this.items.count - 1)
  }
  peek() {
    return this.items.isEmpty() ? undefined : this.items.tail.element
  }
  isEmpty() {
    return this.items.isEmpty()
  }
  size() {
    return this.items.size()
  }
  clear() {
    this.items.clear()
  }
  toString() {
    return this.items.toString()
  }
}

const stackll = new StackLinkedList()

stackll.push(1)
stackll.push(2)
// console.log(stackll.toString())
// console.log(stackll)
// console.log("stackll:", stackll)
// console.log(`\n`)
// console.log("stackll --> %o", stackll)

// nums = [2,3,21,2,1,65,3]

function findRepeatNumber(nums) {
  nums = nums.sort()
  const res = []
  for (let item of nums) {
    if (res.includes(item)) return item
    res.push(item)
  }
  return null //无重复数字
}
console.log(
  "findRepeatNumber([2,1,3,3,2,5])",
  findRepeatNumber([2, 1, 3, 3, 2, 5])
)
