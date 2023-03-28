const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  root() {
    return this.data === null ? null : this.data;
  }

  add(data) {
    if (this.data === null) {
      this.data = new BinarySearchTree(data);
      return data;
    } else {
      let currentObject = this.data;
      function addBranchOrLeafToTree(dataX) {
        if (data < dataX.data) {
          if (dataX.left === null) {
            dataX.left = new BinarySearchTree(data);
            return;
          } else {
            addBranchOrLeafToTree(dataX.left);
          }
        } else {
          if (dataX.right === null) {
            dataX.right = new BinarySearchTree(data);
            return;
          } else {
            addBranchOrLeafToTree(dataX.right);
          }
        }
      }
      return addBranchOrLeafToTree(currentObject);
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
