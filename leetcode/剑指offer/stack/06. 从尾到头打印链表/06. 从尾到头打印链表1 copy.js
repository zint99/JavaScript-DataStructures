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
//  栈实现
var reversePrint = function (head) {
  let current = head
  let valStack = []
  while (current) {
    valStack.push(current.val)
    current = current.next
  }
  return valStack.reverse()
}
