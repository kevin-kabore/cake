/**
 * Queue With Two Stacks
 * Implement a queue with two stacks. Your Queue should have a enqueue
 * and a dequeue method and it should be FIFO
 * 
 * Optimize for the time cost of mm calls on your queue. 
 * These can be any mix of enqueue and dequeue calls.
 * Assume you already have a stack implementation and it 
 * gives O(1)O(1) time push and pop.
 * 
 */

 class QueueTwoStacks {
     constructor() {
         this.pushStack = new Stack();
         this.popStack = new Stack();
     }

     enqueue(item) {
         this.pushStack.push(item);
     }

     dequeue() {
         if(this.popStack.size === 0) {
            
            while(this.pushStack.size > 0) {
                let item = this.pushStack.pop();
                this.popStack.push(item);
            }

            if (this.popStack.size === 0) throw new Error('Queue is Empty');
         }
         return this.popStack.pop();
     }

 }

 class StackNode {
    constructor(item) {
        this.data = item;
        this.above = null;
        this.below = null;
    }
 }

 class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    
    push(item) {
        let newNode = new StackNode(item);
        if(!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.join(newNode, this.top);
            this.top = newNode;
        }
        
        this.size++;
        return this;
    }
    
    pop() {
        let top = this.top;
        if(!top) return null;
        
        if(this.top === this.bottom) this.bottom = null;
        
        this.top = this.top.below;
        this.size--;
        return top.data;
    }
    
    join(topNode, bottomNode) {
        if(bottomNode !== null) bottomNode.above = topNode;
        if(topNode !== null) topNode.below = bottomNode;
    }
 }