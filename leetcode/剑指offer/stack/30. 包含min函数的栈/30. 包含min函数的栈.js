/**
 * initialize your data structure here.
 */
//  1.暴力解
var MinStack = function () {
  this.items = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x)
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
  return this.items[this.items.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return Math.min(...this.items)
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
