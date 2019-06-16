T:\web\code\published\js-linked-list

repo:
name: js-linked-list
git remote add origin https://mandober@gitlab.com/mandober/js-linked-list.git

package.json
============
name: linked-lists
version: 0.0.1
desc: Implementation of singly/doubly circular/linear linked lists with ES6 classes.
linked list, linked-list, data structures













## Implementing singly-linked list in JS

Constructor function `LinkedList` will construct first node; construction of other nodes will be handled by a helper function. This way, not only initial, but and all other nodes will be prototype linked to `LinkedList.prototype`.

```js
function LinkedList () {
    node.data = undefined;
    node.next = null;
    node.count = 0;
    node.head = true;
};

function newNode(value) {
    node.data = value;
    node.next = null;
}
```

Having all nodes to [[Prototype]] link to `LinkedList.prototype` feels unnecessary because tail nodes don't have any business accessing the methods on the prototype object, so it seems reasonable to remove tailing nodes from the prototype chain during their creation.

```js
var LinkedList = function () {
    var node = Object.create(LinkedList.prototype);
    node.data = undefined;
    node.next = null;
    node.count = 0;
    node.head = true;
    return node;
};

LinkedList.prototype.append = function (value) {
    function newNode(value) {
        var node = Object.create(null);
        node.data = value;
        node.next = null;
        return node;
    }

    function findNode(obj) {
        if (obj.head && obj.count === 1) {
            obj.data = value;
        } else if (obj.next === null) {
            obj.next = newNode(value);
        } else {
            findNode(obj.next);
        }
    }
    this.count++;
    findNode(this);
}
```
Also now it doesn't matter whether the `LinkedList` or `newNode` function is called with or without the `new` keyword as the explicitly specified object will be returned.



**Usage**   
With `append` method implemented, the list is ready for initial check.

```js
var ll = LinkedList();
ll.append(6);
ll.append(9);
ll.append(12);
ll.append(15);
ll.append(18);
```

![Linked list initial check][ll3]

Looks ok. Before going further, there is a question of "sentinel" nodes. Linked list ends in terminating sentinel node i.e. `null`, but whether there should also be an initial, "head", sentinel node that points to the first node of the list? Then, an empty liked list would, in fact, consist of head node pointing to `null`; but when node is inserted `head` property would point to the first node, although from then on, node's `next` property would provide access to sequential nodes...(off to decide what is gained by this approach...I'll be back ;)



[ll1]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-1.png?raw=true
[ll2]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-2.png?raw=true
[ll3]: https://github.com/mandober/js-data-structures/blob/master/linked-list/linked-list-3.jpg?raw=true

