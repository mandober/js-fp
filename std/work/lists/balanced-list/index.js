'use strict';
// self-balancing list

let ListNode = {
    init(v) {
        data= v;
        ord = 0;
        hits= 0;
        next= null
    }
};

Object.setPrototypeOf(DoubleListNode, ListNode);
Object.setPrototypeOf(SinglyLinkedList, LinkedList);
Object.setPrototypeOf(DoublyLinkedList, LinkedList);

let DoubleListNode = {
    init(v) {
        super.init();
        prev = null
    }
};

let LinkedList = {
    count: 0,
    head : null
};

let SinglyLinkedList = {
};

let DoublyLinkedList = {
};

LinkedList.append = function() {

};
