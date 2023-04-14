const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(x) {
      this.value = x;
      this.next = null;
  }

  getUnderlyingList() {
      return this;
  }

  enqueue(value) {

       function goDeep(node) {
           if (!node.value) {
               node.value = value;
           } else if (node.next === null) {
               node.next = new Queue(value);
           } else {
               goDeep(node.next)
           }
       }
      goDeep(this)

}

  dequeue() {
      if (this.next === null) {
          return this.value;
      } else {
          let copy = this.value;
          this.value = this.next.value;
          this.next = this.next.next;
          return copy
      }
   }
}


module.exports = {
  Queue
};
