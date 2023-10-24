# Binary Search Tree (BST) Implementation
This is a JavaScript implementation of a Binary Search Tree (BST) and related operations, including insertion, deletion, balancing, and various tree traversal algorithms. This is part of the CS subsection of **[The Odin Project](https://www.theodinproject.com/)**

## Overview
A Binary Search Tree (BST) is a data structure that organizes data elements in a hierarchical structure, which allows for efficient searching, insertion, and deletion operations. This project provides a JavaScript implementation of a BST and various methods to work with the tree.

## Features
- BST Creation: Create a BST from a sorted or unsorted array.
- Insertion: Insert a new node into the BST.
- Deletion: Delete a node from the BST.
- Traversal: Perform in-order, pre-order, and post-order traversals.
- Balancing: Check if the tree is balanced and rebalance it if needed.
- Depth and Height Calculation: Find the depth and height of a node in the tree.

## Usage
1. Create a BST instance using an array of numbers:
```js
const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTree = new Tree(myArray);
```
2. Perform various operations on the tree, such as insertion, deletion, and traversal:
```js
myTree.insert(11, myTree.root);
myTree.delete(5, myTree.root);
const inOrderTraversal = myTree.inorder(myTree.root);
```
3. Check if the tree is balanced and rebalance it if needed:
```js
if (!myTree.isBalanced(myTree.root)) {
  myTree.rebalance(myTree.root);
}
```
## Images
Initial unbalanced tree with traversals: 
![Non-balanced](https://github.com/Hodoronk/Binary-Search-Trees/assets/93437156/533faf8f-c31c-4ed0-9fe0-40d4ee688394)
Balanced tree with traversals: 
![Balanced](https://github.com/Hodoronk/Binary-Search-Trees/assets/93437156/45ff94eb-6715-4046-96f0-99a0dd8f2cf4)
