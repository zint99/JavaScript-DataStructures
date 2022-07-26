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
    快慢指针，fast走完时，slow刚好走到倒数第k个节点
        fast需要先走k步
 */
var getKthFromEnd = function (head, k) {
  let fast = head,
    slow = head
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
