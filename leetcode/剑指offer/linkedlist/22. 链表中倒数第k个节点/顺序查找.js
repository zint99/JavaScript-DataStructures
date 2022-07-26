/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* 
    将链表所有节点放入数组处理
 */
var getKthFromEnd = function (head, k) {
  const result = []
  while (head) {
    result.push(head)
    head = head.next
  }
  return result[result.length - k]
}
