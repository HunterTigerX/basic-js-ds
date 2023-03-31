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

  has(data) {
    let result;
    if (this.data === null) {
      result = false;
    } else {
      function checkIfExists(dataX) {
        console.log(data, dataX);
        if (dataX.data === data) {
          result = true;
        } else if (dataX.left !== null && data <= dataX.data) {
          checkIfExists(dataX.left);
        } else if (dataX.right !== null && data >= dataX.data) {
          checkIfExists(dataX.right);
        } else {
          result = false;
        }
      }
      checkIfExists(this.data);
    }
    return result;
  }

  find(data) {
    let result;
    if (this.data === null) {
        result = null;
    } else {
        function checkIfExists(dataX) {
            if (dataX.data === data) {
                result = dataX;
            } else if (dataX.left !== null && data <= dataX.data) {
                checkIfExists(dataX.left);
            } else if (dataX.right !== null && data >= dataX.data  ) {
                checkIfExists(dataX.right);
            } else {
                result = null;
            }
        }
        checkIfExists(this.data)
    }
    return result;
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
