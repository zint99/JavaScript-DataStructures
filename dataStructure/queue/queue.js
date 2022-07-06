/*
    对象存储队列元素
    lowestCount表示队首变量的索引，每次dequeue加一
*/

class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    //先保存要删除的变量，作为返回值
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) return "";
    //从队列头部开始一直循环到队尾
    let quequeString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      quequeString += `,${this.items[i]}`;
    }
    return quequeString;
  }
}

module.exports = {
  Queue,
};
//test
// const q = new Queue();
// console.log(q.isEmpty());
// q.enqueue("first");
// q.enqueue("second");
// console.log(q.toString());
// console.log(q.size());
// q.dequeue();
// console.log(q.toString());
