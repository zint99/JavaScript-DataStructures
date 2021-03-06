/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//  递归
var reversePrint = function (head) {
  if (!head) return []
  let result = reversePrint(head.next)
  result.push(head.val)
  return result
}
