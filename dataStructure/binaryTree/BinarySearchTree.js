const { Node } = require("../models/binarySearchTree")
/*
                          11
                    7           15
                5     9       13     20
              3  6  8  10   12  14  18  25
    ❑ insert(key)：向树中插入一个新的键。
        1.验证是否为特殊情况，如果BST为空则直接插入为root
        2.调用insertNode(node, key)。
        3.首先判断和root的大小关系，若key<root.key则继续判断root.left是否为空，若为空则直接插入left，否则递归insertNode(node.left, key)
    ❑ search(key)：在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false。
    ❑ inOrderTraverse()：通过中序遍历方式遍历所有节点。
        ->按从小到大的顺序访问所有节点，典型应用是树的排序
        ->依次对node.left,node,node.right执行操作
        ->基线条件是node==null
        3-5-6-7-8-9-10-11-12-13-14-15-18-20-25
    ❑ preOrderTraverse()：通过先序遍历方式遍历所有节点。
        -> 根，左，右
          11-7-5-3-6-9-8-10-15-13-12-14-20-18-25
    ❑ postOrderTraverse()：通过后序遍历方式遍历所有节点。
        -> 左，右，根
          3-6-5-8-10-9-7-12-14-13-18-25-20-15-11
    ❑ min()：返回树中最小的值/键。
        沿着树的左边找到最小的key
    ❑ max()：返回树中最大的值/键。
        沿着树的右边找到最大的key
    ❑ remove(key)：从树中移除某个键。
      1.校验有效性
      2.找到移除的这个键
        2.1 叶子节点
        2.2 有一个子节点
        2.3 有两个子节点
*/
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (key < node.key) {
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (!node.right) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node)
    }
  }
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let currentNode = node
    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode
  }
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let currentNode = node
    while (currentNode !== null && currentNode.right !== null) {
      currentNode = currentNode.right
    }
    return currentNode
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (!node) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  remove(key) {
    this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    if (!node) return null
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        //被移除的节点为叶子节点
        node = null //将此节点移除
        return node //返回null清空其父节点对其的引用
      } else if (!(node.left && node.right) && !(!node.left && !node.right)) {
        //被移除的节点为只有一个节点的节点
        const nextNode = node.left || node.right //  保留左或右节点
        node = null //将此节点移除
        return nextNode //返回子节点，使其代替被移除的节点成为其祖父节点的子节点
      } else {
        //被移除的节点有两个子节点
        //找到此节点右子树的最小节点,将其作为继承节点
        //要移除7，找到了节点7右子树的最小节点8作为继承者。先保存节点8的key,然后将其移除，接着再用继承者的key代替被移除节点的Key,最后返回这个被移除的节点
        const rightTreeMinNode = node.right
        while (rightTreeMinNode && rightTreeMinNode.left) {
          rightTreeMinNode = rightTreeMinNode.left
        }
        const key = rightTreeMinNode.key
        this.remove(key)
        node.key = rightTreeMinNode.key //将继承节点删除后，把key赋值给被移除的节点
        return node
      }
    }
  }
}
const bs = new BinarySearchTree()
bs.insert(11)
bs.insert(7)
bs.insert(15)
bs.insert(5)
bs.insert(9)
bs.insert(3)
bs.insert(6)
bs.insert(8)
bs.insert(10)
bs.insert(13)
bs.insert(20)
bs.insert(12)
bs.insert(14)
bs.insert(18)
bs.insert(25)
// console.log(bs.root)
// bs.inOrderTraverse((node) => console.log(node.key)) //3-5-6-7-8-9-10-11-12-13-14-15-18-20-25
// bs.preOrderTraverse((node) => console.log(node.key)) //11-7-5-3-6-9-8-10-15-13-12-14-20-18-25
// bs.postOrderTraverse((node) => console.log(node.key)) //3-6-5-8-10-9-7-12-14-13-18-25-20-15-11

//叶子节点
// bs.remove(3)
// bs.inOrderTraverse((node) => console.log(node.key)) //5-6-7-8-9-10-11-12-13-14-15-18-20-25

// 只有一个子节点的节点
// bs.remove(3)
// bs.remove(5)
// bs.inOrderTraverse((node) => console.log(node.key)) //6-7-8-9-10-11-12-13-14-15-18-20-25

// 有两个子节点的节点
// bs.remove(5)
// bs.inOrderTraverse((node) => console.log(node.key)) //3-(5)-6-7-8-9-10-11-12-13-14-15-18-20-25

// console.log("bs.min()", bs.min())
// console.log("bs.max()", bs.max())

// console.log("bs.search(11)", bs.search(11))
// console.log("bs.search(16)", bs.search(16))
