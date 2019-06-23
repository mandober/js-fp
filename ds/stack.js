/*
Data structures in JS: Stack
*/

class Stak {

    top = 0;
    len = 0;
    items = [];

    // underlying storage: array
    constructor() {
        //this.items = [];
    }

    // push(item): put an item on the stack
    push(item) {
        this.items[this.top++] = item;
        this.len++;
    }

    // pop()
    // peek()
    // isEmpty()
    // printStack()
}

var s = new Stak();
s.push(1);


// Creates a stack
class Stack {
  constructor() {
        this.count = 0;
        this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.size = function () {
        return this.count;
    };

    // Returns the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    };
  }

}


var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
