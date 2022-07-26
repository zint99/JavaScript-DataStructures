/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    双指针
  */
var reverseList = function (head) {
  let pre = null,
    cur = head
  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
