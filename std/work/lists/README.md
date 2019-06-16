*linked-lists*   
Implementation of singly/doubly circular/linear linked lists with ES6 classes.    
    
---
# Linked list

Linked list is a collection of data elements, called nodes, where each node contains data (payload) and a reference to the adjacent nodes in the collection.

Unlike arrays, nodes need not be contiguous in the memory, they can be anywhere in the heap. Random access to the list is not possible - the list must be searched from the starting node until the end (or until the value is found).

## Characteristics

A Linked list is commonly instantiated as an object that just keeps a reference to the actual, first, node of the list via its `head` property. For example:

```js
// new list
var ll = new LinkedList();
// first node:
var firstNode = ll.head;
// first node's payload:
var data = ll.head.data;
// second's node payload:
var data2 = ll.head.next.data;
// number of nodes:
var nodeCount = ll.size;
// tail node:
var lastNode = ll.tail;
ll.tail.next === null; // true
```

It may have other properties, like `size` to track number of list's nodes or `tail`, if tracking of the last node is desirable. The final node in the list terminates the list by pointing to `null`.

> Linked lists are found in JavaScript's internals: prototype chain is a linear singly-linked list, where an object (node) keeps the "next" (`__proto__`) reference to the adjacent node in the list.


**Common operations:**    
- append()
- prepend()
- insert()
- traverse()
- has()
- delete()


**Time complexity**     
- Indexing: `O(n)`
- Insert/delete at beginning: `O(1)`
- Insert/delete at end:   
  - `O(1)` when last element is known    
  - `O(n)` when last element is unknown   
- Insert/delete in middle: `search time + O(1)`
- Wasted space: O(n) (average)


## Types

Linked lists can be categorized by the presence of these excluding attribute (below are only some common attributes) pairs:
- linear | circular
- singly-linked | doubly-linked
- rolled | unrolled
- unbalanced | self-balancing

A singly-linked list is a linear collection of nodes where each node contains a pointer (`next`), to the succeeding node in the list. In doubly-linked list, each node also has a reference to the preceding node (`prev`). In both cases, the last node of the list terminates the list by pointing to `null`.

Circular lists have their last node point back to the first  node, instead of pointing to `null` as is the case with linear lists.







## References:
[Linked list (Wikipedia)](https://en.wikipedia.org/wiki/Linked_list)

