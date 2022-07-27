/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
    递归。若该节点为叶子，则返回0。
    上层用下层左右节点返回的深度较大值加1作为此层的深度，最终得出树的深度
 */
var maxDepth = function (root) {
  if (!root) return 0
  const leftDeep = maxDepth(root.left) + 1
  const rightDeep = maxDepth(root.right) + 1
  return leftDeep >= rightDeep ? leftDeep : rightDeep
}
