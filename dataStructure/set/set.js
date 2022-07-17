/*
    ❑ add(element)：向集合添加一个新元素。
    ❑ delete(element)：从集合移除一个元素。
    ❑ has(element)：如果元素在集合中，返回true，否则返回false。
    ❑ clear()：移除集合中的所有元素。
    ❑ size()：返回集合所包含元素的数量。它与数组的length属性类似。
    ❑ values()：返回一个包含集合中所有值（元素）的数组。
*/
class MySet {
  constructor() {
    this.count = 0
    this.items = {}
  }
  has(element) {
    //return this.items.hasOwnProperty(element) ESLint会抛出错误
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      this.count++
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      this.count--
      return true
    }
    return false
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  size() {
    return this.count
  }
  values() {
    return Object.values(this.items)
  }
}
const mySet = new MySet()
mySet.add(1)
mySet.add(1)
mySet.add(2)
// mySet.clear()
// mySet.delete(1)
// console.log("mySet.has(1)", mySet.has(1))
// console.log("mySet.values()", mySet.values())
console.log("mySet.items", mySet.items)
console.log("mySet.count", mySet.count)
