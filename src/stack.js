const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

 class Stack {
  push(element) {
      if (!("stackInStack" in this)) {
          this.stackInStack = [];
          this.stackInStack.push(element)
      } else {
          this.stackInStack.push(element)
      }
      console.log(this.stackInStack)
}

  pop() {
      let poped = this.stackInStack
      this.stackInStack = this.stackInStack.splice(0, this.stackInStack.length-1)
  return Number(poped.toString(""))
}

  peek() {
      console.log(this.stackInStack[this.stackInStack.length-1])
  return this.stackInStack[this.stackInStack.length-1]
}
}
module.exports = {
  Stack
};
