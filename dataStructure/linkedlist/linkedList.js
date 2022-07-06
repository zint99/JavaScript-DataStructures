const { defaultEquals } = require("../util/defaultEquals");
const { Node } = require("../models/linked-list-models");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn; //比较链表中两个元素是否相等
  }
  /*
    ❑ push(element)：向链表尾部添加一个新元素
        1.若是空链表，则直接将新元素设置为头节点
        2.若链表非空，则迭代链表到尾节点，再将其next指针指向新元素
        3.count+1
    ❑ insert(element, position)：向链表的特定位置插入一个新元素。
        1.
        2.
    ❑ getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
    ❑ remove(element)：从链表中移除一个元素。❑ indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    ❑ indexOf(element)：indexOf方法接收一个元素的值，如果在链表中找到了它，就返回元素的位置，否则返回-1
    ❑ removeAt(position)：从链表的特定位置移除一个元素。
        1.越界判断，0~count-1为合法position
        2.移除head元素。如果链表长度为1则直接将head赋值null。非1则
        3.移除最后一个节点，迭代链表找到最后一个节点赋值为null
        4.移除中间节点。将要移除节点的上一个节点next指向其下一个节点
    ❑ isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
    ❑ size()：返回链表包含的元素个数，与数组的length属性类似。
    ❑ toString()：返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
  */
  push(element) {
    const node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      const node = new Node(element);
      if (position === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let prev = this.getElementAt(position - 1);
        current = prev.next;
        prev.next = node;
        node.next = current;
      }
      this.count++;
    }
    return false;
  }
  getElementAt(index) {
    console.log(Object.getPrototypeOf(this));
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  remove(element) {
    const index = this.indexOf(element);
    const result = this.removeAt(index);
    return result;
  }
  indexOf(element) {
    if (this.isEmpty()) return -1;
    let current = this.head,
      index = 0;
    while (!this.equalsFn(current.element, element) && index <= this.count) {
      current = current.next;
      index++;
    }
    return index === this.count ? -1 : index;
  }
  removeAt(position) {
    if (position < 0 || position >= this.count || this.isEmpty())
      return undefined;
    let removedElement;
    if (position === 0) {
      removedElement = this.head.element;
      this.head = this.head.next;
    } else {
      let current = this.getElementAt(position),
        prev = this.getElementAt(position - 1); //当前要移除的节点和其上一个节点
      removedElement = current.element;
      prev.next = current.next;
    }
    this.count--;
    return removedElement;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  peak() {
    return this.head;
  }
  toString() {
    if (this.isEmpty()) return "";
    let current = this.head;
    let llString = `此节点的element：${current.element}，位置处于链表${
      this.indexOf(current.element) === 0
        ? "头节点"
        : this.indexOf(current.element) === this.count - 1
        ? "尾节点"
        : this.indexOf(current.element)
    }`;
    while (current.next !== null) {
      current = current.next;
      llString += `,此节点的element：${current.element}，位置处于链表${
        this.indexOf(current.element) === 0
          ? "头节点"
          : this.indexOf(current.element) === this.count - 1
          ? "尾节点"
          : this.indexOf(current.element)
      }`;
    }
    return llString;
  }
}

module.exports = {
  LinkedList,
};

// const ll = new LinkedList();
// ll.push("head");
// ll.push("middle");
// ll.push("tail");
// console.log(ll.toString());
