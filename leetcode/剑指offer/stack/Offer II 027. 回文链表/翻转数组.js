/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* 
    @划分前后数组，对比索引上的值
    1.将链表节点val分为前后两部分
    2.翻转其中一个，然后对比是否每个索引上的值都相等，若是则为回文
 */
var isPalindrome = function (head) {
  const result = [],
    left = [],
    right = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  if (result.length === 1) return true
  const middle = result.length >> 1
  for (let i = 0; i < result.length; i++) {
    if (i < middle) {
      left.push(result[i])
    } else {
      right.unshift(result[i])
    }
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) return false
  }
  return true
}
