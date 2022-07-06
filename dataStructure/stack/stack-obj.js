/*
    除了toString，其他方法的复杂度都为O(1)
    #items 声明items与count为类的私有变量，外部不能改变
*/
class Stack {
  #items;
  #count;
  constructor() {
    this.#items = {}; //使用对象来保存栈中元素
    this.#count = 0; //记录栈中元素个数
  }
  push(element) {
    this.#items[this.#count] = element;
    this.#count = this.#count + 1;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const element = this.peek(); //保存出栈的栈顶元素，作为pop的返回值
      delete this.#items[this.#count - 1];
      this.#count--;
      return element;
    }
  }
  peek() {
    return this.isEmpty() ? undefined : this.#items[this.#count - 1];
  }
  isEmpty() {
    return this.#count === 0;
  }
  clear() {
    this.#items = {};
    this.#count = 0;
  }
  size() {
    return this.#count;
  }
  toString() {
    return Object.values(this.#items).join(",");
    /*
      toString 法2
      if (this.isEmpty()) {
        return "";
      } else {
        let stackStr = `${this.#items[0]}`;
        for (let i = 1; i < this.#count; i++) {
          stackStr = stackStr + `,${this.#items[i]}`;
        }
        return stackStr;
      }
      */
  }
}

module.exports = {
  Stack,
};

// const s = new Stack();
// s.push("bottom");
// s.push("middle");
// s.push("top");
// s.pop();
// console.log(s.toString());
