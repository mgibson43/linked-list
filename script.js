'use strict'

class LinkedList {
  constructor() {
    this.listHead = null;
    this.length = 0;
  }

  append(value) {
    // Create new node
    const node = new Node(value);

    // Initialize variable to store current node
    let current;

    // If list is empty, add node to head
    // If list is not empty, iterate to end of list
    if (this.listHead === null) {
      this.listHead = node;
    } else {
      current = this.listHead;

      // Iterates to end of list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // Increments list size
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.listHead === null) {
      this.listHead = node;

    } else {

      let current = this.listHead;
      this.listHead = node;
      this.listHead.next = current;
    }
    this.length++;
  }

  // Returns size of list
  size() {
    return this.length;
  }

  // Returns head of list
  head() {
    return this.listHead;
  }

  tail() {
    let current = this.listHead;

    // Iterate to end of list
    while (current.next) {
      current = current.next;
    }

    // Returns last item in list
    return current;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.append('cat');
list.append('dog');
list.append('horse');
list.prepend('cow');
// console.log(list.size());
// console.log(list.head());

