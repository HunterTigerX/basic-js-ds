const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this.rootX = null;
  }
  root() {
    if (this.rootX === null) {
      return null;
    } else {
      return this.rootX;
    }
  }

  add(data) {
    this.rootX = addToNode(this.rootX, data);

    function addToNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addToNode(node.left, data);
      } else {
        node.right = addToNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInNode(this.rootX, data);

    function searchInNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return searchInNode(node.left, data);
      } else {
        return searchInNode(node.right, data);
      }
    }
  }

  find(data) {
    console.log(this.rootX);
    return searchInNode(this.rootX, data);

    function searchInNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        return searchInNode(node.left, data);
      }

      if (data > node.data) {
        return searchInNode(node.right, data);
      }
      if (node.data === data) {
        return node;
      }
    }
  }

  remove(data) {
    this.rootX = removeData(this.rootX, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let rightMinNum = node.right;
        while (rightMinNum.left) {
          rightMinNum = rightMinNum.left;
        }
        node.data = rightMinNum.data;
        node.right = removeData(node.right, rightMinNum.data);
        return node;
      }
    }
  }
  min() {
    if (!this.rootX) {
      return null;
    }
    let node = this.rootX;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootX) {
      return null;
    }
    let node = this.rootX;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8).data, 8);
