const { LinkedList } = require("./LinkedList");
const { DoublyNode } = require("../models/doubly-linked-list-models");

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn);
    this.tail = null;
  }
  insert(element, index) {
    //先对index进行有效性判断
    if (index >= 0 && index <= this.count) {
      const dnode = new DoublyNode(element);
      if (index === 0) {
        // 与单向链表不同的是，双向链表需要分链表是否为空讨论
        if (this.isEmpty()) {
          this.head = dnode;
          this.tail = dnode;
        } else {
          dnode.next = this.head;
          this.head.prev = dnode;
          this.head = dnode;
        }
      } else if (index === this.count) {
        // 插入链表尾部
        this.tail.next = dnode;
        dnode.prev = this.tail;
        this.tail = dnode;
      } else {
        const previousNode = this.getElementAt(index - 1);
        const current = previousNode.next;
        previousNode.next = dnode;
        dnode.prev = previousNode;
        dnode.next = current;
        current.prev = dnode;
      }
      this.count++;
    }
    return false;
  }
}

const dl = new DoublyLinkedList();

dl.push(1);
dl.push(2);
dl.getElementAt(0);
