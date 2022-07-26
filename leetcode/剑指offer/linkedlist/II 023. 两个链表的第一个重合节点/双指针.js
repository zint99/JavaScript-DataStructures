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
// 双指针
var getIntersectionNode = function (headA, headB) {
  let pointA = headA,
    pointB = headB
  while (pointA !== pointB) {
    if (pointA.next === null && pointB.next === null) return null
    pointA = pointA.next ? pointA.next : headB
    pointB = pointB.next ? pointB.next : headA
  }
  return pointA
}
