//  Tree: Inorder Traversal
//  https://www.hackerrank.com/challenges/tree-inorder-traversal/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

public static void inOrder(Node root) {
  if (root == null) return;
  inOrder(root.left);
  System.out.print(root.data + " ");
  inOrder(root.right);
}