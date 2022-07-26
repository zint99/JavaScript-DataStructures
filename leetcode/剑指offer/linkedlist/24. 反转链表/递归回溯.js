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
    递归回溯
  */
var reverseList = function (head) {
  const recur = (cur, pre) => {
    if (!cur) return pre
    const res = recur(cur.next, cur)
    cur.next = pre
    return res
  }
  return recur(head, null)
}
