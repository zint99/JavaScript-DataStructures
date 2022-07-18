// var CQueue = function () {
//   this.stack1 = []
//   this.stack2 = []
// }

// /**
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function (value) {
//   this.stack1.push(value)
// }

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function () {
//   if (this.stack1.length === 0) return -1
//   while (this.stack1.length) {
//     this.stack2.push(this.stack1.pop())
//   }
//   const head = this.stack2.pop()
//   while (this.stack2.length) {
//     this.stack1.push(this.stack2.pop())
//   }
//   return head
// }

//  2、分成inStack和outStack
var CQueue = function () {
  this.inStack = []
  this.outStack = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.outStack.length) {
    if (!this.inStack.length) {
      return -1
    } else {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
      }
      return this.outStack.pop()
    }
  }
  return this.outStack.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
