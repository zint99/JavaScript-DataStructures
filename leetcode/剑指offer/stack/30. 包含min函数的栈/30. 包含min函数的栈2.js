/**
 * initialize your data structure here.
 *  使用对象{val,min}保存，每次push动态更新此对象
 */
var MinStack = function () {
  this.items = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push({
    val: x,
    min: this.items.length ? Math.min(x, this.min()) : x,
  })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1].val
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.items[this.items.length - 1].min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
