var RecentCounter = function () {
  this.requests = []
}

/**
 * @param {number} t
 * @return {number}
 */
/*
    移动指针指到符合要求
*/
RecentCounter.prototype.ping = function (t) {
  let curIndex = 0
  this.requests.push(t)
  while (this.requests[curIndex] < t - 3000) {
    curIndex++
  }
  return this.requests.length - curIndex
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
