const { LinkedList } = require("./LinkedList");
const { Node } = require("../models/linked-list-models");

/*
    insert：需要将tail节点的next指向head。current保存插入位置的原节点
        1.index范围为0~count
        2.插入位置为链表头部
            2.1.空链表。head指向新节点，新节点next指向head（自己）
            2.2.非空链表。使用变量current保存之前的head节点，新节点next指向current，head再指向node，tail指向head
        3.插入位置为链表尾部
        4.插入位置为链表中间
    push：复用insert逻辑，需要修改tail的next指针形成循环链表
    toString：修改为通过索引终止循环
*/
class CircularLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn);
  }
  push(element) {
    if (this.isEmpty()) {
      this.insert(element, 0);
    } else {
      this.insert(element, this.count);
    }
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.isEmpty()) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          const tailNode = this.getElementAt(this.count - 1);
          this.head = node;
          tailNode.next = this.head;
        }
      } else if (index === this.count) {
        current = this.getElementAt(index - 1);
        current.next = node;
        node.next = this.head;
      } else {
        const previousNode = this.getElementAt(index - 1);
        current = previousNode.next;
        previousNode.next = node;
        node.next = current;
      }
      this.count++;
    }
    return undefined;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      let tailNode = this.getElementAt(this.count - 1);
      if (index === 0) {
        this.head = current.next;
        tailNode.next = this.head;
      } else {
        const previousNode = this.getElementAt(index - 1);
        current = previousNode.next;
        previousNode.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
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
    do {
      if (this.count === 1) break;
      current = current.next;
      llString += `,此节点的element：${current.element}，位置处于链表${
        this.indexOf(current.element) === 0
          ? "头节点"
          : this.indexOf(current.element) === this.count - 1
          ? "尾节点"
          : this.indexOf(current.element)
      }`;
    } while (this.indexOf(current.element) !== this.count - 1);
    return llString;
  }
}

const cll = new CircularLinkedList();
cll.push(0);
cll.push(1); // console.log("链表元素个数：" + cll.count);
cll.insert("insert0", 0);
const { head } = cll;

// console.log(head);

// console.log(cll.toString());
// const removeIndex = 1;
// cll.removeAt(removeIndex);
// console.log(`移除原${removeIndex}位置节点后：\n${cll.toString()}`);

// for (let i = 0; i < 2 * cll.count; i++) {
//   console.log(
//     `当前链表元素为${
//       cll.getElementAt(i >= cll.count ? i % cll.count : i).element
//     }，索引为${i >= cll.count ? i % cll.count : i}，下一个元素为${
//       cll.getElementAt(i >= cll.count ? i % cll.count : i).next.element
//     }`
//   );
// }
