/*
    You want to be able to access the largest element in a stack.

    You've already implemented this Stack class:
*/


class Stack {
    constructor() {
  
      // Initialize an empty stack
      this.items = [];
    }
  
    // Push a new item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the last item
    pop() {
  
      // If the stack is empty, return null
      // (It would also be reasonable to throw an exception)
      if (!this.items.length) {
        return null;
      }
      return this.items.pop();
    }
  
    // Returns the last item without removing it
    peek() {
      if (!this.items.length) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  }

  /*
  
    Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item.

    *** Can be done in O(1) ***
  */


  class MaxStack {
      constructor() {
        this.items = new Stack();
        this.max = new Stack();
      }

      push(item) {
          if(this.max.peek() === null || item >= this.max.peek()) {
              this.max.push(item);
          } 
          this.items.push(item);
      }

      pop() {
          let res = this.items.pop();

          if(res === this.max.peek()) {
              this.max.pop();
          } 

          return res;
      }

      getMax() {
        return this.max.peek();
      }
  }
