/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归交换节点左右引用
var mirrorTree = function (root) {
  if (!root) return null
  //交换左右节点
  const lNode = mirrorTree(root.left)
  const rNode = mirrorTree(root.right)
  root.left = rNode
  root.right = lNode
  return root
}
