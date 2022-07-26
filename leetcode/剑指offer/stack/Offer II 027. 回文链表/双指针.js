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
    双指针
 */
var isPalindrome = function (head) {
  const result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  let left = 0,
    right = result.length - 1
  while (left <= right) {
    if (result[left] !== result[right]) return false
    left++
    right--
  }
  return true
}
