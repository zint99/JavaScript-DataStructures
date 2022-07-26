/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 最容易想到的hashset
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null //如果任一链表为空，则绝不相交
  const set = new Set()
  while (headA) {
    set.add(headA)
    headA = headA.next
  }
  while (headB) {
    if (set.has(headB)) {
      return headB
    } else {
      headB = headB.next
    }
  }
  return null
}
