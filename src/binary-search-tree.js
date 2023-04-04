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
    let result = false;
    function checkIfExists(thisClass) {
      if (thisClass === null) {
        result = false;
      } else if (thisClass.data === data) {
        result = true;
      } else if (data >= thisClass.data) {
        checkIfExists(thisClass.right);
      } else if (data <= thisClass.data) {
        checkIfExists(thisClass.left);
      }
    }

    checkIfExists(this.data);
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
        } else if (dataX.right !== null && data >= dataX.data) {
          checkIfExists(dataX.right);
        } else {
          result = null;
        }
      }
      checkIfExists(this.data);
    }
    return result;
  }

  remove(data) {
    let currentObject = this.data;
    let route;
    let i = 0;
    let checkIfExists = (dataX) => {
      if (dataX === null) {
        return null;
      } else if (dataX.data === data) {
        if (dataX.right === null && dataX.left === null) {
          currentObject[route] = null;
        } else if (dataX.right === null && dataX.left !== null) {
          currentObject[route] = dataX.left;
        } else if (dataX.left === null && dataX.right !== null) {
          currentObject[route] = dataX.right;
        } else if (dataX.right !== null && dataX.left !== null) {
          let newDataX;
          let goDeep2 = (node) => {
            if (node.left !== null) {
              //Самый ли глубокий левый узел
              goDeep2(node.left);
            } else {
              let newData = Object.assign({}, node);
              //Самый глубокий левый узел
              //Удаляем перемещаемый узел
              this.remove(newData.data);
              //Добавляем в переменную данные удалённого узла
              newDataX = newData.data;
            }
          };
          goDeep2(dataX.right);
          dataX.data = newDataX;
        }
      } else if (data >= dataX.data) {
        if (i === 0) {
          i++;
          route = "right";
        } else {
          currentObject = currentObject[route];
          route = "right";
        }
        checkIfExists(dataX.right);
      } else if (data <= dataX.data) {
        if (i === 0) {
          i++;
          route = "left";
        } else {
          currentObject = currentObject[route];
          route = "left";
        }
        checkIfExists(dataX.left);
      }
    };

    checkIfExists(this.data);
  }

  min() {
    let result;
    let returnMin = (leftData) => {
      if (leftData.left === null) {
        result = leftData.data;
      } else {
        returnMin(leftData.left);
      }
    };
    returnMin(this.data);
    return result;
  }

  max() {
    let result;
    let returnMin = (rightData) => {
      if (rightData.right === null) {
        result = rightData.data;
      } else {
        returnMin(rightData.right);
      }
    };
    returnMin(this.data);
    return result;
  }
}

module.exports = {
  BinarySearchTree,
};
