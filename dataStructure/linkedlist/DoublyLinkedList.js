const { LinkedList } = require("./LinkedList")
const { DoublyNode } = require("../models/doubly-linked-list-models")

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn) {
    super(equalsFn)
    this.tail = null
  }
  push(element) {
    this.insert(element, this.count)
  }
  insert(element, index) {
    //先对index进行有效性判断
    if (index >= 0 && index <= this.count) {
      const dnode = new DoublyNode(element)
      if (index === 0) {
        // 与单向链表不同的是，双向链表需要分链表是否为空讨论
        if (this.isEmpty()) {
          this.head = dnode
          this.tail = dnode
        } else {
          dnode.next = this.head
          this.head.prev = dnode
          this.head = dnode
        }
      } else if (index === this.count) {
        // 插入链表尾部
        this.tail.next = dnode
        dnode.prev = this.tail
        this.tail = dnode
      } else {
        const previousNode = this.getElementAt(index - 1)
        const current = previousNode.next
        previousNode.next = dnode
        dnode.prev = previousNode
        dnode.next = current
        current.prev = dnode
      }
      this.count++
    }
    return false
  }
  removeAt(index) {
    // 可以排除空链表的情况
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = null
          this.tail = null
        } else {
          this.head = current.next
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        const previousNode = this.getElementAt(index - 1)
        current = previousNode.next
        const nextNode = current.next
        previousNode.next = nextNode
        nextNode.prev = previousNode
      }
      this.count--
      return current.element
    }
    return undefined
  }
  clear() {
    this.count = 0
    this.head = null
    this.tail = null
  }
}

module.exports = {
  DoublyLinkedList,
}

const dl = new DoublyLinkedList()

// dl.push(1);
// dl.push(2);
// dl.getElementAt(0);
