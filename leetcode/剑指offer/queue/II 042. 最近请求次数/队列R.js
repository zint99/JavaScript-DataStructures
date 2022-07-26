var RecentCounter = function () {
  this.requests = []
}

/**
 * @param {number} t
 * @return {number}
 */
/*
    每次ping将队列requests中不符合要求的出列，返回剩余符合要求的请求数
*/
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t)
  while (this.requests[0] < t - 3000) {
    this.requests.shift()
  }
  return this.requests.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
