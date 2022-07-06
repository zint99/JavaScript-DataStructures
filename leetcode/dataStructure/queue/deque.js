/*
    deque可以在头尾增删元素，被认为是栈与队列的结合
*/
const { Queue } = require("./queue");

class Deque extends Queue {
  constructor() {
    super();
  }
  //addFront -> 1.无元素，直接调用addBack 2.队列前端去除过元素，直接将前端元素索引-1再添加 3.队列前端没有去除过元素，将所有元素后移一位空出第一个位置
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      //后移一位
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      // this.lowestCount是0
      this.items[this.lowestCount] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    return this.items[this.lowestCount];
  }
  peekBack() {
    return this.items[this.count - 1];
  }
}

module.exports = {
  Deque,
};
// const dq = new Deque();
// dq.addFront("first");
// console.log(dq.toString());
// dq.addBack("second");
// console.log(dq.toString());
// dq.addFront("first1");
// console.log(dq.toString());
// dq.removeFront();
// console.log(dq.toString());
// console.log(dq.peekFront(), dq.peekBack());
