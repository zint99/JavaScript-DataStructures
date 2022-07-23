/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 删除节点分成头节点和非头节点两种情况
var deleteNode = function (head, val) {
  if (head.val === val) {
    head = head.next
  }
  let pre = head,
    cur = head.next
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
      break
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return head
}
