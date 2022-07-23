/*
    BST中序遍历
        基线条件：null
*/
const inOrderTraverseNode = (node, cb) => {
  if (!node) return null
  inOrderTraverseNode(node.left, cb)
  cb(node)
  inOrderTraverseNode(node.right, cb)
}

const inOrderTraverse = (cb) => {
  inOrderTraverseNode(root, cb)
}
