const { LinkedList } = require("./LinkedList");
//比较函数
function defaultCompare(a, b) {
  return a === b ? 0 : a < b ? -1 : 1;
}
/*
    不允许在任何位置插入元素，会自动为新插入元素按从小到大寻找插入位置
    getPostionNextSortedElement(element)：获取element在链表中按正序排列的位置
*/
class SortedLinkedList extends LinkedList {
  constructor(equalsFn, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  insert(element) {
    if (this.isEmpty()) {
      super.insert(element, 0);
    } else {
      const postion = this.getPostionNextSortedElement(element);
      super.insert(element, postion);
    }
  }
  getPostionNextSortedElement(element) {
    let current = this.head;
    let postion = 0;
    for (; postion < this.count; postion++) {
      const compareResult = this.compareFn(element, current.element);
      if (compareResult === -1 || compareResult === 0) {
        break;
      }
      current = current.next;
    }
    return postion;
  }
}

const sll = new SortedLinkedList();
sll.insert(0);
sll.insert(-1);
console.log(sll.toString());
